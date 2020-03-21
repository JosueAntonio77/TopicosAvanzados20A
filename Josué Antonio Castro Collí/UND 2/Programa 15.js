/*****************************************************************************
# Program Name: Program 15.js
# Authors: Josue Antonio Castro Collí. 
# Description: Enviar mensajes con html al WhatsApp 
# Date: 06/Marzo/2020
#
#Funciones:
# crear ( )               //G
******************************************************************************
*****************************************************************************/
function enviar() {
	var mensaje = documet.getElementById('inputMensaje');
	var numero = documet.getElementById('inputNum');
	Enviado =  "https://api.whatsapp.com/send?phone=52"+numero+"&text="+mensaje;

	alert("Mensaje Enviado");

}