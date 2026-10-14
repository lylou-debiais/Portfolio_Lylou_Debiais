       const LANG = document.documentElement.lang === "en" ? "en" : "fr";
const G = [
  "linear-gradient(135deg,#c98d68,#8a5238)",
  "linear-gradient(135deg,#8c9a78,#55633f)",
  "linear-gradient(135deg,#6b4a3a,#2e2019)",
  "linear-gradient(135deg,#d6a56f,#a8643a)",
  "linear-gradient(135deg,#a6836e,#6a4a3c)"
];
const UI = {
  fr: {
    about: "À propos",
    works: "Mes réalisations",
    cv: "CV & Compétences",
    contact: "Me contacter",
    welcome: "Welcome to · Portfolio",
    lead: "Créatrice Numérique & UI/UX Designer. Transformer des idées en expériences visuelles captivantes et innovantes.",
    seeWorks: "Mes réalisations",
    toolbox: "Ma boîte à outils",
    tools: "Mes outils.",
    journey: "Mon parcours",
    look: "Un regard curieux, une envie de créer.",
    bio1: "Actuellement en troisième année de BUT Métiers du Multimédia et de l'Internet à Limoges, titulaire du DUT obtenu en 2026, je me suis spécialisée en Création Numérique pour développer mes compétences en design graphique, motion design et développement web, pour plus tard espérer travailler en tant que UI/UX Designer.",
    bio2: "Passionnée par l'univers digital et la création visuelle, j'aime transformer des idées en expériences visuelles captivantes et innovantes.",
    passions: "Mes passions",
    p1t: "Le langage visuel",
    p1d: "Design graphique et création d'identités visuelles.",
    p2t: "Le point de vue utilisateur",
    p2d: "Se mettre à la place de l'utilisateur.",
    p3t: "Le web créatif",
    p3d: "Développement web créatif.",
    best: "Mes meilleurs projets",
    select: "Sélection.",
    all: "Voir tous mes projets",
    idea: "Une idée, un projet ?",
    talk: "Et si l'on en parlait ?",
    year: "Portfolio · 2ème année Création Numérique",
    worksTitle: "Mes<br>réalisations.",
    path: "Parcours",
    cvTitle: "CV &amp;<br>Compétences.",
    download: "Télécharger mon CV",
    education: "Mes formations.",
    ideas: "Au service des idées.",
    design: "Design &amp; Création",
    web: "Développement Web",
    contactEyebrow: "Contact",
    contactTitle: "Commençons par<br>un échange.",
    email: "Email",
    phone: "Téléphone",
    loc: "Localisation",
    city: "Limoges, France",
    send: "Envoyez un message",
    name: "Nom",
    message: "Message",
    submit: "Envoyer",
    back: "← Retour aux réalisations",
    targeted: "Compétences ciblées",
    did: "Ce que j'ai réalisé",
    goals: "Objectifs du projet",
    problem: "Problématique",
    work: "Le travail réalisé.",
    skills: "Compétences développées",
    prev: "Précédent",
    next: "Suivant",
    copy: "© 2026 Portfolio MMI — Lylou Debiais",
    passion: "Créé avec passion",
    sent: "Merci, votre message a bien été envoyé.",
    fail: "L'envoi n'a pas fonctionné. Écrivez-moi directement par e-mail."
  },
  en: {
    about: "About",
    works: "My work",
    cv: "Resume & Skills",
    contact: "Contact me",
    welcome: "Welcome to · Portfolio",
    lead: "Digital Creator & UI/UX Designer. Turning ideas into captivating, innovative visual experiences.",
    seeWorks: "My work",
    toolbox: "My toolbox",
    tools: "My tools.",
    journey: "My path",
    look: "A curious eye, a drive to create.",
    bio1: "I am currently in the third year of a BUT in Multimedia and Internet Professions in Limoges, with a DUT earned in 2026. I specialised in Digital Creation to grow in graphic design, motion design and web development, with the aim of working as a UI/UX Designer.",
    bio2: "Passionate about digital culture and visual creation, I love turning ideas into captivating and innovative visual experiences.",
    passions: "What I care about",
    p1t: "Visual language",
    p1d: "Graphic design and visual identity.",
    p2t: "The user's point of view",
    p2d: "Stepping into the user's shoes.",
    p3t: "Creative web",
    p3d: "Creative web development.",
    best: "Featured projects",
    select: "Selection.",
    all: "See all projects",
    idea: "An idea, a project?",
    talk: "Shall we talk about it?",
    year: "Portfolio · 2nd year Digital Creation",
    worksTitle: "My<br>work.",
    path: "Background",
    cvTitle: "Resume &amp;<br>Skills.",
    download: "Download my resume",
    education: "Education.",
    ideas: "In service of ideas.",
    design: "Design &amp; Creation",
    web: "Web development",
    contactEyebrow: "Contact",
    contactTitle: "Let's start with<br>a conversation.",
    email: "Email",
    phone: "Phone",
    loc: "Location",
    city: "Limoges, France",
    send: "Send a message",
    name: "Name",
    message: "Message",
    submit: "Send",
    back: "← Back to projects",
    targeted: "Targeted competencies",
    did: "What I created",
    goals: "Project objectives",
    problem: "Brief",
    work: "The work delivered.",
    skills: "Skills developed",
    prev: "Previous",
    next: "Next",
    copy: "© 2026 MMI Portfolio — Lylou Debiais",
    passion: "Made with care",
    sent: "Thank you, your message has been sent.",
    fail: "Sending failed. Please email me directly."
  }
};
const T = UI[LANG];
const P = [
  {
    id: "sae401",
    img: "assets/sae401/petits-gens-responsable-marketing-megaphone-publicite-push-publicite-push-strategie-marketing-traditionnelle-illustration-concept-marketing-interruption_335657-2571.avif",
    s: ["Direction artistique", "Identité visuelle", "Branding", "UX/UI Design", "Motion Design", "Print Design", "Figma", "Sémiotique", "Design Thinking", "Double Diamant", "Pitch oral", "Anglais professionnel"],
    l: [
      ["Voir tout le projet", "See the full project", "https://www.figma.com/design/U3jnVRv1HfpL9bztvx6WoI/SA%C3%89-4.Crea.01?node-id=69-2&t=j3sJ1Da2xkDs6oUq-1"]
    ],
    previews: [["assets/sae401/figma gazon.png", "Projet Figma"]],
    fr: {
      tag: "Communication visuelle",
      t: "Hors des\nsentiers battus.",
      n: "SAÉ 4.Créa.01 — Campagne de communication visuelle",
      d: "Conception d'éléments visuels cohérents pour une campagne de communication globale.",
      c: "Analyser, Concevoir, Communiquer et Développer une identité visuelle stratégique",
      q: "Comment définir et exploiter une identité visuelle pour donner du sens à une campagne de communication ?",
      did: "J'ai conçu une identité visuelle complète pour un championnat du monde insolite (course de tondeuses à gazon au Royaume-Uni), avec une campagne bilingue déclinée en print, web et réseaux sociaux.",
      o: [
        "Créer une campagne pour un championnat du monde insolite",
        "Concevoir une identité graphique cohérente et différenciante",
        "Produire des supports print, web et réseaux sociaux",
        "Argumenter les choix graphiques et sémiotiques",
        "Communication bilingue FR/EN"
      ],
      r: [
        "Travail en binôme, analyse du contexte, du public et des objectifs",
        "Recherche sémiologique, benchmark, moodboard et pistes créatives",
        "Identité complète : logo, typographie, palette, iconographie",
        "Affiches, flyers, brochures, réseaux sociaux, micro-motions, UX/UI",
        "Communiqué de presse et notice de démarche créative",
        "Pitch en anglais devant un comité · double diamant et design thinking"
      ]
    },
    en: {
      tag: "Visual communication",
      t: "Off the\nbeaten path.",
      n: "SAÉ 4.Créa.01 — Visual communication campaign",
      d: "Coherent visual system for a full communication campaign.",
      c: "Analyse, Design, Communicate and Develop a strategic visual identity",
      q: "How can a visual identity give meaning to a communication campaign?",
      did: "I designed a complete visual identity for an unusual world championship (lawnmower racing in the UK), with a bilingual campaign across print, web and social media.",
      o: [
        "Create a campaign for an unusual world championship",
        "Design a coherent, distinctive graphic identity",
        "Produce print, web and social assets",
        "Argue graphic and semiotic choices",
        "Bilingual FR/EN communication"
      ],
      r: [
        "Pair work, context, audience and goal analysis",
        "Semiotic research, benchmark, moodboard and creative directions",
        "Full identity: logo, type, palette, iconography",
        "Posters, flyers, brochures, social, micro-motions, UX/UI",
        "Press release and creative process note",
        "English pitch to a committee · double diamond and design thinking"
      ]
    }
  },
  {
    id: "sae402",
    img: "assets/sae402/11466705-production-de-contenu-multimedia-pour-le-concept-d-illustration-de-chaine-de-blog-video-sur-fond-blanc-vectoriel.jpg",
    s: ["WordPress", "WooCommerce", "HTML/CSS/JS", "AFrame", "p5.js", "p5play", "Responsive Design", "UX/UI Design", "Motion Design", "3D", "Audiovisuel", "Storytelling", "Marketing interactif"],
    l: [
      ["Voir les prototypes Figma", "View Figma prototypes", "https://www.figma.com/design/OdkbXMW0lzk7rrsa83MfAp/SA%C3%89-4.Crea.02-%7C-Produire-du-contenu-multim%C3%A9dia?node-id=0-1&t=aqzrFzuV4ozvmIQ1-1"],
      ["Consulter le site", "View the website", "https://mmi.unilim.fr/~berkersuzan1/wordpress/"]
    ],
    previews: [],
    fr: {
      tag: "Production multimédia",
      t: "Un autre\nterrain de jeu.",
      n: "SAÉ 4.Créa.02 — Production de contenus multimédia",
      d: "Production de contenus audiovisuels variés et innovants adaptés à différents formats et plateformes.",
      c: "Concevoir, Produire, Développer et Communiquer avec les médias numériques",
      q: "Comment apporter de la plus-value à une campagne de communication en produisant un ensemble cohérent de médias numériques ?",
      did: "J'ai développé une marketplace e-commerce immersive intégrée à l'univers d'un jeu vidéo culte, avec contenus audiovisuels, animations interactives et stratégie de communication digitale.",
      o: [
        "Concevoir un dispositif multimédia autour d'un univers de jeu vidéo",
        "Produire un site e-commerce inspiré de Leboncoin ou Vinted",
        "Adapter l'expérience à l'univers du jeu",
        "Stratégie de communication digitale et réseaux sociaux",
        "Contenus en français et en anglais"
      ],
      r: [
        "Étude de l'identité visuelle, des personnages et de l'univers du jeu",
        "Site e-commerce fictif en approche diégétique, maquettes UX/UI complètes",
        "Modèles 3D avec AFrame",
        "Thème WordPress Block Theme avec WooCommerce",
        "Vidéos verticales, stories, animations, contenus réseaux sociaux",
        "Bannière interactive en mini-jeu (p5.js / p5play)",
        "Travail collaboratif, suivi de livrables, intégration responsive"
      ]
    },
    en: {
      tag: "Multimedia production",
      t: "Another\nplayground.",
      n: "SAÉ 4.Créa.02 — Multimedia content production",
      d: "Varied, innovative audiovisual content adapted to different formats and platforms.",
      c: "Design, Produce, Develop and Communicate with digital media",
      q: "How can a coherent set of digital media add value to a communication campaign?",
      did: "I developed an immersive e-commerce marketplace inside a cult video-game universe, with audiovisual content, interactive animation and a digital communication strategy.",
      o: [
        "Design a multimedia system around a video-game universe",
        "Produce an e-commerce site inspired by Leboncoin or Vinted",
        "Adapt the experience to the game world",
        "Digital communication and social strategy",
        "Content in French and English"
      ],
      r: [
        "Study of the game's visual identity, characters and world",
        "Fictional diegetic e-commerce site with full UX/UI mockups",
        "3D models with A-Frame",
        "WordPress block theme with WooCommerce",
        "Vertical videos, stories, animations, social content",
        "Interactive mini-game banner (p5.js / p5play)",
        "Teamwork, deliverable tracking, responsive integration"
      ]
    }
  },
  {
    id: "sae301",
    img: "assets/sae301/2073157-city-women-selection-items-via-her-smartphone-concept-vectoriel.jpg",
    s: ["UX/UI Design", "Figma", "CMS", "Responsive Design", "Parcours utilisateur", "Accessibilité"],
    l: [],
    previews: [["assets/sae301/figma aesop.png", "Maquette Figma"], ["assets/sae301/site aesop.png", "Interface web"]],
    fr: {
      tag: "UX/UI Design", t: "Le soin du\nparcours.", n: "SAÉ 3.01 — Click & Collect UX/UI",
      d: "Conception d'une expérience click & collect claire et accessible.",
      c: "Comprendre, concevoir, développer et entreprendre",
      q: "Comment proposer un parcours d'achat simple et agréable à chaque étape ?",
      did: "J'ai conçu les parcours utilisateurs et les interfaces d'un service click & collect, de la recherche produit à la confirmation de commande.",
      o: ["Analyser les besoins et les usages", "Structurer un parcours click & collect", "Concevoir une interface cohérente", "Prototyper et tester les écrans"],
      r: ["Benchmark et analyse des utilisateurs", "Arborescence et parcours principaux", "Maquettes Figma desktop et mobile", "Prototype interactif et recommandations d'accessibilité"]
    },
    en: {
      tag: "UX/UI Design", t: "Taking care of\nthe journey.", n: "SAÉ 3.01 — Click & Collect UX/UI",
      d: "Designing a clear and accessible click & collect experience.",
      c: "Understand, design, develop and undertake",
      q: "How can every step of an online purchase feel simple and enjoyable?",
      did: "I designed the user journeys and interfaces for a click & collect service, from product discovery to order confirmation.",
      o: ["Analyse needs and uses", "Structure a click & collect journey", "Design a coherent interface", "Prototype and test screens"],
      r: ["Benchmark and user analysis", "Information architecture and key journeys", "Desktop and mobile Figma mockups", "Interactive prototype and accessibility recommendations"]
    }
  },
  {
    id: "sae302",
    img: "assets/sae302/visiteurs-du-musee-marchant-dans-galerie-art-touristes-appreciant-exposition-admirant-oeuvres-art-exposition-illustration-vectorielle-pour-concept-excursion-personnes-culture_74855-10116.avif",
    s: ["Direction artistique", "Web design", "Figma", "Storytelling", "Responsive Design", "Communication"],
    l: [],
    previews: [["assets/sae302/portfolio agil.png", "Portfolio"], ["assets/sae302/site bal.png", "Site web"]],
    fr: {
      tag: "Direction artistique", t: "Faire vivre\nla culture.", n: "SAÉ 3.02 — Dispositif de médiation culturelle",
      d: "Un dispositif numérique pour rendre une exposition plus vivante et accessible.",
      c: "Concevoir une expérience culturelle éditoriale et interactive",
      q: "Comment donner envie de découvrir une exposition grâce au numérique ?",
      did: "J'ai imaginé une identité et un site de médiation culturelle pour accompagner les visiteurs avant, pendant et après leur visite.",
      o: ["Comprendre un public culturel", "Créer une direction artistique", "Hiérarchiser des contenus éditoriaux", "Décliner le dispositif sur plusieurs supports"],
      r: ["Recherche iconographique et moodboard", "Identité graphique et système typographique", "Wireframes et maquettes responsive", "Présentation argumentée du dispositif"]
    },
    en: {
      tag: "Art direction", t: "Bringing culture\nto life.", n: "SAÉ 3.02 — Cultural mediation experience",
      d: "A digital experience designed to make an exhibition more vivid and accessible.",
      c: "Design an editorial and interactive cultural experience",
      q: "How can digital tools make people want to discover an exhibition?",
      did: "I created the identity and cultural mediation website supporting visitors before, during and after their visit.",
      o: ["Understand a cultural audience", "Create an art direction", "Organise editorial content", "Adapt the system across media"],
      r: ["Iconographic research and moodboard", "Graphic identity and type system", "Responsive wireframes and mockups", "Defended presentation of the concept"]
    }
  },
  {
    id: "sae303",
    img: "assets/sae303/analyse-du-marche-boursier-graphique_23-2148584739.avif",
    s: ["Data visualisation", "Figma", "UX/UI Design", "Analyse", "Dashboard", "Présentation"],
    l: [],
    previews: [["assets/sae303/figma donnée.png", "Maquette data"], ["assets/sae303/site donnée.png", "Dashboard"]],
    fr: {
      tag: "Data design", t: "Rendre les données\nlisibles.", n: "SAÉ 3.03 — Interface de visualisation de données",
      d: "Transformer des données complexes en une interface claire et exploitable.",
      c: "Analyser, structurer et communiquer une information complexe",
      q: "Comment faciliter la compréhension de données financières grâce au design ?",
      did: "J'ai conçu un tableau de bord permettant de consulter et comparer des indicateurs boursiers de façon progressive et lisible.",
      o: ["Identifier les informations essentielles", "Organiser des données complexes", "Concevoir des visualisations utiles", "Rendre l'interface accessible"],
      r: ["Analyse de données et des besoins", "Architecture du tableau de bord", "Choix de visualisations et hiérarchie", "Maquettes et présentation des choix"]
    },
    en: {
      tag: "Data design", t: "Making data\nreadable.", n: "SAÉ 3.03 — Data visualisation interface",
      d: "Turning complex data into a clear and useful interface.",
      c: "Analyse, structure and communicate complex information",
      q: "How can design make financial data easier to understand?",
      did: "I designed a dashboard that makes it easy to explore and compare stock-market indicators progressively.",
      o: ["Identify essential information", "Organise complex data", "Design useful visualisations", "Make the interface accessible"],
      r: ["Data and needs analysis", "Dashboard information architecture", "Visualisation and hierarchy choices", "Mockups and rationale presentation"]
    }
  }
];
function tx(p) {
  return p[LANG];
}
function chips(a) {
  return `<div class="chips">${a.map((x) => `<span class="chip">${x}</span>`).join("")}</div>`;
}
function card(p, i) {
  const x = tx(p);
  return `<a class="pc" href="#/projet/${p.id}"><div class="ph" style="background:${bg(p, i)}"><small>${x.tag}</small><b>0${i + 1}</b>${x.t.replace("\n", "<br>")}</div><div class="tx"><h3>${x.n}</h3><p>${x.d}</p></div></a>`;
}
function bg(p, i) {
  return p.img ? `linear-gradient(135deg, rgba(46,32,25,.2), rgba(46,32,25,.6)), url("${encodeURI(p.img)}") center/cover` : G[i % G.length];
}
function ul(items) {
  return `<ul class="l">${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}
function cta() {
  return `<section class="cta"><div class="w"><div class="eyebrow">${T.idea}</div><h2>${T.talk}</h2><a class="btn" href="#/contact">${T.contact}</a></div></section>`;
}
function SH(a, b, n) {
  return `<svg viewBox="0 0 512 512"><path fill="${a}" d="M71 460L30 0h452l-41 460-185 52z"/><path fill="${b}" d="M256 472l125-35 35-376H256z"/><text x="256" y="360" text-anchor="middle" font-family="DM Sans,Arial,sans-serif" font-weight="700" font-size="320" fill="#fff">${n}</text></svg>`;
}
function AD(n, a, b) {
  return `<svg viewBox="0 0 100 100"><rect width="100" height="100" rx="8" fill="${a}"/><text x="50" y="64" text-anchor="middle" font-family="Arial,sans-serif" font-weight="700" font-size="42" fill="${b}">${n}</text></svg>`;
}
const SK = [
  ["Figma", `<svg viewBox="0 0 38 57"><path fill="#1abcfe" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"/><path fill="#0acf83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z"/><path fill="#ff7262" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z"/><path fill="#f24e1e" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z"/><path fill="#a259ff" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z"/></svg>`],
  ["Trello", `<svg viewBox="0 0 100 100"><rect width="100" height="100" rx="18" fill="#0079bf"/><rect x="16" y="16" width="30" height="62" rx="6" fill="#fff"/><rect x="54" y="16" width="30" height="38" rx="6" fill="#fff"/></svg>`],
  ["Monday", `<svg viewBox="0 0 120 80"><g stroke-linecap="round" stroke-width="17"><path d="M16 62L36 26" stroke="#f62b54"/><path d="M50 62L70 26" stroke="#fc0"/><path d="M84 62L104 26" stroke="#00ca72"/></g><circle cx="104" cy="64" r="9" fill="#00d2d2"/></svg>`],
  ["Libre Office", `<svg viewBox="0 0 80 100"><path d="M8 4h46l18 18v74H8z" fill="#18a303"/><path d="M54 4v18h18z" fill="#0e6a02"/><path fill="#fff" d="M20 42h40v6H20zm0 14h40v6H20zm0 14h26v6H20z"/></svg>`],
  ["HTML5", SH("#e44d26", "#f16529", "5")],
  ["CSS3", SH("#264de4", "#2965f1", "3")],
  ["JavaScript", `<svg viewBox="0 0 100 100"><rect width="100" height="100" rx="6" fill="#f7df1e"/><text x="94" y="92" text-anchor="end" font-family="DM Sans,Arial,sans-serif" font-weight="700" font-size="52" fill="#222">JS</text></svg>`],
  ["PHP", `<svg viewBox="0 0 100 60"><ellipse cx="50" cy="30" rx="48" ry="28" fill="#777bb3"/><text x="50" y="40" text-anchor="middle" font-family="DM Sans,Arial,sans-serif" font-weight="700" font-style="italic" font-size="30" fill="#000">php</text></svg>`],
  ["WordPress", `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="48" fill="#21759b"/><circle cx="50" cy="50" r="40" fill="none" stroke="#fff" stroke-width="3"/><text x="50" y="68" text-anchor="middle" font-family="Georgia,serif" font-weight="700" font-size="56" fill="#fff">W</text></svg>`],
  ["Canva", `<svg viewBox="0 0 100 100"><defs><linearGradient id="cg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#00c4cc"/><stop offset="1" stop-color="#7d2ae8"/></linearGradient></defs><circle cx="50" cy="50" r="48" fill="url(#cg)"/><text x="50" y="60" text-anchor="middle" font-family="Georgia,serif" font-style="italic" font-weight="700" font-size="28" fill="#fff">Canva</text></svg>`],
  ["Illustrator", AD("Ai", "#330000", "#ff9a00")],
  ["Photoshop", AD("Ps", "#001e36", "#31a8ff")],
  ["After Effects", AD("Ae", "#00005b", "#9999ff")],
  ["InDesign", AD("Id", "#49021f", "#ff3366")],
  ["Premiere Pro", AD("Pr", "#00005b", "#ea77ff")],
  ["Affinity", `<svg viewBox="0 0 100 100"><defs><linearGradient id="ag" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#e0409a"/><stop offset="1" stop-color="#6a3fd0"/></linearGradient></defs><rect x="3" y="3" width="94" height="94" rx="22" fill="url(#ag)"/><path fill="#fff" fill-rule="evenodd" d="M50 20L79 78H66L60.5 66H39.5L34 78H21zM44.5 55H55.5L50 43z"/></svg>`]
];
function softs() {
  const tools = [...SK, ...SK, ...SK];
  return `<section><div class="w"><div><div class="eyebrow">${T.toolbox}</div><h2>${T.tools}</h2></div></div><div class="car" id="car">${tools.map((s) => `<div class="sk" role="img" aria-label="${s[0]}">${s[1]}<span>${s[0]}</span></div>`).join("")}</div></section>`;
}
function sl(d) {
  const el = document.getElementById("car");
  if (el) el.scrollBy({ left: d * 222, behavior: "smooth" });
}
function fx() {
  const c = document.getElementById("car");
  if (!c) return;
  const r = c.getBoundingClientRect();
  const m = r.left + r.width / 2;
  c.querySelectorAll(".sk").forEach((k) => {
    const b = k.getBoundingClientRect();
    const d = Math.max(-1.7, Math.min(1.7, (b.left + b.width / 2 - m) / 220));
    k.style.transform = `scale(${1 - Math.abs(d) * 0.17}) rotateY(${-d * 16}deg)`;
    k.style.opacity = 1 - Math.abs(d) * 0.22;
  });
}
function centerCarousel() {
  const c = document.getElementById("car");
  if (!c) return;
  const groupWidth = c.scrollWidth / 3;
  c.dataset.loopWidth = groupWidth;
  c.scrollLeft = (c.scrollWidth - c.clientWidth) / 2;
}
function loopCarousel() {
  const c = document.getElementById("car");
  if (!c) return;
  const groupWidth = Number(c.dataset.loopWidth);
  if (!groupWidth) return;
  if (c.scrollLeft < groupWidth * 0.5) c.scrollLeft += groupWidth;
  if (c.scrollLeft > groupWidth * 2.5) c.scrollLeft -= groupWidth;
}
function dragCarousel() {
  const c = document.getElementById("car");
  if (!c) return;
  let dragging = false;
  let startX = 0;
  let startScroll = 0;
  c.addEventListener("pointerdown", (e) => {
    dragging = true;
    startX = e.clientX;
    startScroll = c.scrollLeft;
    c.setPointerCapture(e.pointerId);
    c.classList.add("dragging");
  });
  c.addEventListener("pointermove", (e) => {
    if (dragging) c.scrollLeft = startScroll - (e.clientX - startX);
  });
  c.addEventListener("scroll", () => {
    loopCarousel();
    fx();
  }, { passive: true });
  c.addEventListener("pointerup", () => {
    dragging = false;
    c.classList.remove("dragging");
  });
  c.addEventListener("pointercancel", () => {
    dragging = false;
    c.classList.remove("dragging");
  });
}
addEventListener("resize", fx);
const educations = LANG === "en"
  ? [
      ["2026 — 2027", "BUT MMI 3rd year · Digital Creation", "IUT du Limousin, Limoges"],
      ["2026", "DUT in Multimedia and Internet Professions", "IUT du Limousin, Limoges"],
      ["2025 — 2026", "BUT MMI 2nd year · Digital Creation", "IUT du Limousin, Limoges"],
      ["2024 — 2025", "BUT MMI 1st year", "IUT du Limousin, Limoges"],
      ["2022 — 2024", "STI2D Baccalauréat · SIN option", "Lycée La Joliverie, Saint-Sébastien-sur-Loire"]
    ]
  : [
      ["2026 — 2027", "BUT MMI 3ème année · Création Numérique", "IUT du Limousin, Limoges"],
      ["2026", "DUT Métiers du Multimédia et de l'Internet", "IUT du Limousin, Limoges"],
      ["2025 — 2026", "BUT MMI 2ème année · Création Numérique", "IUT du Limousin, Limoges"],
      ["2024 — 2025", "BUT MMI 1ère année", "IUT du Limousin, Limoges"],
      ["2022 — 2024", "Baccalauréat STI2D · Option SIN", "Lycée La Joliverie, Saint-Sébastien-sur-Loire"]
    ];
