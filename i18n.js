// French source text and English translations. Media paths are never translated.
const translations = {
  "Aller au contenu": "Skip to content",
  "Navigation principale": "Main navigation",
  "Projets": "Projects",
  "À propos": "About",
  "Télécharger mon CV ↓": "Download my CV ↓",
  "Concevoir.": "Design.",
  "Programmer.": "Program.",
  "Mettre en mouvement.": "Bring to life.",
  "Étudiant en Master de Robotique à l’EPFL, j’explore le lien entre mécanique, électronique embarquée et logiciel à travers mes projets.": "As a Robotics MSc student at EPFL, I explore the connection between mechanical design, embedded electronics and software through hands-on projects.",
  "Voir mon GitHub (nouvel onglet)": "View my GitHub (opens in a new tab)",
  "Voir mon GitHub": "View my GitHub",
  "Découvrir mes projets ↘": "Explore my projects ↘",
  "Du concept au prototype": "From concept to prototype",
  "Des robots à pattes.": "Robots that walk.",
  "Des systèmes qui perçoivent.": "Systems that perceive.",
  "Du code qui agit.": "Code that acts.",
  "Robotique / Mécatronique / Prototypage": "Robotics / Mechatronics / Prototyping",
  "Une sélection de projets": "Selected projects",
  "Conception, perception et contrôle": "Design, perception and control",
  "01 / Robotique · GC Valobot": "01 / Robotics · GC Valobot",
  "Un quadrupède pour explorer autrement.": "A quadruped built to explore.",
  "Concevoir un robot à quatre pattes pour suivre une ligne et parcourir un labyrinthe : un projet qui réunit mécanique, perception et commande embarquée. Les pattes en parallélogramme maintiennent leurs extrémités perpendiculaires à la base, tandis que la cinématique permet de commander translations et rotations.": "Designing a four-legged robot to follow a line and navigate a maze: a project combining mechanics, perception and embedded control. Parallelogram leg mechanisms keep the feet perpendicular to the base, while the kinematic model enables translation and rotation commands.",
  "Cinématique": "Kinematics",
  "pattes articulées": "articulated legs",
  "servomoteurs": "servomotors",
  "masse totale": "total mass",
  "Dans les coulisses du projet": "Behind the project",
  "Conception mécanique et étude des mouvements avec CATIA V5 et GeoGebra.": "Mechanical design and motion analysis using CATIA V5 and GeoGebra.",
  "Détection de ligne avec une caméra OV7670, à 160 × 120 pixels et 3 images par seconde.": "Line detection with an OV7670 camera at 160 × 120 pixels and 3 frames per second.",
  "Trois capteurs VL53L0X pour repérer les murs du labyrinthe.": "Three VL53L0X sensors to detect the maze walls.",
  "Répartition des tâches sur les deux cœurs du Pico et synchronisation des échanges I2C.": "Tasks distributed across the Pico’s two cores, with synchronized I2C communication.",
  "Commande des servomoteurs via un PCA9685 ; correction en boucle fermée prévue pour affiner le déplacement.": "Servo control through a PCA9685, with closed-loop correction planned to refine motion.",
  "Galerie du quadrupède": "Quadruped gallery",
  "Lire la piste avec un LiDAR.": "Reading the track with LiDAR.",
  "Au sein de l’EPFL Racing Team, j’ai travaillé sur la perception et l’intégration d’un LiDAR Ouster OS1 rev 7 pour les épreuves Driverless de Formula Student. La chaîne ROS couvre l’acquisition et le traitement des nuages de points, la suppression du sol et le regroupement par DBSCAN pour repérer les cônes. Le travail inclut aussi l’intégration de l’IMU du LiDAR et une interface de test de ses mesures.": "With EPFL Racing Team, I worked on perception and integration of an Ouster OS1 rev 7 LiDAR for Formula Student Driverless events. The ROS pipeline covers point cloud acquisition and processing, ground removal and DBSCAN clustering to identify cones. The work also includes integrating the LiDAR’s IMU and creating an interface to test its measurements.",
  "Nuages de points": "Point clouds",
  "Galerie du projet LiDAR": "LiDAR project gallery",
  "03 / Automatique": "03 / Control systems",
  "Table PID": "PID table",
  "Conception d’un kit pédagogique pour un atelier ROBOVALY à l’EPFL : une table à un axe ramène automatiquement une bille vers une position de référence. Le projet associe modélisation et impression 3D, conception du circuit imprimé, intégration de capteurs de distance ToF, réglage du PID et interface graphique.": "Designing an educational kit for a ROBOVALY workshop at EPFL: a single-axis table automatically returns a ball to a reference position. The project combines 3D modelling and printing, PCB design, ToF distance sensor integration, PID tuning and a graphical user interface.",
  "Contrôle PID": "PID control",
  "Capteurs ToF": "ToF sensors",
  "Électronique": "Electronics",
  "Galerie de la table PID": "PID table gallery",
  "04 / Automatique · Manipulateur parallèle": "04 / Control systems · Parallel manipulator",
  "Table PID 2D · Plateforme 3-RRS": "2D PID table · 3-RRS platform",
  "Maintenir une bille en équilibre sur une plateforme parallèle 3-RRS grâce à un asservissement PID en deux dimensions. Un écran tactile résistif à quatre fils mesure la position de la bille en X et Y. Le correcteur calcule les ajustements de tangage et de roulis, puis la cinématique inverse traduit cette orientation en angles pour les trois articulations commandées par servomoteurs.": "Balancing a ball on a 3-RRS parallel platform using two-dimensional PID control. A four-wire resistive touchscreen measures the ball’s X and Y position. The controller calculates pitch and roll corrections, then inverse kinematics converts this orientation into angles for the three servo-driven joints.",
  "PID en boucle fermée": "Closed-loop PID",
  "Cinématique inverse": "Inverse kinematics",
  "Écran résistif": "Resistive touchscreen",
  "Galerie : Table PID 2D · Plateforme 3-RRS": "Gallery: 2D PID table · 3-RRS platform",
  "05 / Robotique": "05 / Robotics",
  "E-puck & bras robotique": "E-puck & robotic arm",
  "Programmation du robot E-puck, conception et programmation d’un bras robotique : une exploration de la cinématique et du logiciel appliqués à la robotique.": "Programming the E-puck robot and designing and programming a robotic arm: exploring kinematics and software applied to robotics.",
  "Programmation": "Programming",
  "Galerie E-puck et bras robotique": "E-puck and robotic arm gallery",
  "06 / Robotique · Projet en cours": "06 / Robotics · Work in progress",
  "Thymio · Ramasser et trier": "Thymio · Collecting and sorting",
  "Le but de ce projet est de développer un robot ramasseur et trieur autour du Thymio. Le travail porte sur l’intégration et la programmation des fonctions de collecte et de tri. Le projet est encore en cours ; les vidéos présentent les étapes de développement.": "This project aims to build a collecting and sorting robot based on Thymio. The work focuses on integrating and programming its collection and sorting functions. Development is ongoing; the videos show progress along the way.",
  "Ramassage et tri": "Collecting and sorting",
  "En cours": "Work in progress",
  "Galerie : Thymio · Ramasser et trier": "Gallery: Thymio · Collecting and sorting",
  "07 / Projet en équipe": "07 / Team project",
  "Conception d’un robot inspiré de BB-8 dans le cadre du cours « Make Intelligent Things » à l’EPFL. Du prototypage mécanique à la commande : modélisation et impression 3D, conception électrique, intégration mécanique, interface de pilotage et réglage PID. Le développement en équipe s’appuie sur Git et des réunions Scrum.": "Designing a BB-8-inspired robot for the “Make Intelligent Things” course at EPFL. From mechanical prototyping to control: 3D modelling and printing, electrical design, mechanical integration, a control interface and PID tuning. Team development uses Git and Scrum meetings.",
  "Travail en équipe": "Teamwork",
  "Galerie de BB-M8": "BB-M8 gallery",
  "08 / Vision & commande": "08 / Vision & control",
  "Vision Bot · Suivre un point rouge": "Vision Bot · Tracking a red dot",
  "Un robot à deux degrés de liberté qui suit un point rouge à l’aide d’une caméra. Le projet relie la détection visuelle de la cible à la commande des deux axes pour orienter le robot vers le point suivi.": "A two-degree-of-freedom robot that tracks a red dot using a camera. The project connects visual target detection to two-axis control, orienting the robot towards the tracked point.",
  "Vision par caméra": "Camera vision",
  "2 degrés de liberté": "2 degrees of freedom",
  "Suivi de cible": "Target tracking",
  "Galerie : Vision Bot · Suivre un point rouge": "Gallery: Vision Bot · Tracking a red dot",
  "09 / Robotique · Prototypage": "09 / Robotics · Prototyping",
  "Hexapode · Premiers pas": "Hexapod · First steps",
  "Un robot à six pattes, développé avant le quadrupède. Les photos des versions V1 et V2 et les démonstrations retracent les étapes de ce prototype de robot marcheur.": "A six-legged robot developed before the quadruped. Photos of versions V1 and V2 and demonstration videos document the stages of this walking robot prototype.",
  "Hexapode": "Hexapod",
  "Prototypage": "Prototyping",
  "Galerie : Hexapode · Premiers pas": "Gallery: Hexapod · First steps",
  "10 / Programmation": "10 / Programming",
  "Du code au jeu": "From code to games",
  "Des petits projets inspirés de Tetris et de Geometry Dash pour explorer la programmation et la création d’interfaces graphiques avec GTKmm 4.": "Small projects inspired by Tetris and Geometry Dash to explore programming and graphical user interface development with GTKmm 4.",
  "Interface graphique": "Graphical interface",
  "Jeux": "Games",
  "Galerie des projets de programmation": "Programming projects gallery",
  "Autres explorations": "Other explorations",
  "Sur mon établi": "On my workbench",
  "Une horloge artisanale complète mes explorations en conception et en prototypage.": "A handmade clock complements my explorations in design and prototyping.",
  "Faire dialoguer le matériel et le logiciel.": "Connecting hardware and software.",
  "Titulaire d’un Bachelor en microtechnique de l’EPFL, je poursuis un Master en robotique. Mon expérience réunit prototypage rapide, conception mécanique, électronique embarquée et intégration de capteurs. Je développe des systèmes qui relient le matériel, la perception et la commande, avec notamment Python, C/C++, MATLAB et ROS / ROS 2.": "With a Bachelor’s degree in Microengineering from EPFL, I am pursuing a Master’s in Robotics. My experience combines rapid prototyping, mechanical design, embedded electronics and sensor integration. I develop systems that connect hardware, perception and control, using Python, C/C++, MATLAB and ROS / ROS 2.",
  "Concevoir": "Design",
  "CAO, mécanismes, prototypage.": "CAD, mechanisms, prototyping.",
  "Intégrer": "Integrate",
  "Électronique, capteurs, systèmes embarqués.": "Electronics, sensors, embedded systems.",
  "Percevoir": "Perceive",
  "Vision, LiDAR, traitement de données.": "Vision, LiDAR, data processing.",
  "Commander": "Control",
  "Cinématique, asservissement, programmation.": "Kinematics, control systems, programming.",
  "Retour en haut ↑": "Back to top ↑",
  "Activez JavaScript pour consulter les galeries photo et vidéo.": "Enable JavaScript to view the photo and video galleries and switch languages.",
  "Média précédent": "Previous media",
  "Média suivant": "Next media",
  "Choisir un média": "Choose media",
  "carrousel": "carousel",
  "Média indisponible": "Media unavailable",
  "Vidéo à venir": "Video coming soon",
  "Image à venir": "Image coming soon",
  "Galerie à venir": "Gallery coming soon",
  "La galerie sera bientôt disponible.": "The gallery will be available soon.",
  "Démonstration principale": "Main demonstration",
  "Démonstration secondaire": "Additional demonstration",
  "LiDAR · Visualisation du nuage de points": "LiDAR · Point cloud visualization",
  "LiDAR · Démonstration 1": "LiDAR · Demonstration 1",
  "Démonstration de l’asservissement": "Control system demonstration",
  "Prototype de la table PID": "PID table prototype",
  "Photo du prototype de la table PID": "Photo of the PID table prototype",
  "Démonstration de BB-M8": "BB-M8 demonstration",
  "Interface du jeu Tetris": "Tetris game interface",
  "Capture du jeu Tetris": "Tetris game screenshot",
  "Jeu inspiré de Geometry Dash": "Geometry Dash-inspired game",
  "Vidéo 1": "Video 1",
  "Quadrupède · Prototypage 1": "Quadruped · Prototype 1",
  "Vidéo 2": "Video 2",
  "Quadrupède · Prototypage 2": "Quadruped · Prototype 2",
  "Vidéo 3": "Video 3",
  "Quadrupède · Prototypage 3": "Quadruped · Prototype 3",
  "Vidéo 4": "Video 4",
  "Quadrupède · Prototypage 4": "Quadruped · Prototype 4",
  "V1 - vue 1": "V1 - view 1",
  "Hexapod · V1 - vue 1": "Hexapod · V1 - view 1",
  "V1 - vue 2": "V1 - view 2",
  "Hexapod · V1 - vue 2": "Hexapod · V1 - view 2",
  "V2 - vue 1": "V2 - view 1",
  "Hexapod · V2 - vue 1": "Hexapod · V2 - view 1",
  "V2 - vue 2": "V2 - view 2",
  "Hexapod · V2 - vue 2": "Hexapod · V2 - view 2",
  "Image 1": "Photo 1",
  "Image 2": "Photo 2",
  "Image 3": "Photo 3",
  "BB-M8 · Image 1": "BB-M8 · Photo 1",
  "BB-M8 · Image 2": "BB-M8 · Photo 2",
  "BB-M8 · Image 3": "BB-M8 · Photo 3",
  "Portfolio de Jérôme Essola Elanga, étudiant en Master de Robotique à l’EPFL : robotique, perception et mécatronique.": "Portfolio of Jérôme Essola Elanga, Robotics MSc student at EPFL: robotics, perception and mechatronics."
};
const frenchByEnglish = new Map(Object.entries(translations).map(([fr,en]) => [en,fr]));
let language = 'en';
try { if (localStorage.getItem('portfolio-language') === 'fr') language = 'fr'; } catch (_) {}
function translated(value) {
  const trimmed = value.trim();
  // Gallery selection labels contain a translated media description.
  const prefix = trimmed.startsWith('Afficher : ') ? 'Afficher : ' : trimmed.startsWith('Show: ') ? 'Show: ' : '';
  if (prefix) return (language === 'fr' ? 'Afficher : ' : 'Show: ') + translated(trimmed.slice(prefix.length));
  const fr = frenchByEnglish.get(trimmed) || trimmed;
  const result = language === 'fr' ? fr : (translations[fr] || trimmed);
  return value.replace(trimmed, result);
}
function translateTree(root) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) { return node.parentElement?.closest('script,style') ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT; }
  });
  let node;
  while ((node = walker.nextNode())) {
    if (node.nodeValue.trim()) node.nodeValue = translated(node.nodeValue);
  }
  const elements = root.querySelectorAll('[aria-label], [aria-roledescription], [alt], meta[name="description"]');
  for (const el of elements) {
    for (const attr of ['aria-label','aria-roledescription','alt']) {
      if (el.hasAttribute(attr)) el.setAttribute(attr, translated(el.getAttribute(attr)));
    }
    if (el.matches('meta[name="description"]')) el.content = translated(el.content);
  }
}
function setLanguage(next) {
  language = next === 'fr' ? 'fr' : 'en';
  document.documentElement.lang = language;
  translateTree(document);
  document.querySelectorAll('[data-language]').forEach(button => {
    button.setAttribute('aria-pressed', String(button.dataset.language === language));
  });
  try { localStorage.setItem('portfolio-language', language); } catch (_) {}
}
document.querySelectorAll('[data-language]').forEach(button => {
  button.addEventListener('click', () => setLanguage(button.dataset.language));
});
setLanguage(language);
