/* Amigu Otaku — monta menu, rodapé, cards, galeria e modal */
(function () {
  var C = window.AMIGU_CONFIG;
  var P = window.AMIGU_PRODUTOS || [];
  var pagina = document.body.getAttribute("data-pagina");

  var ICON_WHATS = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.3.8 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2l-.4-.2Z"/></svg>';

  function whatsLink(msg) {
    return "https://wa.me/" + C.whatsapp + "?text=" + encodeURIComponent(msg || C.mensagemPadrao);
  }
  window.amiguWhats = whatsLink;

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* ---------- Cabeçalho ---------- */
  var links = [
    ["index.html", "Início", "inicio"],
    ["catalogo.html?cat=rpg", "RPG", "rpg"],
    ["catalogo.html?cat=tcg", "TCG", "tcg"],
    ["amigurumis.html", "Amigurumis", "amigurumis"],
    ["catalogo.html", "Catálogo", "catalogo"],
    ["encomendas.html", "Encomendas", "encomendas"],
    ["index.html#sobre", "Sobre", "sobre"]
  ];
  var cat = new URLSearchParams(location.search).get("cat");
  var atual = pagina === "catalogo" && (cat === "rpg" || cat === "tcg") ? cat : pagina;

  var topo = document.getElementById("topo");
  if (topo) {
    topo.className = "topo";
    topo.innerHTML =
      '<div class="container">' +
      '<a class="marca" href="index.html" aria-label="Amigu Otaku, página inicial">' +
      '<img src="img/marca/mascote-logo.png" alt="" width="68" height="56"><span>Amigu <b>Otaku</b></span></a>' +
      '<button class="menu-btn" aria-label="Abrir menu" aria-expanded="false" aria-controls="menu"><span></span><span></span><span></span></button>' +
      '<nav class="menu" id="menu" aria-label="Principal">' +
      links.map(function (l) {
        return '<a href="' + l[0] + '"' + (l[2] === atual ? ' aria-current="page"' : "") + ">" + l[1] + "</a>";
      }).join("") +
      "</nav></div>";
    var btn = topo.querySelector(".menu-btn"), menu = topo.querySelector(".menu");
    btn.addEventListener("click", function () {
      var a = menu.classList.toggle("aberto");
      btn.setAttribute("aria-expanded", a);
    });
    menu.addEventListener("click", function (e) { if (e.target.tagName === "A") menu.classList.remove("aberto"); });
  }

  /* ---------- Rodapé ---------- */
  var rod = document.getElementById("rodape");
  if (rod) {
    rod.className = "rodape";
    rod.innerHTML =
      '<div class="container">' +
      '<div><img class="logo-rodape" src="img/marca/logo.png" alt="Amigu Otaku">' +
      "<p>Acessórios de RPG e TCG impressos em 3D, amigurumis feitos à mão e tudo que é nerd, com muito carinho.</p></div>" +
      "<div><h4>Navegue</h4><ul>" +
      '<li><a href="catalogo.html?cat=rpg">Acessórios de RPG</a></li>' +
      '<li><a href="catalogo.html?cat=tcg">TCG</a></li>' +
      '<li><a href="catalogo.html?cat=boardgame">Board Games</a></li>' +
      '<li><a href="amigurumis.html">Amigurumis</a></li>' +
      '<li><a href="encomendas.html">Encomendas</a></li>' +

      "</ul></div>" +
      "<div><h4>Fale com a gente</h4><ul>" +
      '<li><a href="' + whatsLink() + '" target="_blank" rel="noopener">WhatsApp ' + esc(C.whatsappTexto) + "</a></li>" +
      '<li><a href="' + esc(C.instagram) + '" target="_blank" rel="noopener">Instagram ' + esc(C.instagramTexto) + "</a></li>" +
      '<li><a href="' + esc(C.facebook) + '" target="_blank" rel="noopener">Facebook</a></li>' +
      "</ul></div>" +
      '<p class="copy">© ' + new Date().getFullYear() + " Amigu Otaku · amiguotaku.com.br · Feito à mão e em 3D no Brasil</p>" +
      "</div>";
  }

  /* ---------- WhatsApp flutuante ---------- */
  var wf = document.createElement("a");
  wf.className = "whats-flutuante";
  wf.href = whatsLink();
  wf.target = "_blank"; wf.rel = "noopener";
  wf.setAttribute("aria-label", "Conversar no WhatsApp");
  wf.innerHTML = ICON_WHATS;
  wf.style.color = "#1B1530";
  document.body.appendChild(wf);

  /* ---------- Cards ---------- */
  var NOMES = { rpg: "RPG", tcg: "TCG", boardgame: "Board Game", "3d": "3D", amigurumi: "Amigurumi", nerd: "Nerd" };
  function selo(p) {
    if (p.placeholder) return '<span class="selo rosa">Em breve</span>';
    if (p.novo) return '<span class="selo magenta">Novidade</span>';
    var c = p.categorias[0];
    return '<span class="selo' + (c === "amigurumi" ? " lavanda" : "") + '">' + NOMES[c] + "</span>";
  }
  function card(p) {
    if (p.placeholder) {
      return '<article class="card reservado">' +
        '<div class="img">' + selo(p) + '<img src="img/mascote/pose-29.png" alt="" loading="lazy"></div>' +
        '<div class="txt"><span class="aviso">Espaço reservado · aguardando fotos</span><h3>' + esc(p.nome) + "</h3>" +
        '<p class="resumo">' + esc(p.resumo) + '</p><span class="preco">' + esc(p.preco) + "</span></div></article>";
    }
    return '<button class="card" type="button" data-id="' + p.id + '" aria-haspopup="dialog">' +
      '<div class="img">' + selo(p) + (p.video ? '<span class="selo rosa tem-video">▶ Vídeo</span>' : "") + '<img src="' + p.fotos[0] + '" alt="' + esc(p.nome) + '" loading="lazy"></div>' +
      '<div class="txt"><h3>' + esc(p.nome) + "</h3>" +
      (p.serie ? '<p class="serie">' + esc(p.serie) + "</p>" : "") +
      '<p class="resumo">' + esc(p.resumo) + '</p><span class="preco">' + esc(p.preco) + "</span></div></button>";
  }
  window.amiguRender = function (el, lista) {
    el.innerHTML = lista.map(card).join("");
  };

  /* ---------- Modal ---------- */
  var modal = document.createElement("div");
  modal.className = "modal";
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  document.body.appendChild(modal);
  var ultimoFoco = null;

  function abrirModal(html) {
    ultimoFoco = document.activeElement;
    modal.innerHTML = html;
    modal.classList.add("aberto");
    document.body.style.overflow = "hidden";
    var f = modal.querySelector(".modal-fechar");
    if (f) f.focus();
  }
  function fecharModal() {
    modal.classList.remove("aberto");
    modal.innerHTML = "";
    document.body.style.overflow = "";
    if (ultimoFoco) ultimoFoco.focus();
  }
  modal.addEventListener("click", function (e) {
    if (e.target === modal || e.target.closest(".modal-fechar")) fecharModal();
    var mini = e.target.closest(".miniaturas button");
    if (mini) {
      var principal = modal.querySelector(".principal");
      if (mini.hasAttribute("data-video")) {
        principal.innerHTML = '<video src="' + mini.getAttribute("data-video") + '" controls autoplay muted playsinline style="width:100%;height:100%;object-fit:contain;background:#000"></video>';
      } else {
        principal.innerHTML = '<img src="' + mini.getAttribute("data-src") + '" alt="">';
      }
      modal.querySelectorAll(".miniaturas button").forEach(function (b) { b.removeAttribute("aria-current"); });
      mini.setAttribute("aria-current", "true");
    }
  });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && modal.classList.contains("aberto")) fecharModal(); });

  function abrirProduto(id) {
    var p = P.filter(function (x) { return x.id === id; })[0];
    if (!p) return;
    var msg = "Oi, Amigu Otaku! Tenho interesse em: " + p.nome + (p.serie ? " (" + p.serie + ")" : "") + ". Pode me passar mais detalhes?";
    abrirModal(
      '<div class="modal-caixa"><button class="modal-fechar" aria-label="Fechar">×</button>' +
      '<div class="modal-galeria"><div class="principal"><img src="' + p.fotos[0] + '" alt="' + esc(p.nome) + '"></div>' +
      (p.fotos.length > 1 || p.video ? '<div class="miniaturas">' + p.fotos.map(function (f, i) {
        return '<button data-src="' + f + '"' + (i === 0 ? ' aria-current="true"' : "") + ' aria-label="Foto ' + (i + 1) + '"><img src="' + f + '" alt=""></button>';
      }).join("") + (p.video ? '<button class="mini-video" data-video="' + p.video + '" aria-label="Ver vídeo"><img src="' + p.fotos[0] + '" alt=""><span>▶</span></button>' : "") + "</div>" : "") + "</div>" +
      '<div class="modal-info"><div>' + selo(p) + "</div><h2>" + esc(p.nome) + "</h2>" +
      (p.serie ? '<p class="serie" style="margin:-6px 0 0;font-weight:700">' + esc(p.serie) + "</p>" : "") +
      '<div class="preco">' + esc(p.preco) + '</div><p class="desc">' + esc(p.descricao) + "</p>" +
      '<div class="botoes"><a class="btn btn-whats" target="_blank" rel="noopener" href="' + whatsLink(msg) + '">' + ICON_WHATS + "Quero esse!</a>" +
      (p.sumup ? '<a class="btn btn-amarelo" target="_blank" rel="noopener" href="' + esc(C.lojaUrl + "product/" + p.sumup) + '">Comprar agora</a>' : "") + '</div>' +
      '<p class="nota">Peças feitas à mão e em impressão 3D: cores e detalhes podem variar. Personalizamos sob encomenda.</p>' +
      "</div></div>"
    );
  }
  document.addEventListener("click", function (e) {
    var c = e.target.closest(".card[data-id]");
    if (c) abrirProduto(c.getAttribute("data-id"));
    var g = e.target.closest(".galeria button");
    if (g) {
      abrirModal('<div class="zoom-wrap"><button class="modal-fechar" aria-label="Fechar" style="position:fixed">×</button>' +
        '<img class="zoom-img" src="' + g.getAttribute("data-src") + '" alt="' + esc(g.getAttribute("data-nome")) + '">' +
        '<p class="zoom-legenda">' + esc(g.getAttribute("data-nome")) + ' · <a style="color:#F0E63A" target="_blank" rel="noopener" href="' +
        whatsLink("Oi, Amigu Otaku! Vi o amigurumi " + g.getAttribute("data-nome") + " no site e queria um parecido.") + '">Quero um parecido</a></p></div>');
    }
  });

  /* ---------- Galeria amigurumi ---------- */
  window.amiguGaleria = function (el, limite, ordem) {
    var G = window.AMIGU_GALERIA, total = window.AMIGU_GALERIA_TOTAL, nums = [];
    if (ordem) nums = ordem.slice();
    else for (var i = 1; i <= total; i++) nums.push(i);
    if (limite) nums = nums.slice(0, limite);
    el.innerHTML = nums.map(function (n) {
      var src = "img/amigurumi/" + (n < 10 ? "0" : "") + n + ".jpg";
      var nome = G[n] || "Amigu sob encomenda";
      return '<button type="button" data-src="' + src + '" data-nome="' + esc(nome) + '"><img src="' + src + '" alt="Amigurumi ' + esc(nome) + '" loading="lazy">' +
        (G[n] ? "<span>" + esc(G[n].split(" · ")[0]) + "</span>" : "") + "</button>";
    }).join("");
  };

  /* ---------- Classes ---------- */
  window.amiguClasses = function (el) {
    el.innerHTML = window.AMIGU_CLASSES.map(function (c) {
      var img = c.arte
        ? '<img class="arte" src="img/classes/' + c.arte + '" alt="Mascote Amigu como ' + c.nome + '" loading="lazy" style="background:' + c.cor + '">'
        : '<img src="img/classes/' + c.id + '.jpg" alt="Mascote Amigu como ' + c.nome + '" loading="lazy">';
      return '<figure class="classe" style="margin:0">' + img +
        "<div><h4>" + c.nome + "</h4><p>" + c.frase + "</p></div></figure>";
    }).join("");
  };

  /* Links de WhatsApp marcados no HTML */
  document.querySelectorAll("[data-whats]").forEach(function (a) {
    a.href = whatsLink(a.getAttribute("data-whats") || undefined);
    a.target = "_blank"; a.rel = "noopener";
  });
  document.querySelectorAll("[data-loja]").forEach(function (a) {
    a.href = C.lojaUrl; a.target = "_blank"; a.rel = "noopener";
  });
})();
