/*
****************************************
* Source: Programa1.js 
* Description: Funciones iniciales en js
* Encender un motor / Apagar un motor 
* Date: 7/Fec/2020
* Author: Josue Antonio Castro Colli
****************************************
*/

var calificacion1 = prompt("Escribe una calificación númerica");
var calificacion2 = prompt("Escribe una calificación númerica");

if (isNaN (calificacion1) || isNaN(calificacion2) ){
	alert ("No es númerico ");
} else {
	var suma = parseInt(calificacion1) + parseInt(calificacion2);
	alert(suma);
	
}
