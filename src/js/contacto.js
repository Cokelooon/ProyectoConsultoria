// Eventos de los input y textarea

const datos ={
    nombre: "",
    email: "",
    mensaje: "",
};

const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const mensaje = document.querySelector("#mensaje");
const formulario = document.querySelector(".formulario");

nombre.addEventListener("input", leerTexto);
email.addEventListener("input", leerTexto);
mensaje.addEventListener("input", leerTexto);

// El evento de Submit

formulario.addEventListener("submit", function(evento){
    evento.preventDefault();

    //Validando el formulario
    const {nombre,email,mensaje} = datos;

    if(nombre === "" || email === "" || mensaje === "" ){ // Para un string vacio, no llevan espacio las comillas
        mostrarError("Todos los campos son obligatorios")

        return; // Corta la ejecución del código 
    } else{
        enviado("Enviando formulario... Gracias, te conctaremos a la brevedad")
    }

    console.log("Enviando formulario...")
})


function leerTexto(evento){
    // console.log(evento.target.value); // Para leer los input

    datos[evento.target.id] = evento.target.value // Este es para reemplazar el texto en el objeto datos

    // console.log(datos);
};

// Muestra un error en pantalla

function mostrarError(mensaje){
    const error = document.createElement("P");
    error.textContent = mensaje;
    error.classList.add("error");

    formulario.appendChild(error);

    // Desaparezca la alerta después de 5 segundos
    setTimeout(() => {
        error.remove();
    },5000)
}

// Enviado correctamente

function enviado(mensaje){
    const correcto = document.createElement("P");
    correcto.textContent = mensaje;
    correcto.classList.add("correcto");

    formulario.appendChild(correcto);

    // Desaparezca la alerta después de 5 segundos
    setTimeout(() => {
        correcto.remove();
    },5000)
}