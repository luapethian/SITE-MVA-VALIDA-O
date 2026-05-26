// data.jsx — restructured for curated material universes.
// Five macro categories. Each has its own editorial intro, atmosphere, and brand sub-collections.
// All copy in Portuguese (PT-PT).

const APPLICATIONS = [
  { id:"cozinhas",   label:"Cozinhas",     n:"01" },
  { id:"banhos",     label:"Banhos",       n:"02" },
  { id:"pavimentos", label:"Pavimentos",   n:"03" },
  { id:"fachadas",   label:"Fachadas",     n:"04" },
  { id:"escadas",    label:"Escadas",      n:"05" },
  { id:"mobiliario", label:"Mobiliário",   n:"06" },
];

const SERVICES = [
  { id:"01", label:"Selecção em pedreira",     desc:"Visitamos a origem para escolher cada bloco. Cada veio é registado, cada peça é tratada como única." },
  { id:"02", label:"Transformação",            desc:"Corte, calibração, polimento e acabamentos especiais executados na nossa unidade fabril em Portugal." },
  { id:"03", label:"Engenharia & medição",     desc:"Levantamento técnico, modelação 3D e desenho de pormenor, em colaboração próxima com arquitectos e construtores." },
  { id:"04", label:"Aplicação em obra",        desc:"Equipas próprias garantem a instalação rigorosa, com controlo de qualidade em cada fase." },
];

// ─────────────────────────────────────────────────────────────────────────
// CATEGORIES — five universes
// `tone` 1..8 maps to the .ph-stone-* gradient used as cinematic placeholder.
// `atmosphere` shifts subtle visuals (typography weight, padding) per category.

