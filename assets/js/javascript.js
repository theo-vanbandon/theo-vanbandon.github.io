function creerParagraphe(conteneur, langages) {
  for (var j = 0; j < langages.length; j++) {
    var langageParagraphe = document.createElement("p");

    // Ajouter une balise img uniquement pour les langages spécifiques
    var imgLangage = document.createElement("img");
    imgLangage.src = "assets/images/logo/" + langages[j] + ".png";
    // Ajouter la classe à l'image pour le style CSS
    imgLangage.classList.add("icon");
    langageParagraphe.appendChild(imgLangage);

    var langageTexte = document.createTextNode(langages[j]);

    // Ajouter le texte de l'élément au paragraphe
    langageParagraphe.appendChild(langageTexte);

    // Ajouter le paragraphe au conteneur
    conteneur.appendChild(langageParagraphe);
  }
}

function afficherCode() {
  // Créer un tableau avec les éléments
  var elements = [
    "Web",
    "Langages de programmation",
    "Base de données",
    "Framework",
  ];

  // Sélectionner l'élément où vous souhaitez afficher les blocs dans le HTML
  var conteneur = document.getElementById("programming-languages-container");

  // Effacer le contenu actuel du conteneur
  conteneur.innerHTML = "";

  // Créer un paragraphe pour chaque élément du tableau
  for (var i = 0; i < elements.length; i++) {
    // Créer un paragraphe pour le texte de l'élément du tableau
    var paragraphe = document.createElement("p");

    // Ajouter la classe "CompePara" au paragraphe si l'élément est "Web", "Langages de programmation", "Base de données", ou "Framework"
    if (
      elements[i] === "Web" ||
      elements[i] === "Langages de programmation" ||
      elements[i] === "Base de données" ||
      elements[i] === "Framework"
    ) {
      paragraphe.classList.add("CompePara");
    }

    // Ajouter le texte de l'élément au paragraphe
    var texte = document.createTextNode(elements[i]);
    paragraphe.appendChild(texte);

    // Ajouter le paragraphe au conteneur
    conteneur.appendChild(paragraphe);

    // Si l'élément est "Web", ajouter les langages en dessous
    if (elements[i] === "Web") {
      var langages = ["HTML", "CSS", "JavaScript", "PHP"];

      creerParagraphe(conteneur, langages);
    }

    // Si l'élément est "Langages de programmation", ajouter les langages en dessous
    if (elements[i] === "Langages de programmation") {
      var langages = ["C++", "Python", "Java"];

      creerParagraphe(conteneur, langages);
    }

    // Si l'élément est "Base de données", ajouter les langages en dessous
    if (elements[i] === "Base de données") {
      var langages = ["phpMyAdmin", "MySQL", "PostgreSQL", "SQLite"];

      creerParagraphe(conteneur, langages);
    }

    // Si l'élément est "Framework", ajouter les langages en dessous
    if (elements[i] === "Framework") {
      var langages = ["Laravel (PHP)", "CodeIgniter (PHP)", "Flask (Python)"];

      creerParagraphe(conteneur, langages);
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  afficherCode(); // Appeler la fonction lors du chargement de la page
});

function afficherOutils() {
  // Créer un tableau avec les éléments
  var elements = ["IDE", "Gestion de projet", "Logiciels"];

  // Sélectionner l'élément où vous souhaitez afficher les blocs dans le HTML
  var conteneur = document.getElementById("programming-languages-container");

  // Effacer le contenu actuel du conteneur
  conteneur.innerHTML = "";

  // Créer un paragraphe pour chaque élément du tableau
  for (var i = 0; i < elements.length; i++) {
    // Créer un paragraphe pour le texte de l'élément du tableau
    var paragraphe = document.createElement("p");

    // Ajouter la classe "CompePara" au paragraphe si l'élément est "Web", "Langages de programmation", "Base de données", ou "Framework"
    if (
      elements[i] === "IDE" ||
      elements[i] === "Gestion de projet" ||
      elements[i] === "Logiciels"
    ) {
      paragraphe.classList.add("CompePara");
    }

    // Ajouter le texte de l'élément au paragraphe
    var texte = document.createTextNode(elements[i]);
    paragraphe.appendChild(texte);

    // Ajouter le paragraphe au conteneur
    conteneur.appendChild(paragraphe);

    // Si l'élément est "IDE", ajouter les langages en dessous
    if (elements[i] === "IDE") {
      var langages = [
        "Visual Studio Code",
        "IntelliJ IDEA",
        "PhpStorm",
        "PyCharm",
      ];

      creerParagraphe(conteneur, langages);
    }

    // Si l'élément est "Gestion de projet", ajouter les langages en dessous
    if (elements[i] === "Gestion de projet") {
      var langages = ["Git - GitLab", "Agile", "Markdown"];

      creerParagraphe(conteneur, langages);
    }

    // Si l'élément est "Logiciels", ajouter les langages en dessous
    if (elements[i] === "Logiciels") {
      var langages = [
        "Visual Paradigm",
        "Oracle VM VirtualBox",
        "MindView",
        "Rufus",
        "Sony Vegas Pro",
        "OBS Studio",
      ];

      creerParagraphe(conteneur, langages);
    }
  }
}

function afficherAutre() {
  // Créer un tableau avec les éléments
  var elements = [
    "Systèmes d'exploitation",
    "Langues",
    "Systèmes embarqués",
    "Schéma Arduino / ESP",
    "Protocoles",
  ];

  // Sélectionner l'élément où vous souhaitez afficher les blocs dans le HTML
  var conteneur = document.getElementById("programming-languages-container");

  // Effacer le contenu actuel du conteneur
  conteneur.innerHTML = "";

  // Créer un paragraphe pour chaque élément du tableau
  for (var i = 0; i < elements.length; i++) {
    // Créer un paragraphe pour le texte de l'élément du tableau
    var paragraphe = document.createElement("p");

    // Ajouter la classe "CompePara" au paragraphe si l'élément est "Web", "Langages de programmation", "Base de données", ou "Framework"
    if (
      elements[i] === "Systèmes d'exploitation" ||
      elements[i] === "Langues" ||
      elements[i] === "Systèmes embarqués" ||
      elements[i] === "Schéma Arduino / ESP" ||
      elements[i] === "Protocoles"
    ) {
      paragraphe.classList.add("CompePara");
    }

    // Ajouter le texte de l'élément au paragraphe
    var texte = document.createTextNode(elements[i]);
    paragraphe.appendChild(texte);

    // Ajouter le paragraphe au conteneur
    conteneur.appendChild(paragraphe);

    // Si l'élément est "Systèmes d'exploitation", ajouter les langages en dessous
    if (elements[i] === "Systèmes d'exploitation") {
      var langages = ["Windows", "Linux"];

      creerParagraphe(conteneur, langages);
    }

    // Si l'élément est "Langues", ajouter les langages en dessous
    if (elements[i] === "Langues") {
      var langages = ["Français", "Anglais", "Espagnol"];

      creerParagraphe(conteneur, langages);
    }

    // Si l'élément est "Systèmes embarqués", ajouter les langages en dessous
    if (elements[i] === "Systèmes embarqués") {
      var langages = ["ESP32", "Arduino"];

      creerParagraphe(conteneur, langages);
    }

    // Si l'élément est "Schéma Arduino / ESP", ajouter les langages en dessous
    if (elements[i] === "Schéma Arduino / ESP") {
      var langages = ["Tinkercad", "Fritzing"];

      creerParagraphe(conteneur, langages);
    }

    // Si l'élément est "Protocoles", ajouter les langages en dessous
    if (elements[i] === "Protocoles") {
      var langages = ["HTTP", "MQTT", "TCP", "UDP"];

      creerParagraphe(conteneur, langages);
    }
  }
}
