const result = document.querySelector('#result');
const greetingMessage = document.querySelector('#greetingMessage');
const heading = document.querySelector('h1'); 

window.addEventListener('keydown', function(e) {
  if (e.code === 'Enter' && result.value) {
    greetingMessage.textContent = `Darkstar to ${result.value}, have a nice flight!`;
    result.style.display = 'none';
    heading.style.display = 'none';
  }
});


//enden

// window.addEventListener('keydown', function(e) {
// 	if (e.code == 'Enter') {
// 	body.append("Darkstar To " + e.target.value + ", have a nice flight " + e.target.value +"!" )	}
// 	console.log(e)
// })

//enden

// button.addEventListener("click", doSomething)

// function doSomething(argument) {
// 	alert("Hello Sekai ")
// }