const text = "Welcome Back";
let i = 0;

function typeEffect() {
    const element = document.getElementById("typing-text");

    if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 150);
    } else {
        setTimeout(() => {
            element.innerHTML = "";
            i = 0;
            typeEffect();
        }, 1500);
    }
}

typeEffect();

/* PASSWORD TOGGLE */
function togglePassword() {
    const password = document.getElementById("password");
    const eye = document.querySelector(".toggle-eye");

    if (password.type === "password") {
        password.type = "text";
        eye.textContent = "🙈";
    } else {
        password.type = "password";
        eye.textContent = "👁";
    }
}

/* AUTHOR TYPE EFFECT */
const authorText = "Unknown Brain";
let j = 0;

function typeAuthor() {
    const author = document.getElementById("author");

    if (j < authorText.length) {
        author.innerHTML += authorText.charAt(j);
        j++;
        setTimeout(typeAuthor, 120);
    }
}

typeAuthor();