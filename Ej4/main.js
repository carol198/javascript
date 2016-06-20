/*
1.-Determinar cuál de los dos elementos de texto es mayor
2.-Utilizando exclusivamente los dos valores booleanos del array, 
determinar los operadores necesarios para obtener un resultado true y otro resultado false
3.-Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos elementos numéricos
*/
var valores = [true, 5, false, "hola", "adios", 2];

/*
if(valores[3].length > valores[4].length){
	alert("el valor de: " + valores[3] + " es mayor");
}else{
	alert("el valor de: " + valores[4] + " es mayor");
}
*/
/*if(valores[0] == "true" && valores[2]=="false"){
	alert("el valor es: " + valores[0]);
}else if(valores[0]=="true" || valores[2]=="false") {
	alert("el valor es: " + valores[2]);
}*/
switch (valores[1]== 5 && valores[5]==2 ){
	case "suma":
		var suma=valores[1]+ valores[5];
		alert("la suma es: " + suma);
	break;
	case "resta":
		var resta=valores[1]-valores[5];
		alert("la resta es: " + resta);
	break;
	case "multiplicacion":
		var multi= valores[1]* valores[5];
		alert("la multiplicacion es: " + multi);
	break;
	case "division":
		var divi= valores[1]/ valores[5];
		alert("la division es: " + divi);
	break;
	default:
}

