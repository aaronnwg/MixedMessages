
//message variables
const messageOne = "Hello";
const messageTwo = "Bonjour";
const messageThree = "Hola";
const messageFour = "Ciao";
const messageFive = "Hallo";
//image variables
const imageOne = document.getElementById('England');
const imageTwo = document.getElementById('France');
const imageThree = document.getElementById('Spain');
const imageFour = document.getElementById('Italy');
const imageFive = document.getElementById('Germany');
//button variable
const button = document.getElementById('button');


//messages array
const messages = [messageOne, messageTwo, messageThree, messageFour, messageFive];


const messageFunction = () => {
    //randomize messages
    let randomMessages = messages[Math.floor(Math.random() * messages.length)];
        
    document.getElementById('message').innerHTML = randomMessages
    //chooses and displays corresponding image
    imageOne.style.display = 'none';
    imageTwo.style.display = 'none';
    imageThree.style.display = 'none';
    imageFour.style.display = 'none';
    imageFive.style.display = 'none';

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

//when button is clicked, a random message is displayed
button.onclick = messageFunction 


