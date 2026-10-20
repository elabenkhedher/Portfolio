/**
 * Projects data collection for Elaa's Portfolio
 * Structured for data-driven rendering, category filtering, and detail modal.
 */

export const PROJECT_CATEGORIES = [
  { id: "all", label: "Tous" },
  { id: "web", label: "Web" },
  { id: "mobile", label: "Mobile" },
  { id: "desktop", label: "Desktop" },
];

export const projectsData = [
  {
    id: "plateforme-coranique",
    title: "Plateforme Pédagogique Coranique",
    subtitle: "Gestion multi-centres & suivi des séances",
    categoryBadge: "Projet Associatif",
    categories: ["web", "mobile"],
    description:
      "Solution web et mobile multi-centres pour une association : suivi des lectures et de la progression, planification d'agenda, gestion des présences et des séances, statistiques d'assiduité et messagerie intégrée.",
    longDescription:
      "Conçue pour moderniser la gestion quotidienne d'une association coranique multi-centres, cette solution full-stack combine une interface d'administration web performante et une application mobile réactive. Elle centralise la gestion des enseignants, des élèves et des classes, assure le suivi fin de l'avancement individuel dans les lectures et la mémorisation, et propose un agenda synchronisé avec calcul automatique des statistiques d'assiduité.",
    features: [
      "Architecture multi-centres avec gestion granulaire des rôles (Directeurs, Enseignants, Élèves)",
      "Suivi personnalisé de la progression des lectures et de la mémorisation",
      "Planification des séances, pointage des présences et alertes d'absences",
      "Tableau de bord avec indicateurs statistiques d'assiduité et progression globale",
      "Messagerie interne facilitant la communication entre encadrants et familles"
    ],
    stack: ["Django REST", "Python", "Next.js", "Flutter"],
    gitUrl: "https://github.com/elabenkhedher/Association_coranique-",
    previewUrl: null,
    image: "/images/projects/association-coranique.png",
    accentGradient: "from-emerald-950/60 via-ink to-emerald-900/30",
  },
  {
    id: "systeme-rh",
    title: "Système RH Intelligent",
    subtitle: "Analyse automatique de CV & gestion recrutement",
    categoryBadge: "Application Desktop JavaFX",
    categories: ["desktop"],
    description:
      "Application de bureau avec algorithme de scoring et d'analyse automatique de CV, détection des compétences clés, recommandation de profils, gestion complète des collaborateurs et tableau de bord décisionnel.",
    longDescription:
      "Logiciel desktop d'automatisation des processus de ressources humaines et de recrutement. Grâce à un moteur d'analyse sémantique et de scoring, l'application analyse les CV au format PDF, extrait les compétences requises et calcule un indice de compatibilité précis avec chaque offre d'emploi ouverte. Elle intègre également un module de gestion des dossiers employés et des indicateurs décisionnels sous JavaFX.",
    features: [
      "Extraction automatique de texte et parsing sémantique des CV en PDF",
      "Algorithme propriétaire de scoring de compatibilité compétences / offres",
      "Recommandation dynamique des meilleurs candidats pour chaque poste",
      "Gestion centralisée des employés, fiches de paie et congés",
      "Interface graphique JavaFX responsive avec visualisations graphiques"
    ],
    stack: ["Java", "JavaFX"],
    gitUrl: "https://github.com/elabenkhedher/Systeme_RH_Intelligent_JavaFX",
    previewUrl: null,
    image: "/images/projects/systeme-rh.png",
    accentGradient: "from-sky-950/60 via-ink to-indigo-900/30",
  },
  {
    id: "quizmaster",
    title: "QuizMaster",
    subtitle: "Plateforme interactive d'évaluation",
    categoryBadge: "Projet Web Dynamique",
    categories: ["web"],
    // TODO: Ela, feel free to refine the description and key features below to match any new updates to QuizMaster.
    description:
      "Plateforme web dynamique d'évaluation interactive proposant des séries de quiz par palier de difficulté (Débutant, Intermédiaire, Avancé) avec scoring en temps réel, progression par paliers et compte rendu détaillé.",
    longDescription:
      "QuizMaster est une application web interactive dédiée à l'apprentissage et à l'auto-évaluation technique (HTML, technologies web). Conçue avec une approche ergonomique et stimulante, elle guide l'utilisateur à travers des niveaux successifs, valide automatiquement les réponses avec feedback instantané, et conserve l'historique des résultats pour mesurer la progression.",
    features: [
      "Parcours d'évaluation progressif avec déblocage de niveaux (Débutant, Intermédiaire, Avancé)",
      "Moteur de quiz dynamique avec calcul de score instantané et affichage des corrections",
      "Espace apprenant personnalisé avec état des quiz (Disponible, Réussi, Verrouillé)",
      "Architecture dynamique PHP / MySQL avec session sécurisée et dashboard de suivi"
    ],
    stack: ["PHP"],
    gitUrl: "https://github.com/elabenkhedher/Quiz_Master",
    previewUrl: null,
    image: "/images/projects/quizmaster.png",
    accentGradient: "from-blue-950/60 via-ink to-cyan-900/30",
  },
  {
    id: "medicare-hub",
    title: "Medicare Hub",
    subtitle: "Gestion médicale multi-rôles & prescriptions",
    categoryBadge: "Plateforme Santé",
    categories: ["web"],
    description:
      "MediCare Hub is a healthcare management app built with Next.js, TypeScript, and Tailwind CSS, featuring role-based portals for Doctors, Secretaries, and Patients to manage appointments, medical records, and digital prescriptions.",
    longDescription:
      "Système d'information hospitalier et de gestion de cabinet médical moderne. L'application offre une séparation stricte des privilèges avec des espaces sur mesure pour le personnel soignant, l'accueil et les patients. Elle dématérialise les ordonnances, sécurise les dossiers médicaux et optimise la prise de rendez-vous en ligne.",
    features: [
      "Portails personnalisés avec contrôle d'accès basé sur les rôles (RBAC)",
      "Gestion centralisée des rendez-vous et agendas des praticiens",
      "Génération et consultation sécurisée des ordonnances numériques",
      "Interface ultra-rapide développée avec Next.js et Tailwind CSS"
    ],
    stack: ["Next.js", "Django", "SQL", "TypeScript"],
    gitUrl: "https://github.com/elabenkhedher/MediCare_frontend",
    previewUrl: null,
    image: "/images/projects/project-01.png",
    accentGradient: "from-teal-950/60 via-ink to-emerald-900/30",
  },
  {
    id: "kbadhapay",
    title: "KbadhaPay",
    subtitle: "Recouvrement fiscal & télépaiement citoyen",
    categoryBadge: "Fintech Municipale",
    categories: ["web"],
    description:
      "Digital municipal payment and revenue collection platform built with Symfony 7 to simplify taxpayer obligations and administrative tracking.",
    longDescription:
      "Plateforme moderne de gestion fiscale et de paiement en ligne pour les collectivités locales. KbadhaPay fluidifie les rentrées municipales, permet aux contribuables de consulter et régler leurs avis d'imposition en toute sécurité, et fournit aux agents territoriaux des outils d'audit et de conciliation comptable fiables.",
    features: [
      "Traitement sécurisé des transactions de paiement électronique municipal",
      "Module de notification et de relance automatique des contribuables",
      "Génération d'états financiers et de quittances numériques horodatées",
      "Développé avec la robustesse de Symfony 7 et une base SQL optimisée"
    ],
    stack: ["Symfony", "SQL", "Tailwind CSS"],
    gitUrl: "https://github.com/elabenkhedher/kbadhapay",
    previewUrl: null,
    image: "/images/projects/project-02.png",
    accentGradient: "from-purple-950/60 via-ink to-pink-900/30",
  },
  {
    id: "pomodoro-timer",
    title: "Pomodoro Timer",
    subtitle: "Gestionnaire de focus & sessions de travail",
    categoryBadge: "Productivité & Deep Work",
    categories: ["web"],
    description:
      "A visual Pomodoro timer and task manager built for deep work with audio notifications and customizable focus intervals.",
    longDescription:
      "Application de productivité épurée intégrant la méthode Pomodoro pour les développeurs et créatifs. Elle combine des minuteries d'intervalles personnalisables, des alertes discrètes et une to-do list connectée pour structurer les sessions de travail profond sans interruption.",
    features: [
      "Minuteur personnalisable (sessions de travail, pauses courtes et longues)",
      "Gestionnaire de tâches intégré avec priorisation et suivi d'achèvement",
      "Design minimaliste non intrusif pour maximiser la concentration",
      "Mode offline et sauvegarde des préférences dans le navigateur"
    ],
    stack: ["Next.js", "Tailwind CSS"],
    gitUrl: "https://github.com/elabenkhedher/timer/",
    previewUrl: null,
    image: "/images/projects/project-03.png",
    accentGradient: "from-rose-950/60 via-ink to-orange-900/30",
  },
  {
    id: "covoiset",
    title: "CovoISET",
    subtitle: "Covoiturage interurbain pour étudiants",
    categoryBadge: "Mobilité Universitaire",
    categories: ["web", "mobile"],
    description:
      "CovoISET is a Tunisian carpooling platform connecting drivers and passengers to share inter-city rides, book seats, and track routes in real time.",
    longDescription:
      "Solution collaborative de covoiturage conçue pour la communauté universitaire de l'ISET. Elle met en relation les étudiants et enseignants motorisés avec les usagers réguliers sur les trajets inter-villes, réduit l'empreinte carbone et allège les coûts de transport quotidien.",
    features: [
      "Publication de trajets, réservation de places et calcul de frais partagés",
      "Suivi des itinéraires et arrêts intermédiaires en temps réel",
      "Système d'évaluation et de profils certifiés pour garantir la sécurité",
      "Architecture Symfony associée à une base de données flexible MongoDB"
    ],
    stack: ["Symfony", "MongoDB", "Tailwind CSS"],
    gitUrl: "https://github.com/elabenkhedher/covo",
    previewUrl: null,
    image: "/images/projects/project-04.png",
    accentGradient: "from-amber-950/60 via-ink to-yellow-900/30",
  },
];
