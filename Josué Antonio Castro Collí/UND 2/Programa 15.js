/*
****************************************
* Source: 			Programa 15.js 
* Description:    	Enviar mensajes con html al WhatsApp 
* Date: 			06/Marzo/2020
* Author: 			Josue Antonio Castro Colli
****************************************
*/
function enviar() {
	var mensaje = documet.getElementById('inputMensaje').value
	var numero = documet.getElementById('inputNum').value

	var href = "https://api.whatsapp.com/send?phone=52"+numero"&text="+mensaje"";

	alert("Mensaje Enviado");

}