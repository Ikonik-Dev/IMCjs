const BMIData = [
  { name: "maigreur", color: "midnightblue", range: [0, 18.5] },
  { name: "bonne santé", color: "green", range: [18.5, 25] },
  { name: "surpoids", color: "lightcoral", range: [25, 30] },
  { name: "obésité modérée", color: "orange", range: [30, 35] },
  { name: "obésité sévère", color: "crimson", range: [35, 40] },
  { name: "obésité morbide", color: "red", range: 40 },
];

// IMC = poids en kg / taille en m

// TODO PRENDRE LE FORMULAIRE ET LES IMPUTS (Fonction appelant des methodes javascript)

// todo I) L'OBJET
// selection de l'objet
const form = document.querySelector("form");

// todo II) LA FONCTION
// l'element "form" a une methode associé qui est addEventListener
// (quand on veut etre à l'ecoute d'un evenment comme un click sur un bouton)

// todo III) LES PARAMETRES
// il a deux arguments, le premier est le nom de l'evenement que j'écoute sous forme de chaine de caractere, ici "submit"
// le second est la methode callback -Rappel-, ici handleForm

// todo VI) lA MECANIQUE
// lorsque l'evenement "submit" va etre declencher, la methode handleForm va etre envoyé
// pour etre precis ici, handleForm -la fonction callback-  va etre appeler par la methode addEventlister

form.addEventListener("submit", handleForm);

// todo V) LA FONCTION DE RAPPEL, LE CALLBACK
// création de la fonction callback handleForm
// elle prend l'objet d'evenement, ici appelé e (ce nom est arbitraire)
// on utilise une methode existence de javascript preventDefault (induit le comportement souhaiter par default de l'envoie "submit" du formulaire "form" !!MECANIQUE IMPORTANTE!!
function handleForm(e) {
  e.preventDefault();

  // todo on creer le NOM (!) de la fonction de calcul
  caculateBMI();
}

// todo VI) ON CREER LA FONCTION DE CALCUL
// on recupere les imputs (données entrées par l'utilisateur) par la creation de constante Const qui stockerons ces données des objets html input
const inputs = document.querySelectorAll("input");

function caculateBMI() {
  // on integre les inputs dans la fonction de calcul

  // la premiere des inputs etant la taille 'height', son type, et sa valeur 'value'
  // a noter qu'un node (noeud) se rapproche d un tableau sans toutes les methodes etjavascript incluse et commence à l'indice 0
  const height = inputs[0].value;

  // la seconde etant la masse weight, son tipye et sa valeur
  const weight = inputs[1].value;

  // TODO CALCUL DE L'IMC ET AFFICHAGE DES RESULTATS

  // todo validation des données
  // si les données sont false à height ou sont false à weight ou sont false à height <= 0 ou sont false à weight <= 0 alors envoyé un message d'erreur
  if (!height || !weight || height <= 0 || weight <= 0) {
    // console.log("Veulliez entrer une valeur valide");
    handleError();
    return;
  }
//   evaluation en puissance 2
  const BMI = (weight / Math.pow(height / 100, 2 )).toFixed(1)
  console.log(BMI);

  showResult(BMI)
}

//
const displayBMI = document.querySelector(".bmi-value");
const result = document.querySelector(".result");
//  On reneigne handleError
function handleError() {
  displayBMI.textContent = "woops";
  displayBMI.style.color = "inherit";
  result.textContent = "Remplissez correctement les inputs"
}


function showResult(BMI) {
    const rank = BMIData.find(data => {
        if (BMI >= data.range[0] && BMI < data.range[1])
            return data;
        else if (typeof data.range === "number" && BMI >= data.range)
        return data;
    })
    displayBMI.textContent = BMI;
    displayBMI.style.color = `${rank.color}`
    result.textContent = `${rank.name}`
}