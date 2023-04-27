function reveal1() {
    var reveals = document.querySelectorAll(".reveal1");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

window.addEventListener("scroll", reveal1);

function reveal2() {
    var reveals = document.querySelectorAll(".reveal2");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

window.addEventListener("scroll", reveal2);


var string = "Getting any new project ideas, Thinking I could help with anything Or just want to get in contact with me";
var str = string.split("");
var tt = document.getElementById('typedtext');

function delay(func, delayTime) {
    setTimeout(func, delayTime);
};

function typing() {

    str.length > 0 ? tt.innerHTML += str.shift() : clearTimeout(running); 
    var running = setTimeout(typing, 30);

};

delay(function() {typing()}, 1000);
