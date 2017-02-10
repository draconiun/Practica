function agregar_numero(){
	var contenedor = document.getElementById("numeros");
	cantidad_numero = cantidad_divs();

	//HACER EL DIV CONTENEDOR
	var nuevo_numero = document.createElement("div");
	nuevo_numero.innerHTML = document.getElementById("numero").value;
	nuevo_numero.setAttribute("id","div"+(cantidad_numero+1));
	contenedor.appendChild(nuevo_numero);
	document.getElementById("numero").value = "";
}

function cantidad_divs(){
	var contenedor = document.getElementById("numeros");
	cantidad_numero = contenedor.getElementsByTagName('div').length;
	return cantidad_numero;
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
	cantidad_numero = cantidad_divs();
	lista_numero = [];
	lista_ordenada = [];
	abc="";
	for(i=0 ; i < cantidad_numero ; i++)
	{
		var numero = contenedor.getElementsByTagName("div")[i].innerHTML;
		//var numero = document.getElementById("div"+(i+1)).innerHTML;
		lista_numero.push(numero);
	}
	lista_ordenada = algoritmoBurbuja(lista_numero);
	for(i=0 ; i < lista_ordenada.length ; i++)
	{
		abc+=lista_ordenada[i]+" ";
	}
	alert(abc);
	var elemento =  document.getElementById("result");
	elemento.innerHTML = abc;
}

function limpiar(){
	var contenedor = document.getElementById("numeros");
	contenedor.innerHTML="";
	var elemento =  document.getElementById("result");
	elemento.innerHTML = "";
}

function asd(){
	alert("Soy varonazo");
	alert("Ya puessss");
	var abbbbb="";
	ax = aabb.length;
	ax = ax +1;
	ax = ax +2;
}
