//Hacer un ejercicio que nos pida 10 números y luego que sume esos valores.
var num;
var suma=0;
for(var i=1;i<=10;i++){
	num=parseInt(prompt("Ingrese numero", " "));
	suma = suma+num;
}
alert("la suma es : " + suma);