const CATEGORIES = [
  {
    id: "pedra-natural",
    n: "01",
    label: "Pedra Natural",
    tagline: "A matéria como ela é.",
    tone: 7,
    accentTone: 5,
    image: "assets/pedra-natural-hero.jpg",
    atmosphere: "organic",     // organic, textured, emotional
    intro: "Superfícies naturais definidas pela profundidade, pela textura e pelo carácter mineral único.",
    longIntro: "Cada bloco tem uma origem, um sentido de veio, uma forma própria de receber a luz. Trabalhamos a pedra natural com o tempo necessário — da pedreira ao detalhe construído — preservando o que a faz irrepetível.",
    cta: "Explorar colecção",
    brands: [
      {
        id: "granitos",
        label: "Granitos",
        desc: "Materiais seleccionados pela densidade, resistência e estabilidade cromática para aplicações de interior e exterior.",
        secondary: "Referências adicionais disponíveis sob consulta.",
        materials: [
          { id:"negro-zimbabwe", name:"Negro Zimbabwe", category:"Granito", origin:"Zimbabwe", stone:3, color:"dark",  image:"assets/granito Negro Zimbabwe.png" },
          { id:"azul-labrador", name:"Azul Labrador",  category:"Granito", origin:"Noruega",  stone:8, color:"deep",  image:"assets/granito azul labrador.png" },
          { id:"zambezia",      name:"Zambezia",       category:"Granito", origin:"Moçambique",stone:6, color:"dark", image:"assets/granito Zambezia.png" },
        ],
      },
      {
        id: "marmores",
        label: "Mármores",
        desc: "Superfícies naturais definidas pelo movimento dos veios e pela profundidade visual de cada chapa.",
        secondary: "Referências adicionais disponíveis sob consulta.",
        materials: [
          { id:"calacatta",         name:"Calacatta",          category:"Mármore", origin:"Itália",  stone:1, color:"cream", image:"assets/Mármores calacatta.png" },
          { id:"nero-marquina",     name:"Nero Marquina",      category:"Mármore", origin:"Espanha", stone:6, color:"dark",  image:"assets/mármore negro maquina.png" },
          { id:"travertino-romano", name:"Travertino Romano",  category:"Mármore", origin:"Itália",  stone:2, color:"warm",  image:"assets/marmore travertino romano.png" },
        ],
      },
      {
        id: "marmores-sensa",
        label: "Sensa",
        desc: "Pedras naturais com tratamento de protecção avançado, para maior resistência e estabilidade da superfície a longo prazo.",
        secondary: "Referências adicionais disponíveis sob consulta.",
        link: { label: "Tudo sobre Mármores Sensa", href: "https://www.cosentino.com/pt-pt/sensa/" },
        materials: [
          { id:"sensa-taj-mahal", name:"Sensa Taj Mahal", category:"Mármore Sensa", origin:"Brasil",   stone:2, color:"cream", image:"assets/Mármore sensa Taj Mahal.png" },
          { id:"sensa-orinoco",  name:"Sensa Orinoco",  category:"Mármore Sensa", origin:"Brasil",   stone:5, color:"warm",  image:"assets/Mármore sensa Orinoco.png" },
          { id:"sensa-vancouver",name:"Sensa Vancouver",category:"Mármore Sensa", origin:"Brasil",   stone:4, color:"cream", image:"assets/Mármore sensa Vancouver.png" },
        ],
      },
    ],
  },

  {
    id: "quartzo",
    n: "02",
    label: "Quartzo",
    tagline: "Performance desenhada.",
    tone: 4,
    accentTone: 5,
    image: "assets/quartzo-hero.png",
    atmosphere: "balanced",    // elegance + performance
    intro: "Materiais de engenharia desenhados para a estética contemporânea e o rigor técnico.",
    longIntro: "O quartzo combina a expressão visual da pedra com o comportamento previsível da engenharia. Disponível em palete cromática controlada, é a escolha para superfícies de uso intensivo onde a continuidade visual é essencial.",
    cta: "Explorar colecção",
    brands: [
      {
        id: "silestone",
        label: "Silestone",
        desc: "Acabamentos minerais em quartzo Híbrido, com superfícies de baixo impacto.",
        secondary: "Visite o nosso showroom para descobrir mais referências.",
        link: { label: "Tudo sobre Silestone", href: "https://www.cosentino.com/pt-pt/silestone/" },
        materials: [
          { id:"sil-calacatta-gold",   name:"Silestone Calacatta Gold", origin:"Cosentino", stone:1, color:"cream", image:"assets/Silestone calacatta gold.png" },
          { id:"sil-desert-silver",    name:"Silestone Desert Silver",  origin:"Cosentino", stone:5, color:"mid",   image:"assets/Silestone desert silver.png" },
          { id:"sil-persian-white",    name:"Silestone Persian White",  origin:"Cosentino", stone:4, color:"cream", image:"assets/Silestone Persian white.png" },
          { id:"sil-faro-white",        name:"Faro White",              origin:"Cosentino", stone:5, color:"cream" },
          { id:"sil-ethereal-noctis",  name:"Ethereal Noctis",          origin:"Cosentino", stone:6, color:"dark"  },
        ],
      },
      {
        id: "compac",
        label: "Compac",
        desc: "Quartzo técnico de origem espanhola, formatos extra-grandes.",
        secondary: "Visite o nosso showroom para descobrir mais referências.",
        link: { label: "Tudo sobre Compac", href: "https://pt.compac.es/quartzo/" },
        materials: [
          { id:"compac-moon",          name:"Compac Moon",        origin:"Compac", stone:5, color:"cream", image:"assets/Compac moon.png" },
          { id:"compac-carrara",       name:"Compac Carrara",     origin:"Compac", stone:1, color:"cream", image:"assets/Compac Carrara.png" },
          { id:"compac-plomo",         name:"Compac Plomo",       origin:"Compac", stone:8, color:"mid",   image:"assets/Compac plomo.png" },
          { id:"compac-unique-cala",   name:"Unique Calacatta",   origin:"Compac", stone:1, color:"cream" },
        ],
      },
    ],
  },

  {
    id: "ceramico",
    n: "03",
    label: "Cerâmico",
    tagline: "Plano contínuo, escala arquitectónica.",
    tone: 8,
    accentTone: 4,
    image: "assets/ceramico-hero.png",
    atmosphere: "minimal",     // minimal, architectural
    intro: "Superfícies arquitectónicas criadas para aplicações contemporâneas em grande escala.",
    longIntro: "Placas de grande formato com espessuras reduzidas, alta resistência e linguagem visual contemporânea. Indicadas para fachadas ventiladas, pavimentos contínuos e revestimentos onde a junta é minimizada e a leitura é única.",
    cta: "Explorar colecção",
    brands: [
      {
        id: "dekton",
        label: "Dekton",
        desc: "Superfície ultracompacta. Aplicação interior, exterior e fachada.",
        secondary: "Visite o nosso showroom para descobrir mais referências.",
        link: { label: "Tudo sobre Dekton", href: "https://www.cosentino.com/pt-pt/dekton/" },
        materials: [
          { id:"dekton-awake",   name:"Dekton Awake",   origin:"Cosentino", stone:6, color:"dark",  image:"assets/Dekton Awake.png" },
          { id:"dekton-laurent", name:"Dekton Laurent", origin:"Cosentino", stone:1, color:"cream", image:"assets/Dekton Laurent.png" },
          { id:"dekton-rem",     name:"Dekton Rem",     origin:"Cosentino", stone:5, color:"cream", image:"assets/Dekton Rem.png" },
          { id:"dekton-trilium", name:"Trilium",      origin:"Cosentino", stone:3, color:"dark"  },
          { id:"dekton-bromo",   name:"Bromo",        origin:"Cosentino", stone:8, color:"mid"   },
        ],
      },
      {
        id: "neolith",
        label: "Neolith",
        desc: "Pedra sinterizada, formatos até 3.6 m. Linguagem mineral contemporânea.",
        secondary: "Visite o nosso showroom para descobrir mais referências.",
        link: { label: "Tudo sobre Neolith", href: "https://www.neolith.com/" },
        materials: [
          { id:"neo-abu-dhabi",       name:"Neolith Abu Dhabi",       origin:"Neolith", stone:1, color:"cream", image:"assets/Neolith Abu Dhabi.png" },
          { id:"neo-calacatta-roma",  name:"Neolith Calacatta Roma",  origin:"Neolith", stone:8, color:"mid",   image:"assets/Neolith Calacatta Roma.png" },
          { id:"neo-niagara",         name:"Neolith Niagara",         origin:"Neolith", stone:3, color:"dark",  image:"assets/Neolith Niagara.png" },
          { id:"neo-pulpis",         name:"Pulpis",            origin:"Neolith", stone:5, color:"cream" },
        ],
      },
      {
        id: "coverlam",
        label: "Coverlam",
        desc: "Grandes formatos cerâmicos, aplicações de elevada exigência.",
        secondary: "Visite o nosso showroom para descobrir mais referências.",
        link: { label: "Tudo sobre Coverlam", href: "https://www.coverlambygrespania.com/" },
        materials: [
          { id:"cov-blue-roma",   name:"Coverlam Blue Roma",   origin:"Coverlam", stone:5, color:"cream", image:"assets/Coverlam Blue Roma.png" },
          { id:"cov-canela-roma", name:"Coverlam Canela Roma", origin:"Coverlam", stone:7, color:"deep",  image:"assets/Coverlam Canela Roma.png" },
          { id:"cov-nero-ardi",   name:"Coverlam Nero Ardi",   origin:"Coverlam", stone:5, color:"warm",  image:"assets/Coverlam Nero Ardi.png" },
        ],
      },
    ],
  },

  {
    id: "solid-surfaces",
    n: "04",
    label: "Solid Surfaces",
    tagline: "Continuidade sem juntas.",
    tone: 4,
    accentTone: 1,
    image: "assets/solid-surfaces-hero.png",
    atmosphere: "technical",   // futuristic, technical
    intro: "Materiais contínuos, termo-modeláveis, para volumes desenhados sem interrupção.",
    longIntro: "Compostos minerais e acrílicos que permitem a integração total — bancada, lavatório e parede num único plano. Translucidez, calor ao toque e reparabilidade fazem das solid surfaces a escolha para detalhe singular.",
    cta: "Explorar colecção",
    brands: [
      {
        id: "corian",
        label: "Corian",
        desc: "A referência original em superfície sólida acrílica.",
        secondary: "Visite o nosso showroom para descobrir mais referências.",
        link: { label: "Tudo sobre Corian", href: "https://www.corian.pt/" },
        materials: [
          { id:"cor-glacier-white",  name:"Corian Glacier White",  origin:"Corian", stone:4, color:"cream", image:"assets/Corian Glacier White.png" },
          { id:"cor-designer-white", name:"Corian Designer White", origin:"Corian", stone:4, color:"cream", image:"assets/Corian Designer White.png" },
          { id:"cor-deep-nocturne",  name:"Corian Deep Nocturne",  origin:"Corian", stone:6, color:"dark",  image:"assets/Corian Deep Nocturne.png" },
        ],
      },
      {
        id: "krion",
        label: "Krion",
        desc: "Mineral compacto de Porcelanosa. Comportamento higiénico e ecológico.",
        secondary: "Visite o nosso showroom para descobrir mais referências.",
        link: { label: "Tudo sobre Krion", href: "https://www.porcelanosa.com/pt/revestimento/krion/" },
        materials: [
          { id:"krion-snow-white",     name:"Krion Snow White",     origin:"Krion", stone:4, color:"cream", image:"assets/Krion Snow White.png" },
          { id:"krion-natura",         name:"Krion Natura",         origin:"Krion", stone:5, color:"cream", image:"assets/Krion Natura.png" },
          { id:"krion-asteroid-white", name:"Krion Asteroid White", origin:"Krion", stone:4, color:"cream", image:"assets/Krion Asteroid White.png" },
        ],
      },
      {
        id: "staron",
        label: "Staron",
        desc: "Superfície sólida coreana, palete extensa e termo-formação avançada.",
        secondary: "Visite o nosso showroom para descobrir mais referências.",
        link: { label: "Tudo sobre Staron", href: "https://www.granitrans.pt/staron/" },
        materials: [
          { id:"staron-solid-pure-white", name:"Staron Solid Pure White", origin:"Staron", stone:4, color:"cream", image:"assets/Staron Solid Pure White.png" },
          { id:"staron-bright-white",    name:"Staron Bright White",    origin:"Staron", stone:4, color:"cream", image:"assets/Staron Bright White.png" },
          { id:"staron-pebble-ice",      name:"Staron Pebble Ice",      origin:"Staron", stone:5, color:"cream", image:"assets/Staron Pebble Ice.png" },
        ],
      },
    ],
  },

  {
    id: "pias-integrity",
    n: "05",
    label: "Cubas MVA",
    tagline: "Lavatório e bancada, um só gesto.",
    tone: 1,
    accentTone: 4,
    image: "assets/integrity-hero.png",
    atmosphere: "sculpted",    // singular, jewelry-like
    intro: "Lavatórios e cubas esculpidos em continuidade com o plano da bancada.",
    longIntro: "A colecção Integrity nasce de uma exigência: que a transição entre o plano e a cuba desapareça. Cada peça é fresada num único bloco, com geometrias estudadas para o gesto da água e a luz do dia.",
    cta: "Explorar colecção",
    brands: [
      {
        id: "integrity-collection",
        label: "Integrity",
        desc: "Cubas integradas em pedra, quartzo, cerâmico e solid surface.",
        secondary: "Visite o nosso showroom para descobrir mais referências.",
        link: { label: "Tudo sobre Integrity", href: "https://www.cosentino.com/pt-pt/cozinha/lava-loicas-de-cozinha/" },
        materials: [
          { id:"int-due-l",  name:"Integrity Due L",  origin:"MVA", stone:4, color:"cream", image:"assets/Integrity Due L.png" },
          { id:"int-one",    name:"Integrity One",    origin:"MVA", stone:5, color:"cream", image:"assets/Integrity One.png" },
          { id:"int-due-xl", name:"Integrity Due XL", origin:"MVA", stone:4, color:"cream", image:"assets/Integrity Due XL.png" },
          { id:"int-c400", name:"Integrity C400",  origin:"MVA", stone:8, color:"mid",   subtitle:"Cozinha · 60×40"      },
          { id:"int-r500", name:"Integrity R500",  origin:"MVA", stone:1, color:"cream", subtitle:"Curvo · 70×40"        },
          { id:"int-t600", name:"Integrity T600",  origin:"MVA", stone:2, color:"warm",  subtitle:"Travertino · 50×38"   },
        ],
      },
    ],
  },
];

