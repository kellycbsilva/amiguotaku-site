/* =========================================================
   CATÁLOGO DA VITRINE
   - categorias: "rpg", "3d", "tcg", "boardgame", "amigurumi", "nerd"
   - preco: texto livre ("R$ 52,00", "Sob encomenda", "Em breve")
   - fotos: caminhos dentro de img/
   - placeholder: true = espaço reservado aguardando fotos/infos
   ========================================================= */
window.AMIGU_CATEGORIAS = [
  { id: "todos",     nome: "Tudo" },
  { id: "rpg",       nome: "RPG" },
  { id: "tcg",       nome: "TCG" },
  { id: "boardgame", nome: "Board Games" },
  { id: "3d",        nome: "Produtos 3D" },
  { id: "amigurumi", nome: "Amigurumis" },
  { id: "nerd",      nome: "Nerd & Geek" }
];

function fotos(pasta, n) {
  var a = [];
  for (var i = 1; i <= n; i++) a.push("img/produtos/" + pasta + "/" + (i < 10 ? "0" : "") + i + ".jpg");
  return a;
}

window.AMIGU_PRODUTOS = [
  /* ---------------- RPG / 3D ---------------- */
  {
    id: "case-d20", nome: "Case D20 magnético", categorias: ["rpg", "3d"], preco: "R$ 50,00", destaque: true,
    resumo: "Porta-dados em formato de D20 gigante, com fechamento por ímãs.",
    descricao: "Guarde seus dados com estilo dentro de um D20 gigante! Fechamento magnético firme e fácil de abrir, espaço interno para vários dados ou conjuntos completos, impressão 3D de alta qualidade. Cores variadas: preto, vermelho, amarelo, azul e metalizados. Quer em alguma cor específica? É só escrever no campo de observação ao finalizar a compra.",
    fotos: fotos("case-d20", 12), sumup: "case-d20", video: "videos/case-d20.mp4"
  },
  {
    id: "case-classes", nome: "Case de dados com classes", categorias: ["rpg", "3d"], preco: "R$ 45,00", destaque: true,
    resumo: "Case redonda para 7 dados, com a classe do seu personagem gravada na tampa.",
    descricao: "Compartimentos individuais para até 7 dados poliédricos e tampa de encaixe com a classe à sua escolha (bárbaro, mago, ladino, clérigo e mais). Resistente, compacta e ótima para presentear jogadores e mestres. Ideal para D&D, Tormenta20, Pathfinder e outros sistemas. Quer em alguma cor específica? É só escrever no campo de observação ao finalizar a compra.",
    fotos: fotos("case-para-dados-rpg", 8), sumup: "case-para-dados-rpg"
  },
  {
    id: "torre-de-dados", nome: "Torre de dados medieval", categorias: ["rpg", "3d"], preco: "R$ 50,00", destaque: true,
    resumo: "Torre roladora em formato de castelo, com acabamento metálico.",
    descricao: "Rampa interna que garante rolagens justas e cheias de impacto. Impressa em 3D com acabamento metálico e cores personalizáveis sob encomenda (o degradê roxo e dourado faz sucesso!). Tamanho compacto, cabe na mochila. Quer em alguma cor específica? É só escrever no campo de observação ao finalizar a compra.",
    fotos: fotos("torre-de-dados", 9), sumup: "torre-de-dados", video: "videos/torre-de-dados.mp4"
  },
  {
    id: "torre-dragao", nome: "Torre Fortaleza Dragão", categorias: ["rpg", "3d"], preco: "R$ 180,00", destaque: true, novo: true,
    resumo: "Torre de dados com um dragão no topo e bandeja de rolagem.",
    descricao: "Versão épica da torre de dados, com um dragão guardando o castelo. Peça de centro de mesa para mestres e colecionadores. Cores e acabamento a combinar. Quer em alguma cor específica? É só escrever no campo de observação ao finalizar a compra.",
    fotos: fotos("torre-dragao", 8), sumup: "torre-fortaleza-dragao", video: "videos/torre-dragao.mp4"
  },
  {
    id: "case-grimorio", nome: "Case Grimório Livro Torre", categorias: ["rpg", "3d"], preco: "R$ 85,00", destaque: true, novo: true,
    resumo: "Porta-dados em formato de livro de magias que abre como um tomo.",
    descricao: "Um grimório que esconde seus dados! Abre como um livro e tem encaixes para o conjunto completo. Disponível com capa de D20 e outras artes. Cores a combinar. Quer em alguma cor específica? É só escrever no campo de observação ao finalizar a compra.",
    fotos: fotos("case-grimorio", 10), sumup: "case-grimorio-livro-torre", video: "videos/case-grimorio.mp4"
  },
  {
    id: "case-retangular", nome: "Estojo retangular para dados", categorias: ["rpg", "3d"], preco: "R$ 35,00",
    resumo: "Estojo com encaixes moldados para os 7 dados (D4 a D20).",
    descricao: "Estojo resistente e compacto com fechamento por trava e encaixe individual para cada dado, protegendo contra impactos e arranhões. Várias cores. Dados vendidos separadamente. Quer em alguma cor específica? É só escrever no campo de observação ao finalizar a compra.",
    fotos: fotos("case-retangular", 10), sumup: "case-retangular"
  },
  {
    id: "kit-de-dados", nome: "Kit de dados perolados", categorias: ["rpg"], preco: "R$ 35,00",
    resumo: "Conjunto com os 7 dados clássicos: D4, D6, D8, D10, D%, D12 e D20.",
    descricao: "Dados com acabamento perolado e numeração de alta legibilidade, em diversas cores. Combine com uma case ou torre para uma experiência completa.",
    fotos: fotos("kit-de-dados-para-rpg", 5), sumup: "kit-de-dados-para-rpg"
  },

  /* ---------------- Torres e peças 3D (fotos da pasta Rpg 1) ---------------- */
  {
    id: "torre-dragao-verde-caveira", nome: "Torre Dragão Caveira", categorias: ["rpg", "3d"], preco: "R$ 90,00", destaque: true, novo: true,
    resumo: "Uma caveira de dragão de boca aberta guarda a bandeja de rolagem.",
    descricao: "Torre de dados em formato de caveira de dragão de boca aberta, com chifres e bandeja de rolagem na base. Acabamento verde metálico; outras cores sob encomenda. Quer em alguma cor específica? É só escrever no campo de observação ao finalizar a compra.",
    fotos: fotos("torre-dragao-verde-caveira", 3), sumup: "torre-dragao-verde-caveira", video: "videos/torre-dragao-verde-caveira.mp4"
  },
  {
    id: "torre-dragao-verde", nome: "Torre Dragão", categorias: ["rpg", "3d"], preco: "R$ 150,00", destaque: true, novo: true,
    resumo: "Um dragão de escamas detalhadas guarda a bandeja de rolagem.",
    descricao: "Torre de dados em formato de cabeça de dragão de boca aberta, com escamas bem detalhadas e bandeja de rolagem na base. Acabamento verde metálico; outras cores sob encomenda. Quer em alguma cor específica? É só escrever no campo de observação ao finalizar a compra.",
    fotos: fotos("torre-dragao-verde", 5), sumup: "torre-dragao-verde", video: "videos/torre-dragao-verde.mp4"
  },
  {
    id: "torre-arvore", nome: "Torre de Dados Árvore Antiga", categorias: ["rpg", "3d"], preco: "R$ 120,00", novo: true,
    resumo: "Tronco retorcido com saída de dados entre as raízes.",
    descricao: "Torre de dados inspirada em florestas encantadas: os dados entram pelos galhos e rolam para fora entre as raízes. Perfeita para mesas de druidas e patrulheiros. Quer em alguma cor específica? É só escrever no campo de observação ao finalizar a compra.",
    fotos: fotos("torre-arvore", 4), sumup: "torre-de-dados-arvore-antiga", video: "videos/torre-arvore.mp4"
  },
  {
    id: "torre-caveira", nome: "Torre de Dados Caveira Crânio", categorias: ["rpg", "3d"], preco: "R$ 119,90", novo: true,
    resumo: "Os dados saem pela boca de uma caveira.",
    descricao: "Torre de dados em formato de crânio, ideal para campanhas de terror e mestres necromantes. Cores a combinar. Quer em alguma cor específica? É só escrever no campo de observação ao finalizar a compra.",
    fotos: fotos("torre-caveira", 3), sumup: "torre-de-dados-caveira-cranio", video: "videos/torre-caveira.mp4"
  },
  {
    id: "torre-calice", nome: "Torre de Dados Cálice do Paladino", categorias: ["rpg", "3d"], preco: "R$ 60,00", novo: true,
    resumo: "Um cálice dourado que serve de torre e bandeja.",
    descricao: "Torre de dados em formato de taça, com acabamento dourado. Elegante na mesa e ótima de presente para mestres. Quer em alguma cor específica? É só escrever no campo de observação ao finalizar a compra.",
    fotos: fotos("torre-calice", 5), sumup: "torre-de-dados-calice-do-paladino", video: "videos/torre-calice.mp4"
  },
  {
    id: "torre-espiral", nome: "Torre de Dados Escada Externa Espiral", categorias: ["rpg", "3d"], preco: "R$ 69,90", novo: true,
    resumo: "Os dados descem por uma escada em caracol até a bandeja.",
    descricao: "Torre de dados com escadaria em caracol: dá para ver cada dado descendo degrau por degrau. Em azul metálico e outras cores. Quer em alguma cor específica? É só escrever no campo de observação ao finalizar a compra.",
    fotos: fotos("torre-espiral", 2), sumup: "torre-de-dados-escada-externa-espiral", video: "videos/torre-espiral.mp4"
  },
  {
    id: "torre-escadaria-branca", nome: "Torre Escada Externa Espiral Melhorada", categorias: ["rpg", "3d"], preco: "R$ 100,00", novo: true,
    resumo: "Torre com escadaria externa e bandeja, em branco perolado.",
    descricao: "Torre de dados com escadaria externa e bandeja de rolagem. Cores sob encomenda. Quer em alguma cor específica? É só escrever no campo de observação ao finalizar a compra.",
    fotos: fotos("torre-escadaria-branca", 3), sumup: "torre-escada-externa-espiral-melhorada", video: "videos/torre-escadaria-branca.mp4"
  },
  {
    id: "torre-castelo-negro", nome: "Castelo Sombrio", categorias: ["rpg", "3d"], preco: "R$ 180,00", novo: true,
    resumo: "Ruínas de um castelo escuro com bandeja de rolagem.",
    descricao: "Torre de dados em formato de castelo em ruínas, em preto fosco. Clima perfeito para campanhas sombrias. Quer em alguma cor específica? É só escrever no campo de observação ao finalizar a compra.",
    fotos: fotos("torre-castelo-negro", 4), sumup: "castelo-sombrio", video: "videos/torre-castelo-negro.mp4"
  },
  {
    id: "torre-sombria", nome: "Torre Sombria", categorias: ["rpg", "3d"], preco: "R$ 80,00", novo: true,
    resumo: "Torre alta e pontiaguda, de vilão de fim de campanha.",
    descricao: "Torre de dados alta, em preto, com pináculo pontiagudo. Imponente no centro da mesa. Quer em alguma cor específica? É só escrever no campo de observação ao finalizar a compra.",
    fotos: fotos("torre-sombria", 4), sumup: "torre-sombria", video: "videos/torre-sombria.mp4"
  },
  {
    id: "torre-observador", nome: "Torre Beholder", categorias: ["rpg", "3d"], preco: "R$ 169,90", novo: true,
    resumo: "Uma criatura de muitos olhos vigia a bandeja de dados.",
    descricao: "Torre de dados com uma criatura de vários olhos no topo e bandeja redonda. Peça de destaque para colecionadores. Quer em alguma cor específica? É só escrever no campo de observação ao finalizar a compra.",
    fotos: fotos("torre-observador", 5), sumup: "torre-beholder", video: "videos/torre-observador.mp4"
  },
  {
    id: "torre-monge", nome: "Torre Mestre dos Magos", categorias: ["rpg", "3d"], preco: "R$ 250,00", novo: true,
    resumo: "Um sábio encapuzado que guarda e rola seus dados.",
    descricao: "Torre de dados em formato de figura encapuzada, em branco. Cores sob encomenda. Quer em alguma cor específica? É só escrever no campo de observação ao finalizar a compra.",
    fotos: fotos("torre-monge", 3), sumup: "torre-mestre-dos-magos", video: "videos/torre-monge.mp4"
  },
  {
    id: "dragao-articulado", nome: "Dragão Três Cabeças", categorias: ["3d", "nerd"], preco: "R$ 75,90", destaque: true, novo: true,
    resumo: "Dragão impresso em 3D que mexe o corpo, as asas e a cauda.",
    descricao: "Dragão articulado impresso em 3D, com movimento no corpo e nas asas. Em azul e verde metálicos e outras cores. Ótimo para decorar a mesa ou presentear. Quer em alguma cor específica? É só escrever no campo de observação ao finalizar a compra.",
    fotos: fotos("dragao-articulado", 5), sumup: "dragao-tres-cabecas", video: "videos/dragao-articulado.mp4"
  },

  /* ---------------- Novos itens 3D (15/11/2026) - aguardando fotos ---------------- */
  {
    id: "torre-loot-gigante", nome: "Torre Loot gigante", categorias: ["rpg", "3d"], preco: "R$ 300,00", placeholder: true, novo: true,
    resumo: "Torre de dados gigante, peça de vitrine para a mesa.",
    descricao: "Torre de dados em tamanho gigante, cheia de detalhes. Peça única para colecionadores e mestres. Fotos em breve."
  },
  {
    id: "torre-pequena-caveira", nome: "Torre pequena caveira boca aberta", categorias: ["rpg", "3d"], preco: "R$ 40,00", placeholder: true, novo: true,
    resumo: "Torre de dados compacta em formato de caveira de boca aberta.",
    descricao: "Versão pequena da torre caveira, fácil de levar para a mesa. Fotos em breve."
  },
  {
    id: "torre-pequena-dragao", nome: "Torre pequena dragão boca aberta", categorias: ["rpg", "3d"], preco: "R$ 50,00", placeholder: true, novo: true,
    resumo: "Torre de dados compacta em formato de cabeça de dragão.",
    descricao: "Versão pequena da torre de dragão de boca aberta. Fotos em breve."
  },
  {
    id: "d20-gigante", nome: "Dado gigante D20", categorias: ["rpg", "3d"], preco: "R$ 49,90", placeholder: true, novo: true,
    resumo: "D20 gigante impresso em 3D, de montar.",
    descricao: "Dado D20 em tamanho gigante, impresso em 3D. Fotos em breve."
  },
  {
    id: "dragao-cobra", nome: "Dragão cobra cristal articulado", categorias: ["3d", "nerd"], preco: "R$ 34,90", placeholder: true, novo: true,
    resumo: "Dragão articulado com efeito cristal, que se mexe inteiro.",
    descricao: "Dragão articulado impresso em 3D, em várias cores. Ótimo para decorar ou presentear. Fotos em breve."
  },
  {
    id: "esqueleto-minecraft", nome: "Esqueleto Minecraft articulado", categorias: ["3d", "nerd"], preco: "R$ 34,90", placeholder: true, novo: true,
    resumo: "Esqueleto articulado inspirado no Minecraft.",
    descricao: "Boneco articulado impresso em 3D. Fotos em breve."
  },
  {
    id: "trex-articulado", nome: "Dinossauro T-Rex articulado", categorias: ["3d", "nerd"], preco: "R$ 34,90", placeholder: true, novo: true,
    resumo: "T-Rex articulado impresso em 3D.",
    descricao: "Dinossauro articulado impresso em 3D, em várias cores. Fotos em breve."
  },

  /* ---------------- TCG ---------------- */
  {
    id: "deckbox-energias", nome: "Deck Box Energias", categorias: ["tcg", "3d"], preco: "R$ 59,90", destaque: true, novo: true,
    resumo: "Deck box preta com símbolos de tipos de energia em relevo colorido.",
    descricao: "Caixa para deck impressa em 3D, com tampa de encaixe e símbolos de energia em amarelo ou laranja. Comporta um deck com sleeves. Quer em alguma cor específica? É só escrever no campo de observação ao finalizar a compra.",
    fotos: fotos("deckbox-energias", 5), sumup: "deck-box-energias"
  },
  {
    id: "deckbox-pokebola", nome: "Deck Box Pokébola", categorias: ["tcg", "3d"], preco: "R$ 59,90", destaque: true, novo: true,
    resumo: "Deck box com arte de Pokébola e personagem na tampa.",
    descricao: "Caixa para deck impressa em 3D com estampa na tampa. Escolha a arte e as cores do seu time. Quer em alguma cor específica? É só escrever no campo de observação ao finalizar a compra.",
    fotos: fotos("deckbox-pokebola", 3), sumup: "deck-box-pokebola"
  },
  {
    id: "deckbox-grande", nome: "Porta Deck MTG Commander com Logo", categorias: ["tcg", "3d"], preco: "R$ 59,90", destaque: true, novo: true,
    resumo: "Caixa maior para decks grandes, com símbolo em relevo.",
    descricao: "Deck box de tamanho maior, ideal para decks grandes com sleeves. Tampa de encaixe e símbolo em relevo. Cores a combinar. Quer em alguma cor específica? É só escrever no campo de observação ao finalizar a compra.",
    fotos: fotos("deckbox-grande", 4), sumup: "porta-deck-mtg-commander-com-logo"
  },
  {
    id: "deckbox-bandeja", nome: "Case D&D", categorias: ["rpg", "3d"], preco: "R$ 40,00", novo: true,
    resumo: "Caixa temática com bandeja que guarda os dados em pé.",
    descricao: "Caixa impressa em 3D com bandeja interna para dados, em verde e azul. Organiza cartas e dados num só lugar. Quer em alguma cor específica? É só escrever no campo de observação ao finalizar a compra.",
    fotos: fotos("deckbox-bandeja", 3), sumup: "case-dandd"
  },
  /* TCG: espaços reservados */
  {
    id: "tcg-marcadores", nome: "Marcadores de dano e contadores", categorias: ["tcg", "3d"], preco: "Em breve", placeholder: true,
    resumo: "Contadores de vida, dano e condição para Pokémon TCG, Magic e outros.",
    descricao: "Espaço reservado: aguardando fotos e detalhes do produto."
  },
  {
    id: "tcg-playmat", nome: "Playmats e tapetes de jogo", categorias: ["tcg"], preco: "Em breve", placeholder: true,
    resumo: "Tapetes com artes exclusivas do mascote Amigu.",
    descricao: "Espaço reservado: aguardando fotos e detalhes do produto."
  },
  {
    id: "tcg-sleeves", nome: "Sleeves, binders e acessórios", categorias: ["tcg"], preco: "Em breve", placeholder: true,
    resumo: "Proteção e organização para sua coleção de cartas.",
    descricao: "Espaço reservado: aguardando fotos e detalhes do produto."
  },

  /* ---------------- Board games (espaços reservados) ---------------- */
  {
    id: "bg-organizadores", nome: "Organizadores para board games", categorias: ["boardgame", "3d"], preco: "Em breve", placeholder: true,
    resumo: "Inserts e organizadores impressos sob medida para a caixa do seu jogo.",
    descricao: "Espaço reservado: aguardando fotos e detalhes do produto."
  },
  {
    id: "bg-porta-cartas", nome: "Porta-cartas e bandejas de recursos", categorias: ["boardgame", "3d"], preco: "Em breve", placeholder: true,
    resumo: "Acessórios para deixar a mesa organizada e a partida mais rápida.",
    descricao: "Espaço reservado: aguardando fotos e detalhes do produto."
  },
  /* Amigurumis: os produtos são as linhas de tamanho (Amigu Pocket, Chibi, Senpai, Deluxe e Titã),
     montados a partir de AMIGU_TAMANHOS no fim deste arquivo. */
];

