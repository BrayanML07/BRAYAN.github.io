function FCambioColor(){

    let vTexto1 = document.getElementById("ejmDOM1");
    vTexto1.textContent= "Texto cambiado por Funcion FCambioColor";
    vTexto1.style.color="blue";
    vTexto1.insertAdjacentHTML("beforeEnd",
    "<br> Este Texto es adicional <br>");
    vTexto1.style.color="green";
}

function FCambioClase1() {
    let vTexto2 = document.getElementsByClassName("classDOM1");
    vTexto2[1].innerHTML = "Elemento [1] del arreglo de clase classDOM1";
    console.log("Tamaño del array=", vTexto2.length);
    // se coloca el índice 1 por ser el 2do elemento de la clase classDOM1 de la pag web
}

function FCambioTag1() {
    let vTexto3 = document.getElementsByTagName("h2");
    vTexto3[6].innerHTML = "Elemento h2 cambiado por TagDOM1";
    vTexto3[13].innerHTML = "Elemento ultimo h2 cambiado por TagDom1";
    vTexto3[13].style.color = "blue";
    //indice 10 es el 11vo elemento h2
    console.log("Tamaño del array=",vTexto3.length);
    vTexto3[13].insertAdjacentHTML("beforeEnd", "<br>tamaño de h2 =" + vTexto3.length);
    let totalh2=vTexto3.length;
    console.log("valor de totalh2=",totalh2);
    console.log("tipo de variable totalh2=", typeof totalh2);
}

window.vTexto1="";

function FAgregarTextoPermanente()
{
    let textoAdicional ="\n Texto adicional para concatenar";
    vTexto1 = vTexto1 + textoAdicional;
    console.log("tipo de variable de vTexto1 =",typeof vTexto1);
    console.log(vTexto1);
}

function FcrearH1()
{
   var elemento =document.getElementById("idCrearH1");
   var nuevoH1 =document.createElement("h1");
   var texto = document.createTextNode("Texto colocado en linea");
   nuevoH1.appendChild(texto);
   elemento.appendChild(nuevoH1);
}






function FCapturarNombre(){

    const vTexto1 = document.getElementById("nombre");
    const vTexto2 = document.querySelectorAll("input.datosPersonales");
    const vTexto3 = document.getElementById("clave");

   // usar input para clases relacioandas a cajas de texto, etc
    vTexto1.style.color="red";
    
    var valor1 =vTexto1.value; // value obtiene el contenido de la caja de texto nombre
    var valor2 =""; //tipo string 
    vTexto3.value=valor1;
    document.getElementById("observacion").value = valor1;//textarea ya captura el nombre
  
    //foreach recorre todo el contenido del array de la clase datosPersonales
    vTexto2.forEach(input => {
        valor2 =valor2 +  `${input.name}: ${input.value}  \n;`  // alt+96 
      //para comillas tipotexto permiten colocar variables del form y convertirlas a texto mediante $
      });

    document.getElementById('observacion').value = valor2;
    console.log('El valor del nombre es:', valor1);
}

function FUsoFor1()
{
  const vTextoClass = document.getElementsByClassName("classFOR1");
  var vTextoTotal="";
  // como length=4 --> ira desde 0 hasta 3
  for(let i=0 ; i< vTextoClass.length ; i++ )
  {
    vTextoClass[i].style.border ="2px solid red" ;
    vTextoTotal=vTextoTotal + vTextoClass[i].innerText+'-';

  } // fin de for
  var nuevoH1 =document.createElement("h1");
  var texto = document.createTextNode(vTextoTotal);
  nuevoH1.appendChild(texto);
  vTextoClass[3].appendChild(nuevoH1);
  
}  // fin de function

function FEliminarConcat()
{
  const vTextoClass = document.getElementsByClassName("classFOR1");
  let rpta =prompt("Estas seguro de eliminar el texto concatenado?(S/N)",'');
  if (rpta=="S" || rpta=="s")  //  doble || significa o
    { vTextoClass[3].remove();  // eliminar la class de posicion [3]
      alert("CONCATENCION ELMINADA");
    }  
  else
    { if(rpta=="N" || rpta=="n")
      { alert("NO SE elimnará");
      }
      else
      { alert("OPCION INCORRECTA-INgresa nuevamente");
      }
    }
  //removeChild funciona cuando un nodo(class, id, etx) esta dentro de otro
}

