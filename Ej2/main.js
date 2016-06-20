//Añadir elementos a un array con push(Ciclo for)
var arreglo=[1,2,3,4];
for(var i=0;i<arreglo.length;i++){
	vacio=prompt("Ingrese un numero:", " ");
	arreglo.push(vacio);
	alert(arreglo);
};