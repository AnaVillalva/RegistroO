function soloTexto(texto) {
    return /^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]+$/.test(texto);
    }
  
    function soloNumeros(texto) {
    return /^\d+$/.test(texto);
    }
  
    function validarFecha(fecha) {
    const fechaIngresada = new Date(fecha);
    return fechaIngresada.getFullYear() > 2006;
    }
  
    function validarFormulario() {
    const apellido = document.getElementById("apellido").value;
    const nombre = document.getElementById("nombre").value;
    const dni = document.getElementById("dni").value;
    const fecha = document.getElementById("fechaNacimiento").value;
    const email = document.getElementById("email").value;
  
    if (!soloTexto(apellido)) return alert("Apellido inválido");
    if (!soloTexto(nombre)) return alert("Nombre inválido");
    if (!soloNumeros(dni) || dni.length !== 8) return alert("DNI inválido");
    if (!validarFecha(fecha)) return alert("Fecha inválida (debe ser > 2006)");
    if (!email.includes("@") || !email.includes(".")) return alert("Email inválido");
  
    alert("Formulario validado correctamente ✅");
    }
  
    function hacerPreguntas() {
    const r1 = prompt("¿Cuál es tu nacionalidad?");
    const r2 = prompt("¿Cuál es tu color favorito?");
    const r3 = prompt("¿Cómo se llama tu mascota?");
  
    const contenedor = document.getElementById("respuestas");
    contenedor.innerHTML = `
        <p><strong>Nacionalidad:</strong> ${r1}</p>
        <p><strong>Color favorito:</strong> ${r2}</p>
        <p><strong>Mascota:</strong> ${r3}</p>
    `;
    }
  