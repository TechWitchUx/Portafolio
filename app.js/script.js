const btn = document.getElementById('button');

    document.getElementById('form')
     .addEventListener('submit', function(event) {
       event.preventDefault();
    
       btn.value = 'Enviando...';
    
       const serviceID = 'service_j8rqitl';
       const templateID = 'template_ydk9car';
    
       emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
          btn.value = 'ENVIAR MENSAJE';
          alert('Mensaje enviado correctamente!');
        }, (err) => {
          btn.value = 'ENVIAR MENSAJE';
          alert(JSON.stringify(err));
        });
    });