// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Lista donde se almacenarán los amigos
let amigos = [];
// Función que se encarga de mostrar los amigos en la lista
function mostrarAmigos() {
    // Se obtiene el elemento ul del html
    const listaHTML = document.getElementById('listaAmigos');
    // Se borra el contenido del ul
    listaHTML.innerHTML = "";
    // Se recorre la lista de amigos
    amigos.forEach((amigo) => {
        // Se crea un nuevo elemento li
        const li = document.createElement('li');
        // Se le asigna el texto del amigo al li
        li.textContent = amigo;
        // Se agrega el li al ul
        listaHTML.appendChild(li);
    });
}

// Función que se encarga de agregar un amigo a la lista
function agregarAmigo() {
    // Se obtiene el valor del input amigo
    const amigo = document.getElementById('amigo').value;
    // Se agrega el amigo a la lista
    amigos.push(amigo);
    // Se limpia el input
    document.getElementById('amigo').value = "";
    // Se muestra la lista de amigos
    mostrarAmigos();
}

// Función que se encarga de sortear un amigo
function sortearAmigo() {
    // Se obtiene un número aleatorio entre 0 y la cantidad de amigos
    const numeroAleatorio = Math.floor(Math.random() * amigos.length);
    // Se obtiene el amigo que le corresponde al número aleatorio
    const amigoSorteado = amigos[numeroAleatorio];
    // Se obtiene el elemento ul del html
    const listaHTML = document.getElementById('resultado');
    // Se borra el contenido del ul
    listaHTML.innerHTML = "";
    // Se crea un nuevo elemento li
    const li = document.createElement('li');
    // Se le asigna el texto del amigo sorteado al li
    li.textContent = amigoSorteado;
    // Se agrega el li al ul
    listaHTML.appendChild(li);

    // Eliminar lista de amigos
    amigos = [];
    // Se muestra la lista de amigos vacia
    mostrarAmigos();

}

