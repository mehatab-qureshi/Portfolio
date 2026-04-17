let humburg = document.querySelector(".fa-solid.fa-bars.hamburg");
let navbar = document.querySelector(".dropdown");
let cancel = document.querySelector(".fa-solid.fa-xmark.cancel");

// humburg.addEventListener("click", () => {
//   navbar.style.transform = "translateY(0px)";
// });

// cancel.addEventListener("click", () => {
//   navbar.style.transform = "translateY(-500px)";
// }); //else...

humburg.addEventListener("click", () => {
  navbar.classList.add("active");
});

cancel.addEventListener("click", () => {
  navbar.classList.remove("active");
});

const texts = ["Fullstack Developer", "Software Developer"];

let speed = 100;
const textElements = document.querySelector(".typewriter-text");

let textIndex = 0;
let characterIndex = 0;

function typeWriter() {
  if (characterIndex < texts[textIndex].length) {
    textElements.innerHTML += texts[textIndex].charAt(characterIndex);
    characterIndex++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(eraseText, 1000);
  }
}

function eraseText() {
  if (textElements.innerHTML.length > 0) {
    textElements.innerHTML = textElements.innerHTML.slice(0, -1);
    setTimeout(eraseText, 50);
  } else {
    textIndex = (textIndex + 1) % texts.length;
    characterIndex = 0;
    setTimeout(typeWriter, 500);
  }
}

window.onload = typeWriter;

emailjs.init("i8y6oz1rFMzd9c3Tr");

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs
    .sendForm("service_62ln97c", "template_e8o57ta", this, "i8y6oz1rFMzd9c3Tr")
    .then(() => {
      alert("Message sent successfully ✅");
      form.reset();
    })
    .catch(() => {
      alert("Failed ❌ Try again");
    });
});
