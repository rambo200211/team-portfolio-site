// MEMBER 3: all JavaScript interactivity

 // MEMBER 3: all JavaScript interactivity

const typingText = document.getElementById("typing-text");

const words = ["together", "creatively", "better"];

let wordIndex = 0;
let letterIndex = 0;

function typeWord() {
    if (letterIndex < words[wordIndex].length) {
        typingText.textContent += words[wordIndex][letterIndex];
        letterIndex++;
        setTimeout(typeWord, 150);
    } else {
        setTimeout(eraseWord, 1000);
    }
}

function eraseWord() {
    if (letterIndex > 0) {
        typingText.textContent = words[wordIndex].substring(0, letterIndex - 1);
        letterIndex--;
        setTimeout(eraseWord, 80);
    } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeWord, 300);
    }
}

typeWord();



const contactForm = document.getElementById("contact-form");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");

const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    formStatus.textContent = "";

    let isValid = true;

    if (nameInput.value.trim() === "") {
        nameError.textContent = "Please enter your name.";
        isValid = false;
    }

    if (emailInput.value.trim() === "") {
        emailError.textContent = "Please enter your email.";
        isValid = false;
    } else if (!emailInput.validity.valid) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }

    if (messageInput.value.trim() === "") {
        messageError.textContent = "Please enter a message.";
        isValid = false;
    }

    if (isValid) {
        formStatus.textContent = "Form submitted successfully!";
        contactForm.reset();
    }
});
