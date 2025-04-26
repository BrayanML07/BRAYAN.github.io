function FCambioColor(){

    let vTexto1 = document.getElementById("ejmDOM1");
    vTexto1.textContent= "Texto cambiado por Funcion FCambioColor";
    vTexto1.style.color="blue";
    vTexto1.insertAdjacentHTML("beforeEnd",
    "<br> Este Texto es adicional <br>");
    vTexto1.style.color="green";
}