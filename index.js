const BD = [];

//elementos
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
const cantidad = document.getElementById("cantidad");
const categoria = document.getElementById("categoria");

function crearTicket() {
    BD.push({
        nombre: nombre.value,
        apellido: apellido.value,
        email: email.value,
        cantidad: cantidad.value,
        categoria: categoria.value,
        importe: calcularPrecio(),
    });
    mostrarPrecio();
    //alert("TICKET GENERADO");
    Swal.fire({
        icon: "success",
        title: "Ticket generado",
        showConfirmButton: false,
        timer: 1500,
    });
}
function borrarTicket() {
    BD.pop();
    let formulario = document.getElementById("form");
    formulario.reset();
    precio.innerText = "Total a pagar: $";
    //alert("TICKET BORRADO");
    Swal.fire({
        icon: "error",
        title: "Ticket Borrado",
        showConfirmButton: false,
        timer: 1500,
    });
}
const calcularPrecio = () => {
    const importe = cantidad.value * 200;
    let descuento;
    let valorFinal;
    if (categoria.value === "Estudiante") {
        descuento = importe * 0.8;
        valorFinal = importe - descuento;
        return valorFinal;
    } else if (categoria.value === "Trainee") {
        descuento = importe * 0.5;
        valorFinal = importe - descuento;
        return valorFinal;
    } else if (categoria.value === "Junior") {
        descuento = importe * 0.15;
        valorFinal = importe - descuento;
        return valorFinal;
    }
};

const mostrarPrecio = () => {
    const precio = document.getElementById("precio");
    precio.innerText += calcularPrecio();
};