const V = {
  home: () => `<div class="w hero"><div><div class="eyebrow">${T.welcome}</div><h1>Lylou<br><em>Debiais.</em></h1><p class="lead">${T.lead}</p><a class="btn" href="#/realisations">${T.seeWorks}</a> &nbsp;<a class="btn o" href="#/contact">${T.contact}</a></div><div class="arch"><span>ld.</span></div></div>
${softs()}<section class="alt"><div class="w two"><div><div class="eyebrow">${T.journey}</div><h2>${T.look}</h2></div><div><p>${T.bio1}</p><p>${T.bio2}</p></div></div></section>
<section><div class="w"><div class="eyebrow">${T.passions}</div><div class="cards"><div class="card"><div class="ic">🎨</div><h3>${T.p1t}</h3><p>${T.p1d}</p></div><div class="card"><div class="ic">✨</div><h3>${T.p2t}</h3><p>${T.p2d}</p></div><div class="card"><div class="ic">💻</div><h3>${T.p3t}</h3><p>${T.p3d}</p></div></div></div></section>
<section class="alt"><div class="w"><div class="eyebrow">${T.best}</div><h2>${T.select}</h2><div class="proj p3">${[0, 1, 3].map((i) => card(P[i], i)).join("")}</div><div style="margin-top:28px"><a class="btn o" href="#/realisations">${T.all}</a></div></div></section>${cta()}`,
  realisations: () => `<div class="w phead"><div class="eyebrow">${T.year}</div><h1>${T.worksTitle}</h1></div><div class="w" style="padding-bottom:64px"><div class="proj">${[4, 3, 2, 1, 0].map((i) => card(P[i], i)).join("")}</div></div>${cta()}`,
  cv: () => `<div class="w phead"><div class="eyebrow">${T.path}</div><h1>${T.cvTitle}</h1><div class="lk"><a class="btn" href="assets/CV%20-%20Debiais%20Lylou.pdf" download="CV - Debiais Lylou.pdf">${T.download}</a></div></div>
<section style="padding-top:0"><div class="w"><h2>${T.education}</h2><div class="tl">${educations.map((e) => `<div><span>${e[0]}</span><section style="padding:0"><h3>${e[1]}</h3><p>${e[2]}</p></section></div>`).join("")}</div></div></section>
<section class="alt"><div class="w"><div class="eyebrow">${T.toolbox}</div><h2>${T.ideas}</h2><div class="cards c2"><div class="card"><h3>${T.design}</h3><br>${chips(["Illustrator", "Figma", "InDesign", "After Effects", "Premiere Pro", "Photoshop", "Canva"])}</div><div class="card"><h3>${T.web}</h3><br>${chips(["HTML/CSS", "JavaScript", "WordPress", "PHP", "MySQL"])}</div></div></div></section>${softs()}${cta()}`,
  contact: () => `<div class="w phead"><div class="eyebrow">${T.contactEyebrow}</div><h1>${T.contactTitle}</h1></div><div class="w two" style="padding-bottom:72px"><div class="ct"><h3 style="margin-top:0">${T.email}</h3><p><a href="mailto:lyloudebiais@gmail.com">lyloudebiais@gmail.com</a></p><h3>${T.phone}</h3><p><a href="tel:+33623068379">06 23 06 83 79</a></p><h3>${T.loc}</h3><p>${T.city}</p><div class="lk"><a class="btn o" href="https://www.linkedin.com/in/lylou-debiais-4ba06b332/" target="_blank" rel="noopener">LinkedIn</a><a class="btn o" href="https://www.instagram.com/lylou_debiais/" target="_blank" rel="noopener">Instagram</a></div></div><div class="card"><h3 style="margin-bottom:16px">${T.send}</h3><form class="form" id="contact-form"><input name="name" placeholder="${T.name}" required><input name="email" placeholder="Email" type="email" required><textarea name="message" rows="5" placeholder="${T.message}" required></textarea><button class="btn" type="submit">${T.submit}</button><p class="notice" id="form-note" hidden></p></form></div></div>`,
  projet: (id) => {
    const i = P.findIndex((p) => p.id === id);
    const p = P[i] || P[0];
    const k = i < 0 ? 0 : i;
    const x = tx(p);
    const previews = p.previews.length
      ? `<div class="previews">${p.previews.map((img) => `<div class="preview"><img src="${encodeURI(img[0])}" alt="${img[1]}"></div>`).join("")}</div>`
      : "";
    return `<div class="w"><a class="back" href="#/realisations">${T.back}</a><div class="phead" style="padding-top:0"><div class="eyebrow">${x.tag} · ${LANG === "en" ? "2nd year Digital Creation" : "2ème année Création Numérique"}</div><h1>${x.t.replace("\n", "<br>")}</h1><p style="color:var(--mute)">${x.n}</p></div><div class="cover" style="background:${bg(p, k)}">${x.tag}</div>
<div class="two" style="padding:48px 0"><div><div class="eyebrow">${T.targeted}</div><p class="serif" style="font-size:26px">${x.c}</p><br><div class="eyebrow">${T.did}</div><p style="color:var(--mute)">${x.did}</p>${previews}<div class="lk">${p.l.map((link) => `<a class="btn" target="_blank" rel="noopener" href="${link[2]}">${LANG === "en" ? link[1] : link[0]}</a>`).join("")}</div></div><div><div class="eyebrow">${T.goals}</div>${ul(x.o)}</div></div>
<div class="quote">« ${x.q} »</div>
<div class="two" style="padding:48px 0"><div><div class="eyebrow">${T.problem}</div><h2>${T.work}</h2></div><div>${ul(x.r)}</div></div>
<div style="padding-bottom:64px"><div class="eyebrow">${T.skills}</div>${chips(p.s)}</div></div>${cta()}`;
  }
};
function bindForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const note = document.getElementById("form-note");
    const data = new FormData(form);
    data.append("access_key", "245342a8-30f9-42b5-9281-581cf4766718");
    data.append("subject", "Nouveau message du portfolio");
    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data });
      const json = await res.json();
      note.hidden = false;
      note.textContent = json.success ? T.sent : T.fail;
      if (json.success) form.reset();
    } catch {
      note.hidden = false;
      note.textContent = T.fail;
    }
  });
}
let coverTimer;
let renderTimer;
function startLoader() {
  const loader = document.getElementById("site-loader");
  const bar = document.getElementById("loader-bar");
  const percent = document.getElementById("loader-percent");
  if (!loader || !bar || !percent) return;
  const duration = 1000;
  const started = performance.now();
  const tick = () => {
    const progress = Math.min(1, (performance.now() - started) / duration);
    const value = Math.round(progress * 100);
    bar.style.width = `${value}%`;
    percent.textContent = `${value}%`;
    if (progress < 1) {
      return;
    }
    clearInterval(timer);
    loader.classList.add("loaded");
    setTimeout(() => loader.remove(), 250);
  };
  const timer = setInterval(tick, 16);
  tick();
}
function go(animate = true) {
  const h = (location.hash || "#/").slice(2).split("/");
  const r = h[0] || "home";
  const app = document.getElementById("app");
  const cover = document.getElementById("page-cover");
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const render = () => {
    app.innerHTML = (V[r] || V.home)(h[1]);
    document.querySelectorAll(".links a[data-r]").forEach((a) => {
      a.classList.toggle("on", a.dataset.r === r || (r === "projet" && a.dataset.r === "realisations"));
    });
    document.getElementById("nav-links")?.classList.remove("open");
    scrollTo(0, 0);
    const c = document.getElementById("car");
    if (c) {
      c.onscroll = fx;
      centerCarousel();
      dragCarousel();
      fx();
    }
    bindForm();
  };
  clearTimeout(coverTimer);
  clearTimeout(renderTimer);
  if (cover && animate && !reducedMotion) {
    cover.classList.remove("active");
    void cover.offsetWidth;
    cover.classList.add("active");
    renderTimer = setTimeout(() => {
      render();
    }, 1200);
    coverTimer = setTimeout(() => {
      cover.classList.remove("active");
    }, 2400);
    return;
  }
  render();
}
function toggleMenu() {
  document.getElementById("nav-links")?.classList.toggle("open");
}
function switchLanguage(lang) {
  const hash = location.hash || "#/";
  location.href = (lang === "en" ? "index-en.html" : "index.html") + hash;
}
function currentTheme() {
  return document.documentElement.getAttribute("data-theme") || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
}
function toggleTheme() {
  const next = currentTheme() === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
  syncThemeButton();
}
function syncThemeButton() {
  const btn = document.getElementById("theme-btn");
  if (btn) btn.textContent = currentTheme() === "dark" ? "☀" : "☾";
}
addEventListener("hashchange", go);
addEventListener("DOMContentLoaded", () => {
  document.getElementById("copy-year").textContent = T.copy;
  document.getElementById("copy-passion").textContent = T.passion;
  syncThemeButton();
  go(false);
  startLoader();
});
window.sl = sl;
window.toggleMenu = toggleMenu;
window.switchLanguage = switchLanguage;
window.toggleTheme = toggleTheme;