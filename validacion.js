document.querySelector(".formcontato__form").addEventListener("submit", function(event) {
    const nombre = document.querySelector("input[name='nombre']").value;
    const email = document.querySelector("input[name='email']").value;
    const asunto = document.querySelector("input[name='asunto']").value;
    const mensaje = document.querySelector("textarea[name='mensaje']").value;

    if (!nombre || !email || !asunto || !mensaje) {
        event.preventDefault();
        alert("Todos los campos son obligatorios");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        event.preventDefault();
        alert("Por favor ingrese un correo electrónico válido");
    }
});
