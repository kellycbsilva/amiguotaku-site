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
    descricao: "Guarde seus dados com estilo dentro de um D20 gigante! Fechamento magnético firme e fácil de abrir, espaço interno para vários dados ou conjuntos completos, impressão 3D de alta qualidade. Cores variadas: preto, vermelho, amarelo, azul e metalizados.",
    fotos: fotos("case-d20", 12), sumup: "case-d20", video: "videos/case-d20.mp4"
  },
  {
    id: "case-classes", nome: "Case de dados com classes", categorias: ["rpg", "3d"], preco: "R$ 45,00", destaque: true,
    resumo: "Case redonda para 7 dados, com a classe do seu personagem gravada na tampa.",
    descricao: "Compartimentos individuais para até 7 dados poliédricos e tampa de encaixe com a classe à sua escolha (bárbaro, mago, ladino, clérigo e mais). Resistente, compacta e ótima para presentear jogadores e mestres. Ideal para D&D, Tormenta20, Pathfinder e outros sistemas.",
    fotos: fotos("case-para-dados-rpg", 8), sumup: "case-para-dados-rpg"
  },
  {
    id: "torre-de-dados", nome: "Torre de dados medieval", categorias: ["rpg", "3d"], preco: "R$ 50,00", destaque: true,
    resumo: "Torre roladora em formato de castelo, com acabamento metálico.",
    descricao: "Rampa interna que garante rolagens justas e cheias de impacto. Impressa em 3D com acabamento metálico e cores personalizáveis sob encomenda (o degradê roxo e dourado faz sucesso!). Tamanho compacto, cabe na mochila.",
    fotos: fotos("torre-de-dados", 9), sumup: "torre-de-dados", video: "videos/torre-de-dados.mp4"
  },
  {
    id: "torre-dragao", nome: "Torre Fortaleza Dragão", categorias: ["rpg", "3d"], preco: "R$ 180,00", destaque: true, novo: true,
    resumo: "Torre de dados com um dragão no topo e bandeja de rolagem.",
    descricao: "Versão épica da torre de dados, com um dragão guardando o castelo. Peça de centro de mesa para mestres e colecionadores. Cores e acabamento a combinar.",
    fotos: fotos("torre-dragao", 8), sumup: "torre-fortaleza-dragao", video: "videos/torre-dragao.mp4"
  },
  {
    id: "case-grimorio", nome: "Case Grimório Livro Torre", categorias: ["rpg", "3d"], preco: "R$ 85,00", destaque: true, novo: true,
    resumo: "Porta-dados em formato de livro de magias que abre como um tomo.",
    descricao: "Um grimório que esconde seus dados! Abre como um livro e tem encaixes para o conjunto completo. Disponível com capa de D20 e outras artes. Cores a combinar.",
    fotos: fotos("case-grimorio", 10), sumup: "case-grimorio-livro-torre", video: "videos/case-grimorio.mp4"
  },
  {
    id: "case-retangular", nome: "Estojo retangular para dados", categorias: ["rpg", "3d"], preco: "R$ 35,00",
    resumo: "Estojo com encaixes moldados para os 7 dados (D4 a D20).",
    descricao: "Estojo resistente e compacto com fechamento por trava e encaixe individual para cada dado, protegendo contra impactos e arranhões. Várias cores. Dados vendidos separadamente.",
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
    descricao: "Torre de dados em formato de caveira de dragão de boca aberta, com chifres e bandeja de rolagem na base. Acabamento verde metálico; outras cores sob encomenda.",
    fotos: fotos("torre-dragao-verde-caveira", 3), sumup: "torre-dragao-verde-caveira", video: "videos/torre-dragao-verde-caveira.mp4"
  },
  {
    id: "torre-dragao-verde", nome: "Torre Dragão", categorias: ["rpg", "3d"], preco: "R$ 150,00", destaque: true, novo: true,
    resumo: "Um dragão de escamas detalhadas guarda a bandeja de rolagem.",
    descricao: "Torre de dados em formato de cabeça de dragão de boca aberta, com escamas bem detalhadas e bandeja de rolagem na base. Acabamento verde metálico; outras cores sob encomenda.",
    fotos: fotos("torre-dragao-verde", 5), sumup: "torre-dragao-verde", video: "videos/torre-dragao-verde.mp4"
  },
  {
    id: "torre-arvore", nome: "Torre de Dados Árvore Antiga", categorias: ["rpg", "3d"], preco: "R$ 120,00", novo: true,
    resumo: "Tronco retorcido com saída de dados entre as raízes.",
    descricao: "Torre de dados inspirada em florestas encantadas: os dados entram pelos galhos e rolam para fora entre as raízes. Perfeita para mesas de druidas e patrulheiros.",
    fotos: fotos("torre-arvore", 4), sumup: "torre-de-dados-arvore-antiga", video: "videos/torre-arvore.mp4"
  },
  {
    id: "torre-caveira", nome: "Torre de Dados Caveira Crânio", categorias: ["rpg", "3d"], preco: "R$ 119,90", novo: true,
    resumo: "Os dados saem pela boca de uma caveira.",
    descricao: "Torre de dados em formato de crânio, ideal para campanhas de terror e mestres necromantes. Cores a combinar.",
    fotos: fotos("torre-caveira", 3), sumup: "torre-de-dados-caveira-cranio", video: "videos/torre-caveira.mp4"
  },
  {
    id: "torre-calice", nome: "Torre de Dados Cálice do Paladino", categorias: ["rpg", "3d"], preco: "R$ 60,00", novo: true,
    resumo: "Um cálice dourado que serve de torre e bandeja.",
    descricao: "Torre de dados em formato de taça, com acabamento dourado. Elegante na mesa e ótima de presente para mestres.",
    fotos: fotos("torre-calice", 5), sumup: "torre-de-dados-calice-do-paladino", video: "videos/torre-calice.mp4"
  },
  {
    id: "torre-espiral", nome: "Torre de Dados Escada Externa Espiral", categorias: ["rpg", "3d"], preco: "R$ 69,90", novo: true,
    resumo: "Os dados descem por uma escada em caracol até a bandeja.",
    descricao: "Torre de dados com escadaria em caracol: dá para ver cada dado descendo degrau por degrau. Em azul metálico e outras cores.",
    fotos: fotos("torre-espiral", 2), sumup: "torre-de-dados-escada-externa-espiral", video: "videos/torre-espiral.mp4"
  },
  {
    id: "torre-escadaria-branca", nome: "Torre Escada Externa Espiral Melhorada", categorias: ["rpg", "3d"], preco: "R$ 100,00", novo: true,
    resumo: "Torre com escadaria externa e bandeja, em branco perolado.",
    descricao: "Torre de dados com escadaria externa e bandeja de rolagem. Cores sob encomenda.",
    fotos: fotos("torre-escadaria-branca", 3), sumup: "torre-escada-externa-espiral-melhorada", video: "videos/torre-escadaria-branca.mp4"
  },
  {
    id: "torre-castelo-negro", nome: "Castelo Sombrio", categorias: ["rpg", "3d"], preco: "R$ 180,00", novo: true,
    resumo: "Ruínas de um castelo escuro com bandeja de rolagem.",
    descricao: "Torre de dados em formato de castelo em ruínas, em preto fosco. Clima perfeito para campanhas sombrias.",
    fotos: fotos("torre-castelo-negro", 4), sumup: "castelo-sombrio", video: "videos/torre-castelo-negro.mp4"
  },
  {
    id: "torre-sombria", nome: "Torre Sombria", categorias: ["rpg", "3d"], preco: "R$ 80,00", novo: true,
    resumo: "Torre alta e pontiaguda, de vilão de fim de campanha.",
    descricao: "Torre de dados alta, em preto, com pináculo pontiagudo. Imponente no centro da mesa.",
    fotos: fotos("torre-sombria", 4), sumup: "torre-sombria", video: "videos/torre-sombria.mp4"
  },
  {
    id: "torre-observador", nome: "Torre Beholder", categorias: ["rpg", "3d"], preco: "R$ 169,90", novo: true,
    resumo: "Uma criatura de muitos olhos vigia a bandeja de dados.",
    descricao: "Torre de dados com uma criatura de vários olhos no topo e bandeja redonda. Peça de destaque para colecionadores.",
    fotos: fotos("torre-observador", 5), sumup: "torre-beholder", video: "videos/torre-observador.mp4"
  },
  {
    id: "torre-monge", nome: "Torre Mestre dos Magos", categorias: ["rpg", "3d"], preco: "R$ 250,00", novo: true,
    resumo: "Um sábio encapuzado que guarda e rola seus dados.",
    descricao: "Torre de dados em formato de figura encapuzada, em branco. Cores sob encomenda.",
    fotos: fotos("torre-monge", 3), sumup: "torre-mestre-dos-magos", video: "videos/torre-monge.mp4"
  },
  {
    id: "dragao-articulado", nome: "Dragão Três Cabeças", categorias: ["3d", "nerd"], preco: "R$ 75,90", destaque: true, novo: true,
    resumo: "Dragão impresso em 3D que mexe o corpo, as asas e a cauda.",
    descricao: "Dragão articulado impresso em 3D, com movimento no corpo e nas asas. Em azul e verde metálicos e outras cores. Ótimo para decorar a mesa ou presentear.",
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
    descricao: "Caixa para deck impressa em 3D, com tampa de encaixe e símbolos de energia em amarelo ou laranja. Comporta um deck com sleeves.",
    fotos: fotos("deckbox-energias", 5), sumup: "deck-box-energias"
  },
  {
    id: "deckbox-pokebola", nome: "Deck Box Pokébola", categorias: ["tcg", "3d"], preco: "R$ 59,90", destaque: true, novo: true,
    resumo: "Deck box com arte de Pokébola e personagem na tampa.",
    descricao: "Caixa para deck impressa em 3D com estampa na tampa. Escolha a arte e as cores do seu time.",
    fotos: fotos("deckbox-pokebola", 3), sumup: "deck-box-pokebola"
  },
  {
    id: "deckbox-grande", nome: "Porta Deck MTG Commander com Logo", categorias: ["tcg", "3d"], preco: "R$ 59,90", destaque: true, novo: true,
    resumo: "Caixa maior para decks grandes, com símbolo em relevo.",
    descricao: "Deck box de tamanho maior, ideal para decks grandes com sleeves. Tampa de encaixe e símbolo em relevo. Cores a combinar.",
    fotos: fotos("deckbox-grande", 4), sumup: "porta-deck-mtg-commander-com-logo"
  },
  {
    id: "deckbox-bandeja", nome: "Case D&D", categorias: ["rpg", "3d"], preco: "R$ 40,00", novo: true,
    resumo: "Caixa temática com bandeja que guarda os dados em pé.",
    descricao: "Caixa impressa em 3D com bandeja interna para dados, em verde e azul. Organiza cartas e dados num só lugar.",
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

  /* ---------------- Amigurumis do site atual ---------------- */
  {
    id: "charizard", nome: "Charizard", serie: "Pokémon", categorias: ["amigurumi", "nerd"], preco: "R$ 129,90", tamanho: "M", destaque: true,
    resumo: "O dragão mais icônico de Kanto em crochê. 20 cm.",
    descricao: "Feito à mão com asas, cauda em chamas e muita nostalgia. Algodão 100% sustentável, 20 cm de altura.",
    fotos: ["img/produtos/charizard-pokemon/01.jpg"], sumup: "charizard-pokemon"
  },
  {
    id: "raiden", nome: "Raiden Shogun", serie: "Genshin Impact", categorias: ["amigurumi", "nerd"], preco: "R$ 179,90", tamanho: "G", destaque: true,
    resumo: "A Arconte Electro em versão amigurumi, cheia de detalhes.",
    descricao: "Fio de algodão, enchimento antialérgico e riqueza de detalhes, dos cabelos roxos à roupa inspirada em Inazuma. Disponível por encomenda, com envio para todo o Brasil.",
    fotos: ["img/produtos/raiden-shogun-genshin-impact/01.jpg"], sumup: "raiden-shogun-genshin-impact"
  },
  {
    id: "stitch", nome: "Stitch", serie: "Lilo & Stitch", categorias: ["amigurumi", "nerd"], preco: "a partir de R$ 249,90", tamanho: "GG", destaque: true,
    resumo: "Pura fofura alienígena com 30 cm.",
    descricao: "Feito à mão com orelhas grandes e muito charme havaiano. Algodão 100% sustentável, 30 cm de altura.",
    fotos: ["img/produtos/stitch-lilo-and-stitch/01.jpg"], sumup: "stitch-lilo-and-stitch"
  },
  {
    id: "saitama", nome: "Saitama", serie: "One Punch Man", categorias: ["amigurumi", "nerd"], preco: "R$ 59,90", tamanho: "PP",
    resumo: "O herói mais forte do universo, versão fofinha. 10 cm.",
    descricao: "Detalhes fiéis e muita personalidade careca. Algodão 100% sustentável, 10 cm de altura.",
    fotos: ["img/produtos/saitama-one-punch-man/01.jpg"], sumup: "saitama-one-punch-man"
  }
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
  46: "Princesa Diana", 47: "Elaine", 48: "Kim Possible", 49: "Gojo · Jujutsu Kaisen",
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
  { id: "CP", tipo: "chaveiro", nome: "Chaveiro P", medida: "até 6 cm", preco: "R$ 25,90", emBreve: true },
  { id: "CM", tipo: "chaveiro", nome: "Chaveiro M", medida: "7 a 9 cm", preco: "R$ 39,90", emBreve: true },
  { id: "CG", tipo: "chaveiro", nome: "Chaveiro G", medida: "10 a 12 cm", preco: "R$ 49,90", emBreve: true },
  { id: "PP", tipo: "amigurumi", nome: "Amigurumi PP", medida: "até 10 cm", preco: "R$ 59,90", foto: 2 },
  { id: "P", tipo: "amigurumi", nome: "Amigurumi P", medida: "11 a 15 cm", preco: "R$ 89,90", foto: 17 },
  { id: "M", tipo: "amigurumi", nome: "Amigurumi M", medida: "16 a 20 cm", preco: "R$ 129,90", foto: 8 },
  { id: "G", tipo: "amigurumi", nome: "Amigurumi G", medida: "21 a 30 cm", preco: "R$ 179,90", foto: 4 },
  { id: "GG", tipo: "amigurumi", nome: "Amigurumi Gigante", medida: "acima de 30 cm", preco: "R$ 249,90", foto: 50, aPartir: true, nota: "Peças especiais" }
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
