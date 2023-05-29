var modal = document.getElementById("logarModal"); 
var btn = document.getElementById("botao"); 
var span = document.getElementsByClassName("close1")[0];


btn.onclick = function(){
    modal.style.display = "block";
}

span.onclick = function(){
    modal.style.display = "none";
}

window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = "none";
    }
}



var modal_C = document.getElementById("cadastroModal"); 
var btn_C = document.getElementById("botao2"); 
var span_C = document.getElementsByClassName("close2")[0];


btn_C.onclick = function(){
    modal_C.style.display = "block";
}

span_C.onclick = function(){
    modal_C.style.display = "none";
}

window.onclick = function(event){
    if(event.target == modal_C){
        modal_C.style.display = "none";
    }
}
