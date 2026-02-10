export const HERO_DATA = {
  name: "Ibrahim Drame",
  role: "Développeur Web",
  subRole: "Futur développeur full-stack",
  description: "Passionné par le développement web et la création d'expériences digitales innovantes.",
  availability: {
    internship: {
      duration: "8 semaines",
      period: "Avril - Septembre 2026",
      label: "À la recherche d'un stage"
    },
    alternance: {
      start: "Septembre 2026",
      label: "À la recherche d'une alternance"
    }
  },
  socials: {
    email: "ibrahimdrame165@gmail.com",
    cv: "/img/CV_STAGE_MMI.pdf" // Chemin à adapter selon où sera placé le fichier
  }
};

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

export const SKILLS_DATA = [
  { name: "HTML", icon: `${DEVICON}/html5/html5-original.svg` },
  { name: "CSS", icon: `${DEVICON}/css3/css3-original.svg` },
  { name: "Tailwind", icon: `${DEVICON}/tailwindcss/tailwindcss-original.svg` },
  { name: "Bootstrap", icon: `${DEVICON}/bootstrap/bootstrap-original.svg` },
  { name: "TypeScript", icon: `${DEVICON}/typescript/typescript-original.svg` },
  { name: "React", icon: `${DEVICON}/react/react-original.svg` },
  { name: "Angular", icon: `${DEVICON}/angularjs/angularjs-original.svg` },
  { name: "PHP", icon: `${DEVICON}/php/php-original.svg` },
  { name: "Symfony", icon: `${DEVICON}/symfony/symfony-original.svg` },
  { name: "SQL", icon: `${DEVICON}/mysql/mysql-original.svg` },
];

export interface Project {
  id: string;
  title: string;
  description: string;
  context: string;
  difficulties: string;
  techs: string[];
  date: string;
  link: string;
  image: string;
  /** Images/screens à afficher sur la page détail du projet (en plus de l'image principale) */
  screens?: string[];
}

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS_DATA.find((p) => p.id === slug);
}

