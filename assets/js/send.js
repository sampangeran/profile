function sendMail() {
    var templateParams = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
        subject: document.getElementById("subject").value,
    };
    
    const serviceID = "service_8zs6e8f";
    const templateID = "template_tix3ld6";
    emailjs.send(serviceID, templateID, templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
       alert("Message sent! I will contact you shortly.")
    }, function(error) {
       console.log('FAILED...', error);
       alert("Error! Please try again later")
    });
}