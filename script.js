function getRandomLower (){
    //return String.fromCharCode(67)---Aski--random()=zufallszahlim Bereich von 0-1
    return String.fromCharCode(Math.floor(Math.random()*26) +97) // Methode floor() erwartet als Parameter eine Zahl. Liefert die nächstniedrigere Ganzzahl dieser Zahl zurück (Abrundung)

}
console.log(getRandomLower())

function getRandomUpper (){
    return String.fromCharCode(Math.floor(Math.random()*26) +65)
    
}
console.log(getRandomUpper())

function getRandomNummer (){
    return String.fromCharCode(Math.floor(Math.random()*10) + 48);
    
}
console.log(getRandomNummer())
function getRandomSymbol (){
    const symbols = '!@#$%^&*(){}[]=<>/,.'  
    const i=Math.floor(Math.random()*symbols.length)
    return i  
}