/* Galeria de amigurumis já produzidos (fotos em img/amigurumi/NN.jpg).
   Coloque o nome do personagem onde souber; sem nome aparece "Amigu sob encomenda". */
window.AMIGU_GALERIA = {
  1: "Minnie", 2: "Denji · Chainsaw Man", 3: "Remy · Ratatouille", 4: "Raiden Shogun · Genshin Impact",
  6: "Sephiroth · Final Fantasy", 7: "Albedo · Overlord", 8: "Tsunade · Naruto",
  9: "Sem-Rosto · A Viagem de Chihiro", 11: "Malévola",
  13: "Kuwabara · Yu Yu Hakusho", 14: "Kurama · Yu Yu Hakusho", 15: "Van Helsing", 16: "Hiei · Yu Yu Hakusho",
  17: "Yusuke · Yu Yu Hakusho", 18: "Haku · A Viagem de Chihiro", 19: "Sanemi · Demon Slayer",
  20: "Sen · A Viagem de Chihiro", 22: "Satoru Gojo · Jujutsu Kaisen", 23: "Black Lady",
  25: "Itadori · Jujutsu Kaisen", 29: "Sasuke · Naruto", 30: "Obanai · Demon Slayer", 31: "Vampira",
  32: "Florzinha · Meninas Superpoderosas", 33: "Lindinha · Meninas Superpoderosas",
  35: "Macaco Louco · Meninas Superpoderosas", 36: "Lady Gyokyo", 38: "Touka · Tokyo Ghoul",
  39: "Zoro · One Piece", 40: "Príncipe", 41: "Danny Phantom", 43: "Ino · Naruto", 44: "Gambit · X-Men",
  46: "Princesa Diana", 47: "Helaine", 48: "Kim Possible", 49: "Gojo · Jujutsu Kaisen",
  50: "Totoro", 51: "Kirby", 52: "Stitch", 54: "Sailor Moon", 55: "Time 7 · Naruto",
  56: "Creeper e Enderman · Minecraft", 57: "Mestre Yoda", 58: "Charizard", 59: "Pikachu, Charmander e Squirtle",
  60: "BB-8", 61: "Coraline", 62: "Koro-sensei · Assassination Classroom", 63: "Frieren"
};
window.AMIGU_GALERIA_TOTAL = 63;

