//8. Realiza un script que cuente el número de vocales que tiene un texto.
var texto = prompt("Ingrese un texto")
var caracter
var count = 0
for (let i = 0; i < texto.length; i++)
    {
        caracter = texto.charAt(i)
        caracter = caracter.toLowerCase()
        if(caracter == "a" || caracter == "e" || caracter == "i" || caracter == "o" || caracter == "u" )
        {
            count++
        }
    }
    alert("Hay " + count + " vocales en el texto" )