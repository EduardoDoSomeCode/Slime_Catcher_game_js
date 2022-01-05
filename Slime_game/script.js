var puntos=0;
var segundos=8;


function restart(){
  location.reload();
}


function inicia(){
  setTimeout(fin, segundos * 1000);
}




function posicion(){

  var enemigo = document.getElementById("enemigo");
  enemigo.style.position="absolute";
  x=Math.floor((Math.random()*900)+1);
  y=Math.floor((Math.random()*900)+1);
  enemigo.style.left=x + "px";
  enemigo.style.top=y + "px";


 puntos+=10;
}



function posicision(){

  var enemigo = document.getElementById("enemigo_2");
  enemigo.style.position="absolute";
  x=Math.floor((Math.random()*1200)+1);
  y=Math.floor((Math.random()*1200)+1);
  enemigo.style.left=x + "px";
  enemigo.style.top=y + "px";


 puntos+=2;


}

function fin(){

 alert("Game over- Puntos: " + puntos);
}


var Countdown = setInterval(function(){
--segundos;
document.getElementById("contadorTexto").innerHTML = segundos;
if(segundos <= 0){
segundos = 3;
}
}, 1000);

