//variable
var a
var b 
var aString 
var bString
var operation
var total
//onclicknumber
function onclickNumber(number) {
    if(aString==undefined){
        aString=number
    }else{
        bString=number
    }
    afficheur()
}
//affichage
function afficheur(number) {
    var afficheur = document.getElementById("afficheur")
    afficheur.value = ''
    if(a != undefined && b != undefined && operation != undefined){
        afficheur.value=number
    }else{
        if(aString !=undefined){
            afficheur.value=aString
        }
        if(operation != undefined){
            afficheur.value = operation
        }
        if(bString != undefined){
            afficheur.value =bString
        }
    }
}
//operation
function operaTion(operationparam) {
    if(operation == undefined){
        operation=operationparam
    }
    afficheur()
}
//egal
function egal() {
    a = parseFloat(aString)
    b= parseFloat(bString)
    total = calculer(a , b , operation)
    afficheur(total)
}
//calculer
function calculer(a , b , operation) {
    var _total = undefined
    switch(operation){
        case("+"):
        _total = a + b
        break;
        case("-") :
        _total = a-b
        break;
        default:
        break;
    }
    return _total
    
}
//supprimer
function supprimer() {
    a = undefined
    b = undefined
    aString = undefined
    bString = undefined
    total = undefined
    operation = undefined
    var afficheur = document.getElementById("afficheur")
    afficheur.value=''
    
}