/* Tamanho de cada foto da galeria (tabela de preços por tamanho).
   PP até 10 cm · P 11 a 15 cm · M 16 a 20 cm · G 21 a 30 cm · GG acima de 30 cm */
/* Tabela de preços por tamanho. "foto" = número da foto da galeria usada como exemplo
   (sem foto, aparece o mascote). "aPartir" = mostra "a partir de". */
window.AMIGU_TAMANHOS = [
  { id: "CP", tipo: "chaveiro", nota: "Personagem à sua escolha: é só escrever qual você quer no campo de observação ao finalizar a compra.", nome: "Chaveiro P", medida: "até 6 cm", preco: "R$ 25,90", emBreve: true, sumup: "chaveiro-amigurumi-p-ate-6-cm" },
  { id: "CM", tipo: "chaveiro", nota: "Personagem à sua escolha: é só escrever qual você quer no campo de observação ao finalizar a compra.", nome: "Chaveiro M", medida: "7 a 9 cm", preco: "R$ 39,90", emBreve: true, sumup: "chaveiro-amigurumi-m-7-a-9-cm" },
  { id: "CG", tipo: "chaveiro", nota: "Personagem à sua escolha: é só escrever qual você quer no campo de observação ao finalizar a compra.", nome: "Chaveiro G", medida: "10 a 12 cm", preco: "R$ 49,90", emBreve: true, sumup: "chaveiro-amigurumi-g-10-a-12-cm" },
  { id: "PP", tipo: "amigurumi", fotosLoja: ["img/amigurumi/02.jpg", "img/produtos/saitama-one-punch-man/01.jpg"], nome: "Amigu Pocket", medida: "até 10 cm", preco: "R$ 59,90", foto: 2,
    fotosExtra: ["img/produtos/saitama-one-punch-man/01.jpg"], sumup: "amigu-pocket",
    resumo: "Até 10 cm, cabe na palma da mão. Personagem à sua escolha.",
    descricao: ["Pequeno no tamanho e enorme no carinho! O Amigu Pocket tem até 10 cm, cabe na palma da mão e acompanha você na mesa do trabalho, na estante ou na mochila. É feito à mão em crochê, ponto por ponto, com o personagem que você escolher.",
      "Já fizemos neste tamanho: Denji (Chainsaw Man), Saitama (One Punch Man).", "Personagem à sua escolha: é só escrever qual você quer no campo de observação ao finalizar a compra."] },
  { id: "P", tipo: "amigurumi", fotosLoja: ["img/amigurumi/17.jpg", "img/amigurumi/14.jpg", "img/amigurumi/16.jpg", "img/amigurumi/39.jpg", "img/amigurumi/09.jpg", "img/amigurumi/62.jpg", "img/amigurumi/01.jpg"], nome: "Amigu Chibi", medida: "11 a 15 cm", preco: "R$ 89,90", foto: 17, sumup: "amigu-chibi",
    resumo: "De 11 a 15 cm, fofura no estilo chibi. Personagem à sua escolha.",
    descricao: ["Fofura no estilo chibi, com cabeça grande, corpinho pequeno e muitos detalhes. O Amigu Chibi mede de 11 a 15 cm e é perfeito para presentear ou começar sua coleção de personagens favoritos. Feito à mão em crochê.",
      "Já fizemos neste tamanho: Yusuke, Kurama, Hiei e Kuwabara (Yu Yu Hakusho), Zoro, Time 7 de Naruto, Ino, Koro-sensei, Florzinha, Lindinha e Macaco Louco, Sem-Rosto, Minnie, BB-8 e Minecraft.", "Personagem à sua escolha: é só escrever qual você quer no campo de observação ao finalizar a compra."] },
  { id: "M", tipo: "amigurumi", fotosLoja: ["img/amigurumi/08.jpg", "img/amigurumi/22.jpg", "img/amigurumi/29.jpg", "img/amigurumi/58.jpg", "img/amigurumi/54.jpg", "img/amigurumi/61.jpg", "img/amigurumi/38.jpg"], nome: "Amigu Senpai", medida: "16 a 20 cm", preco: "R$ 129,90", foto: 8,
    fotosExtra: ["img/produtos/charizard-pokemon/01.jpg"], sumup: "amigu-senpai",
    resumo: "De 16 a 20 cm, com todos os detalhes. Personagem à sua escolha.",
    descricao: ["O tamanho preferido de quem quer o personagem com todos os detalhes: roupas, acessórios e expressões. O Amigu Senpai mede de 16 a 20 cm, tem presença na estante e é feito à mão em crochê, peça por peça.",
      "Já fizemos neste tamanho: Satoru Gojo, Itadori, Sasuke, Tsunade, Sanemi, Touka, Sailor Moon, Charizard e Pokémons, Danny Phantom, Kim Possible, Coraline, Haku, Remy, Lady Gyokyo e Helaine.", "Personagem à sua escolha: é só escrever qual você quer no campo de observação ao finalizar a compra."] },
  { id: "G", tipo: "amigurumi", fotosLoja: ["img/amigurumi/04.jpg", "img/amigurumi/06.jpg", "img/amigurumi/07.jpg", "img/amigurumi/11.jpg", "img/amigurumi/57.jpg", "img/amigurumi/44.jpg", "img/amigurumi/20.jpg"], nome: "Amigu Deluxe", medida: "21 a 30 cm", preco: "R$ 179,90", foto: 4,
    fotosExtra: ["img/produtos/raiden-shogun-genshin-impact/01.jpg"], sumup: "amigu-deluxe",
    resumo: "De 21 a 30 cm, peça de exposição. Personagem à sua escolha.",
    descricao: ["Para quem quer um destaque de verdade na coleção. O Amigu Deluxe mede de 21 a 30 cm e capricha nos detalhes: cabelos, capas, armaduras e figurinos completos. É uma peça de exposição feita à mão em crochê.",
      "Já fizemos neste tamanho: Raiden Shogun, Sephiroth, Albedo, Malévola, Black Lady, Obanai, Vampira, Gambit, Mestre Yoda, Sen, Princesa Diana e Príncipe.", "Personagem à sua escolha: é só escrever qual você quer no campo de observação ao finalizar a compra."] },
  { id: "GG", tipo: "amigurumi", fotosLoja: ["img/amigurumi/50.jpg", "img/amigurumi/52.jpg", "img/produtos/stitch-lilo-and-stitch/01.jpg", "img/amigurumi/51.jpg", "img/amigurumi/49.jpg", "img/amigurumi/63.jpg"], nome: "Amigu Titã", medida: "acima de 30 cm", preco: "R$ 249,90", aPartir: true, foto: 50,
    fotosExtra: ["img/produtos/stitch-lilo-and-stitch/01.jpg"], sumup: "amigu-tita",
    resumo: "Acima de 30 cm, feito sob medida. Personagem à sua escolha.",
    descricao: ["Peças especiais para quem quer um personagem gigante para abraçar ou exibir. O Amigu Titã passa dos 30 cm e é feito sob medida. O valor final depende do tamanho e dos detalhes do personagem, e nós combinamos tudo com você antes de começar.",
      "Já fizemos neste tamanho: Stitch, Totoro, Kirby, Gojo e Frieren.", "Personagem à sua escolha: é só escrever qual você quer no campo de observação ao finalizar a compra."] }
];
window.AMIGU_GALERIA_TAMANHO = {
  1: "P", 2: "PP", 3: "M", 4: "G", 5: "G", 6: "G", 7: "G", 8: "M", 9: "P", 10: "G",
  11: "G", 12: "G", 13: "P", 14: "P", 15: "P", 16: "P", 17: "P", 18: "M", 19: "M", 20: "G", 21: "G",
  22: "M", 23: "G", 24: "G", 25: "M", 26: "G", 27: "M", 28: "G", 29: "M", 30: "G", 31: "G", 32: "P", 33: "P",
  34: "P", 35: "P", 36: "M", 37: "M", 38: "M", 39: "P", 40: "G", 41: "M", 42: "M", 43: "P",
  44: "G", 45: "G", 46: "G", 47: "M", 48: "M", 49: "GG", 50: "GG", 51: "GG", 52: "GG", 53: "G",
  54: "M", 55: "P", 56: "P", 57: "G", 58: "M", 59: "M", 60: "P", 61: "M", 62: "P", 63: "GG"
};

