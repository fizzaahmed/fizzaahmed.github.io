const sentence = "hi! i'm fizza"
const letters = sentence.split("");
let i = 0;

function typeSentence(delay = 100) {
  if(i < letters.length) {
    document.getElementById("intro").innerHTML += letters[i];
    i++;
    setTimeout(typeSentence, delay)

  }
  return;
}


document.addEventListener("DOMContentLoaded", function() { 
  setTimeout(typeSentence, 250);
});