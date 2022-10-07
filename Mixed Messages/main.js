//message variables
const messageOne = "English, Spanish, German";
const messageTwo = "car, coche, auto";
const messageThree = "house, casa, haus";
const messageFour = "dog, perro, hund";
const messageFive = "Earth, Tierra, Erde ";
//image variables
const imageOne = document.getElementById('');
const imageTwo = document.getElementById('carPhoto');
const imageThree = document.getElementById('housePhoto');
const imageFour = document.getElementById('dogPhoto');
const imageFive = document.getElementById('earthPhoto');
//button variable
const button = document.getElementById('');


//messages array
const messages = [messageOne, messageTwo, messageThree, messageFour, messageFive];

//randomize messages
let randomMessages = messages[Math.floor(Math.random() * messages.length)];

//when button is clicked, a random message is displayed
button.onclick = () => {
 document.getElementById('/*Empty div ID*/').innerHTML= randomMessages
 //switch statement to choose and display image
 switch(randomMessages){
    case messageOne:
        imageOne.style.display = 'block'
        break;
    case messageTwo:
        imageTwo.style.display = 'block'
        break;
    case messageThree:
        imageThree.style.display = 'block'
        break;
    case messageFour:
        imageFour.style.display = 'block'
        break;
    case messageFive:
        imageFive.style.display = 'block'
        break;
 };
};

