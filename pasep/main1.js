const btn = document.getElementById('booking-button');

document.getElementById('booking-form').addEventListener('submit', function(event)   {
    event.preventDefault();

    btn.value = 'Sending...';


    const serviceID = 'pasep_garagexyz';
    const templateID = 'pasep_garage_temp';
    
    emailjs.sendForm('pasep_garagexyz', 'pasep_garage_temp', '#myForm').then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );
    })