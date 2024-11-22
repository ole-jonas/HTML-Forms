// Submit knappen
const submitBtn = document.querySelector("#submit-btn");

// Konventeringsbutton

const konventeringsButton = document.querySelector("#")
// Personalia elementer
const nameInput = document.querySelector("#name");
const surnameInput = document.querySelector("#surname");

//Land element
const countryInput = document.querySelector("#country");

// Hobbyer
const fiskeElement = document.querySelector("#fiske")
const gamingElement = document.querySelector("#gaming")
const kodingElement = document.querySelector("#koding")

function submit(event) {
    event.preventDefault();

    const name = nameInput.value;
    const surname = surnameInput.value;
    const country = countryInput.value;

    const hobbyArray = [];

    if (fiskeElement.checed === true) {
        hobbyArray.push(fiskeElement.value)
    }
    if (gamingElement.checked === true) {
        hobbyArray.push(gamingElement.value)
    }
    if (kodingElement.checed === true) {
        hobbyArray.push(kodingElement.value)
    }


    console.log(name);
    console.log(surname);
    console.log(country);
    console.log(hobbyArray);
}

function konventering (event) {
    event.preventDefault()

    const number = numberInput.value

    const feet = number * 3.2

    konventeringsButton.textContent = number + "meter = " + feet + "feet"
}

konventeringsButton.addEventListener("click", konventering)
submitBtn.addEventListener("click", submit);