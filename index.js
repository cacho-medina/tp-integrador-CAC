const formData = {
    nombre: "",
    apellido: "",
    email: "",
    cantidad: 0,
    categoria: "",
};
function setForm(obj) {
    formData;
}

//funcion que guarda los datos de inputs en el objeto formData
function handleSubmit(event) {
    setForm({ ...formData, [event.target.id]: event.target.value });
}
