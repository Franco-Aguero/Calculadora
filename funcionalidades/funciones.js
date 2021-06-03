var operandoa, operandob, operacion;
function init(){
   //Variables
   var resultado = document.getElementById("resultado");
   var reset = document.getElementById("reset");
   var suma = document.getElementById("suma");
   var divider = document.getElementById("divider");
   var resta = document.getElementById("resta");
   var multiplicacion = document.getElementById("multiplicacion");
   var igual = document.getElementById("igual");
   var zero = document.getElementById("zero");
   var one = document.getElementById("one");
   var two = document.getElementById("two");
   var three = document.getElementById("three");
   var four = document.getElementById("four");
   var five = document.getElementById("five");
   var six = document.getElementById("six");
   var seven = document.getElementById("seven");
   var eight = document.getElementById("eight");
   var nine = document.getElementById("nine");
   //evento
   one.onclick = function(a){
      resultado.textContent = resultado.textContent + "1"
   }
   two.onclick = function(a){
      resultado.textContent = resultado.textContent + "2"
   }
   three.onclick = function(a){
      resultado.textContent = resultado.textContent + "3"
   }
   four.onclick = function(a){
      resultado.textContent = resultado.textContent + "4"
   }
   five.onclick = function(a){
      resultado.textContent = resultado.textContent + "5"
   }
   six.onclick = function(a){
      resultado.textContent = resultado.textContent + "6"
   }
   seven.onclick = function(a){
      resultado.textContent = resultado.textContent + "7"
   }
   eight.onclick = function(a){
      resultado.textContent = resultado.textContent + "8"
   }
   nine.onclick = function(a){
      resultado.textContent = resultado.textContent + "9"
   }
   zero.onclick = function(a){
      resultado.textContent = resultado.textContent + "0"
   }
   reset.onclick = function(a){
      resetear();
   }
   suma.onclick = function(a){
      operandoa = resultado.textContent;
      operacion = "+";
      limpiar();
   }
   resta.onclick = function(a){
      operandoa = resultado.textContent;
      operacion = "-";
      limpiar();
   }
   divider.onclick = function(a){
      operandoa = resultado.textContent;
      operacion = "/";
      limpiar();
   }
   multiplicacion.onclick = function(a){
      operandoa = resultado.textContent;
      operacion = "*";
      limpiar();
   }
   igual.onclick = function(a){
      operandob = resultado.textContent;
      resolver();
   }
function limpiar(){
   resultado.textContent = "";
}
function resetear(){
   resultado.textContent = "";
   operandoa = 0;
   operandob = 0;
   operacion = "";
}
function resolver(){
   res = 0;
   switch(operacion){
      case "+":
         res = parseFloat(operandoa) + parseFloat(operandob);
         break;
      case "-":
         res = parseFloat(operandoa) - parseFloat(operandob);
         break;  
      case "/":
         res = parseFloat(operandoa) / parseFloat(operandob);
         break;
      case "*":
         res = parseFloat(operandoa) * parseFloat(operandob);
         break;
   }
   resetear();
   resultado.textContent = res;
}
   
}
/* var btnZero = document.getElementById("zero");
var btnOne = document.getElementById("one");
var btnTwo = document.getElementById("two");
var btnThree = document.getElementById("three");
   var btnFour = document.getElementById("four");
   var btnFive = document.getElementById("five");
   var btnSix = document.getElementById("six");
   var btnSeven = document.getElementById("seven");
   var btnEight = document.getElementById("eight");
var btnNine = document.getElementById("nine");
var btnResta = document.getElementById("resta");
var btnSuma = document.getElementById("suma");


btnResultado.addEventListener('click', function(event){
    console.log(0)
    alert(0)
 })
btnZero.addEventListener('click', function(event){
   console.log(0)
   alert(0)
})
btnOne.addEventListener('click', function(event){
    console.log(1)
    alert(1)
 })
 btnTwo.addEventListener('click', function(event){
    console.log(2)
    alert(2)
 })
 btnThree.addEventListener('click', function(event){
    console.log(3)
    alert(3)
 })
 btnFour.addEventListener('click', function(event){
    console.log(4)
    alert(4)
 })
 btnFive.addEventListener('click', function(event){
    console.log(5)
    alert(5)
 })
 btnSix.addEventListener('click', function(event){
    console.log(6)
    alert(6)
 })
 btnSeven.addEventListener('click', function(event){
    console.log(7)
    alert(7)
 })
 btnEight.addEventListener('click', function(event){
    console.log(8)
    alert(8)
 })
 btnNine.addEventListener('click', function(event){
    console.log(9)
    alert(9)
 }) */