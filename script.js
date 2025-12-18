var button = document.getElementById('Display'); 
button.addEventListener('click', getWords);

function getWords() {

var words = document.querySelectorAll('input[type=text]')
var placeholders = document.querySelectorAll('.userInput')
placeholders.forEach((placeholder, index) => {
   console.log(placeholder, index);
   placeholder.innerHTML = words[index].value;
});

document.getElementById("output").style.display = "block";
document.getElementById("outputs").style.display = "block";

}