// flat helpers
function findCategory(id){ return CATEGORIES.find(c => c.id === id); }
function totalMaterialsCount(){
  return CATEGORIES.reduce((n, c) => n + c.brands.reduce((m, b) => m + b.materials.length, 0), 0);
}

const PORTFOLIO = [
  { id:"001", title:"Casa Sereia",        location:"Sintra, PT",     program:"Residencial", year:"2024", stone:3, scale:"large",  image:"assets/portfolio/p01.jpg" },
  { id:"002", title:"Atelier Foz",        location:"Porto, PT",      program:"Cultural",    year:"2024", stone:7, scale:"tall",   image:"assets/portfolio/p03.jpg" },
  { id:"003", title:"Hotel Marvão",       location:"Marvão, PT",     program:"Hotelaria",   year:"2023", stone:2, scale:"wide",   image:"assets/portfolio/p04.jpg" },
  { id:"004", title:"Casa do Pinhal",     location:"Cascais, PT",    program:"Residencial", year:"2023", stone:1, scale:"square", image:"assets/portfolio/p10.jpg" },
  { id:"005", title:"Restaurante Pedra",  location:"Lisboa, PT",     program:"Comercial",   year:"2023", stone:8, scale:"tall",   image:"assets/portfolio/p05.jpg" },
  { id:"006", title:"Quinta da Cal",      location:"Évora, PT",      program:"Residencial", year:"2022", stone:5, scale:"large",  image:"assets/portfolio/p02.jpg" },
  { id:"007", title:"Banho Termal",       location:"Caldas, PT",     program:"Hotelaria",   year:"2022", stone:4, scale:"wide",   image:"assets/portfolio/p09.jpg" },
  { id:"008", title:"Loja Atrium",        location:"Lisboa, PT",     program:"Comercial",   year:"2022", stone:6, scale:"square", image:"assets/portfolio/p06.jpg" },
  { id:"009", title:"Casa Pátio",         location:"Comporta, PT",   program:"Residencial", year:"2022", stone:7, scale:"tall",   image:"assets/portfolio/p07.jpg" },
  { id:"010", title:"Galeria Linha",      location:"Porto, PT",      program:"Cultural",    year:"2021", stone:3, scale:"wide",   image:"assets/portfolio/p08.jpg" },
  { id:"011", title:"Apartamento Lapa",   location:"Lisboa, PT",     program:"Residencial", year:"2021", stone:2, scale:"square"},
  { id:"012", title:"Spa Monte",          location:"Algarve, PT",    program:"Hotelaria",   year:"2021", stone:1, scale:"large" },
];

Object.assign(window, { CATEGORIES, APPLICATIONS, SERVICES, PORTFOLIO, findCategory, totalMaterialsCount });
