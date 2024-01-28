const contactForm = document.querySelector('#contact-form');
const cfSubmitBtn = document.querySelector('#cfSubmitBtn');
const nameInput = document.getElementById('fname');
const emailInput = document.getElementById('femail');
const messageInput = document.getElementById('fmessage');

// Get needed data from email JS
const serviceId = "service_pg2cnjo";
const templateId = "template_xpxkjg8";
const publicKey = "wMyJIKg8-9kqueOqH";

//Initialize email JS with public key
emailjs.init(publicKey);

//Add submit event to the form
contactForm.addEventListener("submit", e => {
    //Prevent form default behaviour
    e.preventDefault();
    //Change button text
    cfSubmitBtn.innerText = "Just a Moment..."

    //Get all input field values
    const inputFields = {
        from_name: nameInput.value,
        email_address: emailInput.value,
        message: messageInput.value
    }
    /*Send de email
    (Add service, templateID and input field values)*/
    emailjs.send(serviceId, templateId, inputFields)
        .then(() => {
            //Change button text
            cfSubmitBtn.innerText = "Message sent successfully";
            nameInput.value = "";
            emailInput.value = "";
            messageInput.value = "";
        }, (error) => {
            console.log(error);
            cfSubmitBtn.innerText = "Something went wrong";
        });
});