/* Classes de RPG do mascote (img/classes/<id>.jpg) */
window.AMIGU_CLASSES = [
  { id: "barbaro", nome: "Bárbaro", arte: "barbaro-dtf.png", cor: "#E9B9A4", frase: "Rola o D20 primeiro, pergunta depois." },
  { id: "bardo", nome: "Bardo", arte: "bardo-dtf.png", cor: "#FBE3EC", frase: "Toda sessão merece uma trilha sonora." },
  { id: "clerigo", nome: "Clérigo", frase: "Cura a party e protege os dados." },
  { id: "druida", nome: "Druida", frase: "Feito de fio natural, igual aos amigurumis." },
  { id: "guerreiro", nome: "Guerreiro", arte: "guerreiro-dtf.png", cor: "#D5DBE4", frase: "Linha de frente da mesa." },
  { id: "ladino", nome: "Ladino", arte: "ladino-dtf.png", cor: "#BFD8D2", frase: "Some com seus dados se você piscar." },
  { id: "mago", nome: "Mago", arte: "mago-dtf.png", cor: "#D9CBEF", frase: "Guarda os dados num grimório, claro." },
  { id: "necromante", nome: "Necromante", arte: "necromante-dtf.png", cor: "#3B2A5C", frase: "Traz de volta até dado amaldiçoado." },
  { id: "paladino", nome: "Paladino", frase: "Juramento: nunca rolar fora da bandeja." },
  { id: "patrulheiro", nome: "Patrulheiro", frase: "Encontra o dado que rolou pra baixo do sofá." }
];

