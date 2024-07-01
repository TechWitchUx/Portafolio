const btn = document.getElementById('button');
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtener los valores de los campos del formulario
    const name = document.querySelector('input[name="name"]').value.trim();
    const last = document.querySelector('input[name="last"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const message = document.querySelector('textarea[name="mensagge"]').value.trim();

    // Validar los campos obligatorios
    if (!name || !last || !email || !message) {
        alert('Por favor, completa todos los campos obligatorios.');
        return;
    }

    // Validar formato del correo electrónico
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return;
    }

    btn.value = 'Enviando...';

    const serviceID = 'service_j8rqitl';
    const templateID = 'template_ydk9car';

    // Enviar formulario usando EmailJS
    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn.value = 'ENVIAR MENSAJE';
            alert('Mensaje enviado correctamente!');
            // Aquí puedes agregar más acciones después de enviar el formulario
        })
        .catch((err) => {
            btn.value = 'ENVIAR MENSAJE';
            alert('Ocurrió un error al enviar el mensaje. Por favor, inténtalo nuevamente más tarde.');
            console.error('Error al enviar el formulario:', err);
        });
});
