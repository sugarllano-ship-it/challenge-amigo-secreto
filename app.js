// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para añadir un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    if (nombre === '') {
        alert('Por favor, escribe un nombre.');
        return;
    }

    amigos.push(nombre);
    actualizarListaAmigos();
    input.value = '';
    input.focus();
}

// Función para actualizar la lista de amigos en el DOM
function actualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear el amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Debe haber al menos dos amigos para realizar el sorteo.');
        return;
    }

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    // Crear una copia de la lista de amigos para el sorteo
    const amigosCopia = [...amigos];
    const sorteados = [];

    amigos.forEach((amigo) => {
        let indice;
        do {
            indice = Math.floor(Math.random() * amigosCopia.length);
        } while (amigo === amigosCopia[indice]); // Evitar que alguien se sortee a sí mismo

        sorteados.push(`${amigo} → ${amigosCopia[indice]}`);
        amigosCopia.splice(indice, 1);
    });

    sorteados.forEach((resultadoSorteo) => {
        const li = document.createElement('li');
        li.textContent = resultadoSorteo;
        resultado.appendChild(li);
    });
}