/* Produtos de amigurumi = linhas de tamanho (aparecem no catálogo, na home e na página de amigurumis). */
(function () {
  var T = window.AMIGU_GALERIA_TAMANHO, total = window.AMIGU_GALERIA_TOTAL;
  function foto(n) { return "img/amigurumi/" + (n < 10 ? "0" : "") + n + ".jpg"; }
  window.AMIGU_TAMANHOS.forEach(function (t) {
    if (t.tipo === "chaveiro") {
      window.AMIGU_PRODUTOS.push({
        id: "chaveiro-" + t.id.toLowerCase(), nome: "Chaveiro amigurumi " + t.nome.replace("Chaveiro ", ""), serie: t.medida,
        categorias: ["amigurumi", "nerd"], preco: t.preco, novo: true, semFoto: true,
        resumo: "Chaveiro de crochê com o personagem que você quiser.",
        descricao: "Chaveiro amigurumi feito à mão em crochê, " + t.medida + ". Cores e detalhes podem variar. " + t.nota,
        fotos: ["img/mascote/pose-29.png"], sumup: t.sumup
      });
      return;
    }
    /* Mesmas fotos e mesma ordem da SumUp (capa primeiro). */
    var fotos = t.fotosLoja || [foto(t.foto)];
    window.AMIGU_PRODUTOS.push({
      id: "amigu-" + t.id.toLowerCase(), nome: t.nome, serie: (t.id === "GG" ? "Gigante" : t.id) + " · " + t.medida,
      categorias: ["amigurumi", "nerd"], preco: (t.aPartir ? "a partir de " : "") + t.preco, destaque: true,
      resumo: t.resumo, descricao: t.descricao.join(" "), fotos: fotos, sumup: t.sumup
    });
  });
})();