let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Screenshot 2021-08-08 230530.png') {
      myImage.setAttribute('src','images/Image2.png');
    } else {
      myImage.setAttribute('src','images/Screenshot 2021-08-08 230530.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'You are cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'You are cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
