

// Ejemplos de como crear modulos localmente. 

var multiplicar = function(num1, num2){
     return num1 * num2;
   }

exports.multiplicar = multiplicar;

exports.multiplicar = function (num1, num2){
    return num1 + num2
}

