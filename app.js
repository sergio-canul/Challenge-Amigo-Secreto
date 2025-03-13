// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];


function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombreAmigo = input.value.trim();

    if(nombreAmigo==''){
        alert("Por favor, inserte un nombre.")
        return;
    } else if (amigos.includes(nombreAmigo)){
        alert("Este nombre ya esta agregado");
        return;

    } else {
        amigos.push(nombreAmigo); 
    }
    actualizarListaAmigos();
    input.value="";
}



function actualizarListaAmigos(nombreAmigo){
    const listaAmigos = document.getElementById('listaAmigos');

    listaAmigos.innerHTML = "";

    for(const nombreAmigo of amigos){
    const li = document.createElement('li');
    li.textContent = nombreAmigo;
    listaAmigos.appendChild(li);
    console.log(amigos);
    }
}

function sortearAmigo(){
    if(amigos.length>0){
        const nombreAleatorio = Math.floor(Math.random()*amigos.length);

        const amigoSorteado = amigos[nombreAleatorio];

        const resultado = document.getElementById('resultado');
        resultado.innerHTML = `<li> ¡El amigo sorteado es: ${amigoSorteado}!</li>`;
    } else {
        alert("No hay amgigos para sortear");
    }
}