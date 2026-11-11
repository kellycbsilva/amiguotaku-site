# Gera, a partir de js/dados.js:
#   - uma página por produto com preço (produto-<slug>.html), com dados estruturados schema.org/Product
#   - sitemap.xml
#   - merchant/produtos.xml (feed do Google Merchant Center, só os itens da lista $MERCHANT)
# Rode de novo sempre que mudar produtos/preços em js/dados.js:
#   botão direito > Executar com o PowerShell   (ou: powershell -File ferramentas\gerar-seo.ps1)

$ErrorActionPreference = "Stop"
$raiz = Split-Path -Parent $PSScriptRoot
$SITE = "https://amiguotaku.com.br/"
$LOJA = "https://amiguotaku.sumupstore.com/product/"
$HOJE = (Get-Date).ToString("yyyy-MM-dd")
$utf8 = New-Object System.Text.UTF8Encoding($false)

# Produtos enviados ao Google Merchant Center (ids de js/dados.js).
# Não inclua peças de personagem licenciado.
$MERCHANT = @("torre-observador", "torre-monge", "deckbox-energias", "dragao-articulado")
# Títulos e descrições só do feed, sem marcas de terceiros (o site continua com os nomes normais)
$TITULO_FEED = @{
  "torre-observador" = "Torre de Dados para RPG em Impressão 3D - Modelo Criatura de Olhos | Amiguotaku"
  "torre-monge" = "Torre de Dados para RPG em Impressão 3D - Modelo Sábio Encapuzado | Amiguotaku"
  "deckbox-energias" = "Deck Box para Cartas TCG em Impressão 3D | Amiguotaku"
  "dragao-articulado" = "Dragão Articulado de Três Cabeças em Impressão 3D | Amiguotaku"
}
$DESC_FEED = @{
  "deckbox-energias" = "Caixa para deck de cartas TCG impressa em 3D, com tampa de encaixe e símbolos em relevo em amarelo ou laranja. Comporta um deck com sleeves."
}

function Esc($s) { [System.Net.WebUtility]::HtmlEncode([string]$s) }
function Grava($rel, $txt) { [IO.File]::WriteAllText((Join-Path $raiz $rel), $txt, $utf8) }

$js = [IO.File]::ReadAllText((Join-Path $raiz "js\dados.js"), [Text.Encoding]::UTF8)
$ini = $js.IndexOf("window.AMIGU_PRODUTOS")
$lista = $js.Substring($ini, $js.IndexOf("window.AMIGU_GALERIA") - $ini)

$produtos = @()
foreach ($m in [regex]::Matches($lista, '\{\s*id:\s*"[^"]+"[\s\S]*?\n  \}')) {
  $b = $m.Value
  function Campo($n) { $r = [regex]::Match($b, $n + ':\s*"((?:[^"\\]|\\.)*)"'); if ($r.Success) { $r.Groups[1].Value -replace '\\"', '"' } else { $null } }
  $p = [ordered]@{
    id = Campo "id"; nome = Campo "nome"; preco = Campo "preco"; resumo = Campo "resumo"; descricao = Campo "descricao"
    sumup = Campo "sumup"; video = Campo "video"; serie = Campo "serie"
    categorias = @([regex]::Matches([regex]::Match($b, 'categorias:\s*\[([^\]]*)\]').Groups[1].Value, '"([^"]+)"') | ForEach-Object { $_.Groups[1].Value })
    placeholder = $b -match 'placeholder:\s*true'
    fotos = @()
  }
  $f = [regex]::Match($b, 'fotos\("([^"]+)",\s*(\d+)\)')
  if ($f.Success) { 1..[int]$f.Groups[2].Value | ForEach-Object { $p.fotos += "img/produtos/" + $f.Groups[1].Value + "/" + $_.ToString("00") + ".jpg" } }
  else { [regex]::Matches([regex]::Match($b, 'fotos:\s*\[([^\]]*)\]').Groups[1].Value, '"([^"]+)"') | ForEach-Object { $p.fotos += $_.Groups[1].Value } }
  $produtos += New-Object PSObject -Property $p
}

# Página própria: produto com preço, link da loja e que não seja amigurumi de personagem
$comPagina = $produtos | Where-Object { $_.preco -like "R$*" -and $_.sumup -and -not $_.placeholder -and ($_.categorias -notcontains "amigurumi") }

function Valor($preco) { ($preco -replace '[^\d,]', '') -replace ',', '.' }
function Sufixo($p) {
  $alvo = if ($p.categorias -contains "tcg") { "TCG e card games" } elseif ($p.categorias -contains "rpg") { "RPG de mesa" } else { "decoração nerd" }
  if ($p.categorias -contains "3d") { "impressão 3D para $alvo" } else { "para $alvo" }
}

