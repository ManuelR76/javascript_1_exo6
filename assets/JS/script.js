//création de la fonction après le click sur Valider
submit.addEventListener("click", function () {
//appelle l'id du premier nombre et du deuxième nombre dans le formulaire
var firstNumber = document.getElementById('firstNumber').value;
var secondNumber = document.getElementById('secondNumber').value;
var regexDecimal = /^[0-9]+$/;//définit le regex

if (regexDecimal.test(firstNumber) && regexDecimal.test(secondNumber)){ //création des conditions par rapport au regex
      alert(result = firstNumber % secondNumber); //affichage du résultat
    } else {
    alert("Indiquez un nombre correct");
  }
})
