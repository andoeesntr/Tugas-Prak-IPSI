const btn = document.getElementById('button');

document.getElementById('contact-form').addEventListener('submit', function(event)   {
    event.preventDefault();

    btn.value = 'Sending...';

const serviceID = 'service_6whygqk';
const templateID = 'template_wowcd3o';

emailjs.sendForm('service_6whygqk', 'template_wowcd3o', '#myForm').then(
    (response) => {
      console.log('SUCCESS!', response.status, response.text);
    },
    (error) => {
      console.log('FAILED...', error);
    },
  );
})