$paginas = @()
foreach ($p in $comPagina) {
  $arq = "produto-" + $p.sumup + ".html"
  $url = $SITE + $arq
  $suf = Sufixo $p
  $titulo = "$($p.nome) | $suf | Amigu Otaku"
  $desc = "$($p.resumo) $($p.nome) em $suf, feita em São Paulo. Entrega em mãos na Grande SP e envio para todo o Brasil."
  if ($desc.Length -gt 160) { $desc = "$($p.resumo) Feito em São Paulo, envio para todo o Brasil." }
  $valor = Valor $p.preco
  $imgs = @($p.fotos | ForEach-Object { $SITE + $_ })
  $tipoCat = if ($p.categorias -contains "tcg") { @("TCG", "catalogo.html?cat=tcg") } else { @("RPG", "catalogo.html?cat=rpg") }

  $ld = [ordered]@{
    "@context" = "https://schema.org"
    "@graph" = @(
      [ordered]@{
        "@type" = "Product"; "@id" = $url + "#produto"; name = $p.nome; description = $p.descricao; image = $imgs; sku = $p.id
        brand = [ordered]@{ "@type" = "Brand"; name = "Amigu Otaku" }
        category = $suf
        offers = [ordered]@{
          "@type" = "Offer"; url = $url; priceCurrency = "BRL"; price = $valor
          availability = "https://schema.org/InStock"; itemCondition = "https://schema.org/NewCondition"
          seller = [ordered]@{ "@id" = $SITE + "#loja" }
        }
      },
      [ordered]@{
        "@type" = "BreadcrumbList"; itemListElement = @(
          [ordered]@{ "@type" = "ListItem"; position = 1; name = "Início"; item = $SITE },
          [ordered]@{ "@type" = "ListItem"; position = 2; name = $tipoCat[0]; item = $SITE + $tipoCat[1] },
          [ordered]@{ "@type" = "ListItem"; position = 3; name = $p.nome; item = $url }
        )
      }
    )
  }
  $ldTxt = ($ld | ConvertTo-Json -Depth 10)

  $alt = "$($p.nome), $suf, Amigu Otaku"
  $minis = ""
  if ($p.fotos.Count -gt 1 -or $p.video) {
    $minis = "<div class=`"miniaturas`">"
    for ($i = 0; $i -lt $p.fotos.Count; $i++) {
      $f = $p.fotos[$i]; $n = $i + 1
      $cur = if ($i -eq 0) { " aria-current=`"true`"" } else { "" }
      $minis += "<button type=`"button`" data-src=`"$f`"$cur aria-label=`"Foto $n`"><img src=`"$f`" alt=`"" + (Esc "$($p.nome), foto $n") + "`" loading=`"lazy`"></button>"
    }
    if ($p.video) { $minis += '<button type="button" class="mini-video" data-video="' + $p.video + '" aria-label="Ver vídeo"><img src="' + $p.fotos[0] + '" alt=""><span>▶</span></button>' }
    $minis += "</div>"
  }
  $msg = [uri]::EscapeDataString("Oi, Amigu Otaku! Tenho interesse em: $($p.nome). Pode me passar mais detalhes?")

  $html = @"
<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>$(Esc $titulo)</title>
<meta name="description" content="$(Esc $desc)">
<link rel="canonical" href="$url">
<meta property="og:type" content="product">
<meta property="og:site_name" content="Amigu Otaku">
<meta property="og:locale" content="pt_BR">
<meta property="og:url" content="$url">
<meta property="og:title" content="$(Esc "$($p.nome) · Amigu Otaku")">
<meta property="og:description" content="$(Esc $p.resumo)">
<meta property="og:image" content="$($imgs[0])">
<meta property="product:price:amount" content="$valor">
<meta property="product:price:currency" content="BRL">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="img/marca/favicon.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Nunito:wght@400;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="css/style.css">
<script type="application/ld+json">
$ldTxt
</script>
</head>
<body data-pagina="produto">
<header id="topo"></header>

