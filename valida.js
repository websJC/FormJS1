function avisoReset(){
 var reset=confirm("Si confirmas se borrarán todos los datos");
 if(reset){
 	location.reload(true);
 	return true;
 }else{
 	return false;
 }
};


function valida_envia(){
	var acepto		=v_checked();
	var usuario		=user();
	var telefono	=tel();
	var fecha_dia	=dia();
	var fecha_mes	=mes();
	var fecha_anyo	=anyo();
	var correu		=mail();
	var dni 		=c_dni();


	if(!acepto||!usuario||!telefono||!fecha_dia||!fecha_mes||!fecha_anyo||!correu || !dni){
		alert("Error en el formulario");
		return false;
	}else{
		return true;
	};
};

function v_checked() {
var acepto=document.contacto.acepto.checked;
if(!acepto){
	alert("Ha de aceptar las condiciones para enviar el formulario");
		return false;
		}else{
		return true;
		}
};

function user(){
var usuario=document.contacto.usuario.value;
var pnombre=/^[A-ZÀÁÈÉÍÒÓÚ]{1}[a-zA-ZÀ-ÿ\u00f1\u00d1\s]{2,20}$/;
var resul=pnombre.test(usuario);
if(!resul){
	return false;
	}else{
		return true;
	}
};
function tel(){
	var tel=document.contacto.telefono.value;
	var ptel=/^[9]{1}\d{8}$/;
	var resul=ptel.test(tel);
	if(!resul){
	return false;
	}else{
		return true;
	}
};
function dia(){
	var dia=document.contacto.fecha_dia.value;
	var pdia=/^[0-9]{1,2}$/;
	var resul=pdia.test(dia);
	if(!resul||dia<1||dia>31){
	return false;
	}else{
		return true;
	}

};
function mes(){
	var mes=document.contacto.fecha_mes.value;
	var pmes=/^\d{1,2}$/;
	var resul=pmes.test(mes);
	if(!resul||mes<1|mes>12){
	return false;
	}else{
		return true;
	}

};
function anyo(){
	var anyo=document.contacto.fecha_anyo.value;
	var panyo=/^\d{4}$/;
	var resul=panyo.test(anyo);
	if(!resul||anyo<1918||anyo>2000){
	return false;
	}else{
		return true;
	}

};
function mail(){
	var correu=document.contacto.correu.value;
	var pmail=/^[a-z0-9_-]+(\.[a-z0-9-_]+)*@[a-z0-9-_]+(\.[a-z0-9-_]+)*(\.[a-z]{2,})$/;
	var resul=pmail.test(correu);
	if(!resul){
	return false;
	}else{
		return true;
	}

};
function c_dni(){
	var dni=document.contacto.dni.value;
	dni=dni.toUpperCase();
	var numero,letra,let1;
	var pdni=/^[XYZ]?\d{5,8}[A-Z]{1}$/;
	var resul=pdni.test(dni);
	if(resul){
		numero=dni.substr(0,dni.length-1);
		numero=numero.replace('X',0);
		numero=numero.replace('Y',1);
		numero=numero.replace('Z',2);
		let1=dni.substr(dni.length-1,1);
		letra="TRWAGMYFPDXBNJZSQVHLCKE";
		numero=numero%23;
		letra=letra.substring(numero,numero+1);
		if(letra!==let1){
			return false;
		}else{
			return true;
		}
	}else{
		return false;
	}
};
function pasaValor(name){
	var valor=document.contacto[name].value;
	var funcion;

	switch(name){
		case 'acepto':
		funcion=v_checked();
		if(funcion){
			document.getElementById('info').innerHTML=valor+". Correcto";
			info.style.color="#068B3E";
		}else{
			document.getElementById('info').innerHTML=valor+". Incorrecto. No válido";
			info.style.color="#FF0000";
		}
		break;
		case 'usuario':
		funcion=user();
		if(funcion){
			document.getElementById('info').innerHTML=valor+". Usuario Correcto";
			info.style.color="#068B3E";
		}else{
			document.getElementById('info').innerHTML=valor+". Incorrecto. El nombre de usuario debería tener entre 3 y 20 carácteres y empezar con mayúsculas";
			info.style.color="#FF0000";
			
		}
		break;
		case 'telefono':
		funcion=tel();
		if(funcion){
			document.getElementById('info').innerHTML=valor+". Telefono Correcto";
			info.style.color="#068B3E";
		}else{
			document.getElementById('info').innerHTML=valor+". Incorrecto. El teléfono ha de comenzar 9 y tener 9 dígitos";
			info.style.color="#FF0000";
			
		}
		break;
		case 'fecha_dia':
		funcion=dia();
		if(funcion){
			document.getElementById('info').innerHTML=valor+". Correcto";
			info.style.color="#068B3E";
		}else{
			document.getElementById('info').innerHTML=valor+". el día de mes solo puede ser entre 1 y 31";
			info.style.color="#FF0000";
			
		}
		break;
		case 'fecha_mes':
		funcion=mes();
		if(funcion){
			document.getElementById('info').innerHTML=valor+". Correcto";
			info.style.color="#068B3E";
		}else{
			document.getElementById('info').innerHTML=valor+". Incorrecto. El mes solo puede ser entre 1 y 12";
			info.style.color="#FF0000";
			
		}
		break;
		case 'fecha_anyo':
		funcion=anyo();
		if(funcion){
			document.getElementById('info').innerHTML=valor+". Correcto";
			info.style.color="#068B3E";
		}else{
			document.getElementById('info').innerHTML=valor+". Incorrecto. El año solo puede ser entre 1918 y 2000";
			info.style.color="#FF0000";
			
		}
		break;
		case 'correu':
		funcion=mail();
		if(funcion){
			document.getElementById('info').innerHTML=valor+". Correcto";
			info.style.color="#068B3E";
		}else{
			document.getElementById('info').innerHTML=valor+". Incorrecto. El correo electrónico ha de contener (@), texto y (.)seguido de una extensión.";
			info.style.color="#FF0000";
			
		}
		break;
		case 'dni':
		funcion=c_dni();
		if(funcion){
			document.getElementById('info').innerHTML=valor+".Correcto";
			
			info.style.color="#068B3E";
		}else{
			document.getElementById('info').innerHTML=valor+". Incorrecto. Escribe un DNI o NIE Correcto";
			info.style.color="#FF0000";
			
		}
		break;
	}
};
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
};
function guardarDatos(){
	var usuario= document.contacto.usuario.value;
	var tel= document.contacto.telefono.value;
	var dia= document.contacto.fecha_dia.value;
	var mes= document.contacto.fecha_mes.value;
	var anyo= document.contacto.fecha_anyo.value;
	var email= document.contacto.correu.value;
	var dni= document.contacto.dni.value;

	 setCookie("Usuario", usuario, 1);
	 setCookie("Teléfono", tel, 1);
	 setCookie("Día", dia, 1);
	 setCookie("Mes", mes, 1);
	 setCookie("Año", anyo, 1);
	 setCookie("Correo", email, 1);
	 setCookie("Dni", dni, 1);
};

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};
function obtenerDatos(){
	var mUsuario=getCookie("Usuario");
	var mTel=getCookie("Teléfono");
	var mDia=getCookie("Día");
	var mMes=getCookie("Mes");
	var mAnyo=getCookie("Año");
	var mMail=getCookie("Correo");
	var mDni=getCookie("Dni");

	document.contacto.usuario.value=mUsuario;
	document.contacto.telefono.value=mTel;
	document.contacto.fecha_dia.value=mDia;
	document.contacto.fecha_mes.value=mMes;
	document.contacto.fecha_anyo.value=mAnyo;
	document.contacto.correu.value=mMail;
	document.contacto.dni.value=mDni;
};
