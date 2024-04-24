var count = 68;
var count2=221;
var count3=33;

function hideButton(element){
    element.remove();
}

function aumentarLike(){
    var elementoAumentar=document.querySelector("#cantidadLikes");
    console.log(count);
   count++;
   elementoAumentar.innerHTML = count;

}
function aumentarLike2(){
    var elementoAumentar2=document.querySelector("#aumentarLike2");
    count2++;
    elementoAumentar2.innerHTML = count2;

}
function aumentarLike3(){
    var elementoAumentar3=document.querySelector("#aumentarLike3");
    count3++;
    elementoAumentar3.innerHTML = count3;
}
function mostrarMensaje(){
    let inputBuscar=document.getElementById("buscar").value;
    let mensaje= "You are searching for "+"\""+ inputBuscar+"\"";
    return mensaje;
}