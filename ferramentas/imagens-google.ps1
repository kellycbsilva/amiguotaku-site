# Gera logo quadrado e capa para o Perfil de Empresa no Google (img/marca/google/)
Add-Type -AssemblyName System.Drawing
$raiz = Split-Path -Parent $PSScriptRoot
$out = Join-Path $raiz "img\marca\google"
New-Item -ItemType Directory -Force $out | Out-Null

function Jpeg($bmp, $arq) {
  $enc = [Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
  $p = New-Object Drawing.Imaging.EncoderParameters 1
  $p.Param[0] = New-Object Drawing.Imaging.EncoderParameter ([Drawing.Imaging.Encoder]::Quality), 92L
  $bmp.Save($arq, $enc, $p)
}
function Novo($w, $h, $cor) {
  $b = New-Object Drawing.Bitmap $w, $h
  $g = [Drawing.Graphics]::FromImage($b)
  $g.SmoothingMode = "AntiAlias"; $g.InterpolationMode = "HighQualityBicubic"; $g.PixelOffsetMode = "HighQuality"
  $g.Clear([Drawing.ColorTranslator]::FromHtml($cor))
  return @($b, $g)
}
function Encaixa($g, $img, $x, $y, $w, $h) {
  $s = [Math]::Min($w / $img.Width, $h / $img.Height)
  $nw = [int]($img.Width * $s); $nh = [int]($img.Height * $s)
  $g.DrawImage($img, [int]($x + ($w - $nw) / 2), [int]($y + ($h - $nh) / 2), $nw, $nh)
}

$logo = [Drawing.Image]::FromFile((Join-Path $raiz "img\marca\logo.png"))

# Logo quadrado 720x720, fundo branco
$r = Novo 720 720 "#FFFFFF"; Encaixa $r[1] $logo 30 30 660 660
Jpeg $r[0] (Join-Path $out "logo-quadrado.jpg"); $r[1].Dispose(); $r[0].Dispose()

# Capa 1920x1080: fundo lavanda, logo à esquerda, 3 produtos em cartões à direita
$r = Novo 1920 1080 "#DDE3F5"; $g = $r[1]
Encaixa $g $logo 60 220 880 640
$fotos = @("img\produtos\torre-arvore\01.jpg", "img\produtos\dragao-articulado\01.jpg", "img\produtos\case-d20\01.jpg", "img\ambiente\IMG_2108.jpg")
$pos = @(@(980, 90), @(1430, 90), @(980, 560), @(1430, 560))
$caneta = New-Object Drawing.Pen ([Drawing.Color]::Black), 8
for ($i = 0; $i -lt 4; $i++) {
  $f = [Drawing.Image]::FromFile((Join-Path $raiz $fotos[$i]))
  $x = $pos[$i][0]; $y = $pos[$i][1]; $t = 430
  $g.FillRectangle((New-Object Drawing.SolidBrush ([Drawing.Color]::Black)), $x + 12, $y + 12, $t, $t)
  $g.FillRectangle([Drawing.Brushes]::White, $x, $y, $t, $t)
  $s = [Math]::Max($t / $f.Width, $t / $f.Height)
  $sw = [int]($t / $s); $sh = [int]($t / $s)
  $g.DrawImage($f, (New-Object Drawing.Rectangle $x, $y, $t, $t), [int](($f.Width - $sw) / 2), [int](($f.Height - $sh) / 2), $sw, $sh, [Drawing.GraphicsUnit]::Pixel)
  $g.DrawRectangle($caneta, $x, $y, $t, $t)
  $f.Dispose()
}
Jpeg $r[0] (Join-Path $out "capa.jpg"); $g.Dispose(); $r[0].Dispose()
$logo.Dispose()
Write-Host "OK"
