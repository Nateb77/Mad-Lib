var button = document.getElementById('Display'); 
button.addEventListener('click', getWords);
var words = document.querySelectorAll('input[type=text]')
   function getWords() {
      console.log(words)
}