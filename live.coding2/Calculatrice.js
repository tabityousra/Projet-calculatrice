//variable
var a
var b
var number1
var number2
var operation
var total
//
function onclickNumber(number) {
    if(number1 == undefined){
        number1 = number
    }else{
        number2= number
    }
    afficheur()
}
//afficher
function afficheur(number) {
    var afficheur = document.getElementById("afficheur")
    afficheur.value = ""
    if(a != undefined && b != undefined && operation != undefined){
        afficheur.value = number
    }else{
        if(number1 != undefined){
            afficheur.value = number1
        }
        if(operation != undefined){
            afficheur.value = operation
        }
        if(number2 != undefined){
            afficheur.value = number2
        }
    }
    
}
//operation
function operaTion(operationparams) {
    if(operation == undefined){
        operation = operationparams
    }
    afficheur()
}
//egale
function egale() {
    a = parseFloat(number1)
    b = parseFloat(number2)
    total = calculer(a , b , operation)
    afficheur(total)
  }
//calculer
function calculer(a , b , operation) {
    total == undefined
    switch(operation){
        case'+' :
        total = a+b
        break;
        case'-' :
        total = a-b
        break;
        default:
            break;
        
    }
    return total
}
//supprimer
function supprimer() {
    a = undefined
    b = undefined
    number1 = undefined
    number2 = undefined
    operation = undefined
    afficheur = document.getElementById("afficheur")
    afficheur.value = ""
    
}