export const PROJECTS_DATA: Project[] = [
  {
    id: 'sushy-crousty',
    title: 'Sushy Crousty',
    description: 'Création d\'un site web pour un restaurant de sushis dans le cadre d\'une SAE (Situation d\'Apprentissage et d\'Évaluation). Projet réalisé à 5.',
    context: 'Projet réalisé à 5 dans le cadre d\'une SAE où il fallait développer un site complet pour un restaurant de sushis. Je me suis chargé de : l\'API REST en PHP pour les boxes (sushis), la consommation de l\'API avec Angular, la landing page, la page panier, la page menu, la navbar, le footer et les pages annexes (mentions légales, etc.). L\'objectif était de créer une plateforme permettant aux clients de consulter le menu, passer des commandes en ligne et gérer leur compte.',
    difficulties: 'L\'appréhension d\'Angular, framework complexe avec sa courbe d\'apprentissage importante, notamment la gestion des composants, des services, du routing et de l\'injection de dépendances. La création et la mise en place d\'une API REST PHP fonctionnelle, avec la gestion des endpoints, l\'authentification, la validation des données et la sécurité. La synchronisation entre le frontend Angular et le backend PHP, en gérant les requêtes HTTP, les erreurs et les états de chargement. La gestion de l\'état de l\'application et la persistance des données utilisateur. Note : la partie connexion/inscription ne fonctionne pas pour l\'instant, un correctif est en cours.',
    techs: ['Angular', 'PHP', 'API REST', 'TypeScript', 'HTML', 'CSS'],
    date: 'Janvier 2026',
    link: 'https://datavizsae.netlify.app/',
    image: '/img/sushy_crousty.png',
    screens: ['/img/sushy_crousty_menu.png', '/img/sushy_crousty_panier.png'],
  },
  {
    id: 'webdocumentaire',
    title: 'Webdocumentaire - Les portiers de demain',
    description: 'Réalisation d\'un webdocumentaire sur un stage de perfectionnement de gardien de but, mêlant texte, photo, audio, vidéo et habillage graphique.',
    context: 'Projet réalisé par groupes de 3 ou 4 dans le cadre d\'un cours de journalisme multimédia. La consigne était d\'élaborer un webdocumentaire sur un événement, un spectacle, un lieu, une personne, une association ou un métier de notre choix. Nous avons choisi de documenter un stage de perfectionnement de gardien de but, en suivant des gardiens venus de toute la France pour repousser leurs limites. Le projet nécessitait de réaliser des interviews, capturer des moments forts en vidéo et en photo, créer une narration immersive et développer une interface web permettant de naviguer à travers cette histoire. L\'objectif était de montrer une compréhension et une maîtrise des codes journalistiques et documentaires tout en créant une expérience utilisateur engageante.',
    difficulties: 'Intégrer harmonieusement différents médias (texte, photo, audio, vidéo) dans une expérience narrative cohérente et fluide, en créant une progression logique de l\'histoire. Respecter les codes journalistiques et documentaires (objectivité, structure narrative, éthique) tout en créant une interface web moderne et immersive. Gérer le montage vidéo et audio pour créer des séquences impactantes. Optimiser les performances du site avec de nombreux médias lourds (vidéos, images haute résolution) tout en maintenant une expérience de navigation fluide. Créer une navigation intuitive permettant aux utilisateurs de suivre le récit de manière non-linéaire tout en conservant la cohérence narrative.',
    techs: ['Tailwind CSS', 'JavaScript', 'HTML', 'CSS', 'Webdocumentaire'],
    date: 'Novembre 2025',
    link: 'https://portierdedemain.netlify.app/',
    image: '/img/webdoc.png'
  },
  {
    id: 'kinetic-typographic',
    title: 'Kinetic Typographic',
    description: 'Projet de motion design réalisé en cours où il fallait créer les lyrics d\'une musique en utilisant After Effects.',
    context: 'Projet réalisé dans le cadre d\'un cours de motion design et d\'animation. L\'objectif était de créer une animation typographique dynamique et créative synchronisée avec une musique de notre choix. Il fallait mettre en mouvement les paroles de manière visuellement attrayante, en utilisant les mots comme éléments graphiques et narratifs. Le projet nécessitait de comprendre les principes de l\'animation, du rythme visuel, et de créer une cohérence entre le son et l\'image. Chaque mot devait être animé de manière unique pour créer une expérience visuelle engageante qui renforce le message et l\'émotion de la chanson.',
    difficulties: 'L\'appréhension complète d\'After Effects, logiciel complexe avec une interface riche et de nombreuses fonctionnalités. La maîtrise des animations et des keyframes pour créer des mouvements fluides et naturels. La synchronisation précise avec la musique, en analysant le rythme, les beats et les variations musicales pour créer des animations qui suivent parfaitement la musique. La gestion de la typographie animée, en créant des effets visuels variés tout en gardant la lisibilité du texte. L\'optimisation du rendu final pour obtenir une qualité professionnelle sans que le fichier soit trop lourd. La création d\'une identité visuelle cohérente à travers toutes les animations.',
    techs: ['After Effects', 'Motion Design', 'Typographie', 'Animation'],
    date: 'Novembre 2025',
    link: '',
    image: '/img/Composition 1_1.mp4'
  },
  {
    id: 'site-auto-ecole',
    title: 'Site vitrine pour auto école',
    description: 'Lors d\'un stage d\'une durée de 4 semaine, j\'ai créé un site vitrine pour une auto-école.',
    context: 'Projet réalisé lors d\'un stage professionnel de 4 semaines dans une auto-école. L\'objectif était de créer un site vitrine moderne et complet pour améliorer la présence en ligne de l\'établissement. Le site devait présenter les services de l\'auto-école (formation au permis B, conduite accompagnée, stages de perfectionnement), les tarifs, les informations pratiques et permettre aux visiteurs de prendre contact facilement. Il fallait créer une interface attrayante qui inspire confiance aux futurs élèves tout en étant fonctionnelle et facile à naviguer. Ce projet m\'a permis de travailler sur un projet réel avec des contraintes client et des délais à respecter.',
    difficulties: 'Créer des animations et effets visuels subtils et professionnels pour rendre le site attractif tout en maintenant des performances optimales et un temps de chargement rapide. Optimiser les images pour le web (compression, formats modernes) sans perdre en qualité visuelle. Adapter le design pour être responsive sur tous les appareils (mobile, tablette, desktop) tout en conservant une expérience utilisateur cohérente. Gérer les contraintes de temps du stage tout en livrant un produit de qualité professionnelle. Comprendre les besoins réels du client et les traduire en fonctionnalités web pertinentes.',
    techs: ['Tailwindcss', 'Javascript', 'Html', 'Css'],
    date: 'Juillet 2025',
    link: 'https://mlaroute.fr',
    image: '/img/mlaroute.png'
  },
  {
    id: 'site-reservation-materiel',
    title: 'Site de réservation de matériel',
    description: 'Création d\'une plateforme de réservation de matériel dans le cadre d\'une SAE (Situation d\'Apprentissage et d\'Évaluation).',
    context: 'Projet réalisé dans le cadre de la SAE 203, qui consistait à développer une plateforme complète de réservation de matériel. Le système devait permettre aux utilisateurs de consulter le catalogue de matériel disponible, de réserver des équipements pour des périodes spécifiques, et de gérer leurs réservations. Le site nécessitait également un espace d\'administration pour gérer le catalogue, les stocks, les réservations en cours et les utilisateurs. L\'objectif était de créer un système fonctionnel et sécurisé qui gère efficacement les ressources partagées, avec une interface intuitive pour les utilisateurs finaux et des outils de gestion pour les administrateurs.',
    difficulties: 'Gérer les conflits de réservation lorsque plusieurs utilisateurs tentent de réserver le même matériel simultanément, en implémentant un système de vérification en temps réel et de gestion des disponibilités. Assurer la gestion des différents rôles utilisateurs (administrateur, utilisateur standard) avec des permissions et des accès différenciés, tout en maintenant la sécurité du système. Créer une interface utilisateur moderne et responsive avec Bootstrap tout en personnalisant le design pour répondre aux besoins spécifiques du projet. Gérer la base de données SQL pour stocker efficacement les informations sur le matériel, les réservations et les utilisateurs, en créant des relations entre les tables et en optimisant les requêtes. Implémenter un système de notifications pour informer les utilisateurs de l\'état de leurs réservations. Assurer la sécurité des données et prévenir les injections SQL et les failles XSS.',
    techs: ['HTML', 'CSS', 'Bootstrap', 'PHP', 'SQL'],
    date: 'Mai 2025',
    link: 'https://sae203reservation.alwaysdata.net/index.php',
    image: '/img/302.png'
  }
];

export const ABOUT_DATA = {
  tagline: 'Un développeur passionné par le web et la tech.',
  paragraph: 'Futur développeur full-stack en formation MMI, je conçois et développe des applications web complètes. J\'apprends React, Angular, PHP, TypeScript et Tailwind, et je reste curieux d\'explorer de nouvelles technologies.',
  cta: 'En savoir plus',
};

export const CONTACT_DATA = {
  title: "Contact",
  description: "Vous avez un projet en tête ? N'hésitez pas à me contacter pour discuter de vos idées.",
  form: {
    nameLabel: "Nom",
    emailLabel: "Email",
    subjectLabel: "Sujet",
    messageLabel: "Message",
    buttonText: "Envoyer le message"
  }
};
