function ponerPiedra (){
    document.getElementById("p1").innerHTML="piedra";
    var a, b;
    tirada ();
}

function ponerPapel (){
    document.getElementById("p1").innerHTML="papel";
    tirada ();
}

function ponerTijeras (){
    document.getElementById("p1").innerHTML="tijeras";
    tirada ();
}

function tirada () {
    var a, b, c;
    a=Math.random();
    if (a < 0.33) {
        b = "piedra";
      } else if (a > 0.66) {
        b = "papel";
      } else {
        b = "tijeras";
      }
    document.getElementById("p2").innerHTML=b;
    console.log (b);
    c = document.getElementById("p1").textContent;
    if ( (c == "piedra" && b == "tijeras") || ( c == "papel" && b == "piedra" ) || ( c == "tijeras" && b == "papel" ) ) {
        document.getElementById("gana-pierde").innerHTML="Has Ganado!"
    }

    else if ( (c == "piedra" && b == "papel") || ( c == "papel" && b == "tijeras" ) || ( c == "tijeras" && b == "piedra" )  ) {
        document.getElementById("gana-pierde").innerHTML="Has Perdido!"
    }

    else {
        document.getElementById("gana-pierde").innerHTML="empate!"
    }
}
