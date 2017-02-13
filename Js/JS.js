var nv=1;

function agregar_numero(){
	var contenedor = document.getElementById("numeros");
	contenedor.innerHTML = contenedor.innerHTML   + document.getElementById("numero").value +" ";
	document.getElementById("numero").value = "";
}

function cantidad_numeros(){
	contenedor = document.getElementById("numeros");
	string_numero = contenedor.innerHTML;
	lista_numero = string_numero.split(" ");
	cantidad_numero = lista_numero.length;
	return cantidad_numero;
}

function listar_numeros(){
	contenedor = document.getElementById("numeros");
	string_numero = contenedor.innerHTML;
	lista_numero = string_numero.split(" ");
	return lista_numero;
}

function algoritmoBurbuja(lista_numero){

	for(i = 0 ; i < (lista_numero.length-1) ; i++)
	{
	    for(j = 0 ; j < (lista_numero.length-1-i) ; j++)
	    {
	        if( parseInt(lista_numero[j]) < parseInt(lista_numero[j+1]) )
	        {

	             aux=lista_numero[j];
	             lista_numero[j]=lista_numero[j+1];
	             lista_numero[j+1]=aux;
	 
	        }
	    }
	}
 
    return lista_numero;
}

function ordenar_numeros(){
	var contenedor = document.getElementById("numeros");
	cantidad_numero = cantidad_numeros();
	lista_numero = listar_numeros();
	lista_ordenada = [];
	respuesta="";
	lista_ordenada = algoritmoBurbuja(lista_numero);
	for(i=0 ; i < cantidad_numero ; i++)
	{
		if(lista_ordenada[i]!="") respuesta+=lista_ordenada[i]+" ";
	}
	var elemento =  document.getElementById("numeros");
	elemento.innerHTML = respuesta;
}

function limpiar(){
	var contenedor = document.getElementById("numeros");
	contenedor.innerHTML="";
	var elemento =  document.getElementById("result");
	elemento.innerHTML = "";
}

function aparecer_menu(){
	if(nv%2==1)
	{
		document.getElementById("menu").style.display="block";
	}
	else
	{
		document.getElementById("menu").style.display="none";
	}
	nv++;
}

function ajustarMenuDespegable(){
	var ancho = (window.innerWidth);
	if(ancho>=800)
	{
		document.getElementById("menu").style.display="block";
		nv=1;
	}
	else if(nv%2==1)
	{
		document.getElementById("menu").style.display="none";
	}
}

setInterval('ajustarMenuDespegable()',0);

