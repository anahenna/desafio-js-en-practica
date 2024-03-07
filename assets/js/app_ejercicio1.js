const form = document.querySelector("#formulario")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const regex = /^[a-zA-Z\s]+$/;

    const nombreInput = document.getElementById('nombre');
    if (!regex.test(nombreInput.value)) {
        document.querySelector('.errorNombre').textContent = 'El nombre es requerido.'
    }
    const asuntoInput = document.getElementById('asunto');
    if (!regex.test(asuntoInput.value)) {
        document.querySelector('.errorAsunto').textContent = 'El asunto es requerido.'
    }
    const mensajeInput = document.getElementById('mensaje');
    if (!regex.test(mensajeInput.value)) {
        document.querySelector('.errorMensaje').textContent = 'El mensaje es requerido.'
    } else {
        const resultadoDiv = document.querySelector('.resultado');
        resultadoDiv.textContent = 'Mensaje enviado con exito.';
        resultadoDiv.style.color = 'green';

    }
})