<main>
  <section class="secao" style="padding-top:32px">
    <div class="container">
      <nav aria-label="Você está em" style="margin-bottom:16px;font-weight:700"><a href="index.html">Início</a> › <a href="$($tipoCat[1])">$($tipoCat[0])</a> › <span>$(Esc $p.nome)</span></nav>
      <article class="modal-caixa produto-pagina" style="max-height:none;overflow:visible">
        <div class="modal-galeria"><div class="principal"><img src="$($p.fotos[0])" alt="$(Esc $alt)"></div>$minis</div>
        <div class="modal-info">
          <h1 style="font-size:1.9rem;margin:0">$(Esc $p.nome)</h1>
          <p style="margin:0;font-weight:700">$(Esc ($suf.Substring(0,1).ToUpper() + $suf.Substring(1)))</p>
          <div class="preco">$(Esc $p.preco)</div>
          <p class="desc">$(Esc $p.descricao)</p>
          <div class="botoes">
            <a class="btn btn-amarelo" target="_blank" rel="noopener" href="$LOJA$($p.sumup)">Comprar agora</a>
            <a class="btn btn-whats" target="_blank" rel="noopener" href="https://wa.me/5511993356119?text=$msg">Quero esse! (WhatsApp)</a>
          </div>
          <p class="nota">Peça feita em impressão 3D em São Paulo: cores e detalhes podem variar. Personalizamos cores sob encomenda. Entrega em mãos nas estações de metrô e trem da Grande SP e do ABC, ou envio para todo o Brasil.</p>
          <p><a href="$($tipoCat[1])">Ver mais acessórios de $($tipoCat[0])</a> · <a href="encomendas.html">Pedir sob encomenda</a></p>
        </div>
      </article>
    </div>
  </section>
</main>

<footer id="rodape"></footer>

<script src="js/config.js"></script>
<script src="js/dados.js"></script>
<script src="js/app.js"></script>
<script>
document.querySelectorAll(".produto-pagina .miniaturas button").forEach(function (b) {
  b.addEventListener("click", function () {
    var pr = document.querySelector(".produto-pagina .principal");
    pr.innerHTML = b.hasAttribute("data-video")
      ? '<video src="' + b.getAttribute("data-video") + '" controls autoplay muted playsinline style="width:100%;height:100%;object-fit:contain;background:#000"></video>'
      : '<img src="' + b.getAttribute("data-src") + '" alt="' + b.querySelector("img").alt + '">';
    document.querySelectorAll(".produto-pagina .miniaturas button").forEach(function (x) { x.removeAttribute("aria-current"); });
    b.setAttribute("aria-current", "true");
  });
});
</script>
</body>
</html>
"@
  Grava $arq $html
  $paginas += $arq
}

# ---------- sitemap.xml ----------
$urls = @("", "catalogo.html", "amigurumis.html", "encomendas.html", "links/") + $paginas
$sm = '<?xml version="1.0" encoding="UTF-8"?>' + "`n" + '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' + "`n"
foreach ($u in $urls) { $sm += "  <url><loc>$SITE$u</loc><lastmod>$HOJE</lastmod></url>`n" }
$sm += "</urlset>`n"
Grava "sitemap.xml" $sm

# ---------- merchant/produtos.xml ----------
New-Item -ItemType Directory -Force (Join-Path $raiz "merchant") | Out-Null
$it = ""
foreach ($id in $MERCHANT) {
  $p = $comPagina | Where-Object { $_.id -eq $id }
  if (-not $p) { Write-Warning "Produto $id não encontrado ou sem página"; continue }
  $extra = ($p.fotos | Select-Object -Skip 1 -First 10 | ForEach-Object { "      <g:additional_image_link>$SITE$_</g:additional_image_link>" }) -join "`n"
  $tipo = if ($p.categorias -contains "tcg") { "Acessórios de TCG &gt; Deck box" } elseif ($p.categorias -contains "rpg") { "Acessórios de RPG &gt; Torre de dados" } else { "Produtos nerd &gt; Impressão 3D" }
  $it += @"
    <item>
      <g:id>$($p.id)</g:id>
      <g:title>$(Esc $(if ($TITULO_FEED[$p.id]) { $TITULO_FEED[$p.id] } else { "$($p.nome) | Amiguotaku" }))</g:title>
      <g:description>$(Esc (($(if ($DESC_FEED[$p.id]) { $DESC_FEED[$p.id] } else { $p.descricao })) + " Feito pela Amiguotaku em São Paulo, com envio para todo o Brasil."))</g:description>
      <g:link>${SITE}produto-$($p.sumup).html</g:link>
      <g:image_link>$SITE$($p.fotos[0])</g:image_link>
$extra
      <g:price>$(Valor $p.preco) BRL</g:price>
      <g:availability>in_stock</g:availability>
      <g:condition>new</g:condition>
      <g:brand>Amiguotaku</g:brand>
      <g:identifier_exists>no</g:identifier_exists>
      <g:product_type>$tipo</g:product_type>
    </item>

"@
}
$feed = @"
<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">
  <channel>
    <title>Amigu Otaku</title>
    <link>$SITE</link>
    <description>Acessórios de RPG e TCG impressos em 3D</description>
$it  </channel>
</rss>
"@
Grava "merchant\produtos.xml" $feed

Write-Host ("Páginas de produto: " + $paginas.Count + " | sitemap.xml e merchant/produtos.xml atualizados")
