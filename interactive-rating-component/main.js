let selectedValue = -1;

let clickRating = (e) => {
    let previousSelected = document.getElementsByClassName('selected');
    if(previousSelected.length > 0) {
        previousSelected[0].classList.toggle('selected');
    }
    e.target.classList.toggle('selected');
    selectedValue = e.target.textContent;
}

let ratingButtons = document.getElementById('rating-btns');

// let button1 = document.createElement('li');
// button1.textContent='1';
// button1.classList.toggle('button');
// button1.addEventListener('click', clickRating);
// ratingButtons.appendChild(button1);
// let button2 = document.createElement('li');
// button2.textContent='2';
// button2.classList.toggle('button');
// ratingButtons.appendChild(button2);

let buttonToAdd = document.createElement('li');
buttonToAdd.classList.toggle('button');
for(let i = 1; i < 6; i++) {
    buttonToAdd = buttonToAdd.cloneNode(true);
    buttonToAdd.textContent = parseInt(i);
    buttonToAdd.addEventListener('click', clickRating);
    ratingButtons.appendChild(buttonToAdd);
}

// toggle click
// if button is clicked, make sure to unclick any other one. just toggle. don't complicate

let submitRating = () => {
    if(selectedValue!= -1) {
        alert(selectedValue);
    }
}

let submitButtonList = document.getElementsByClassName('submit');
if(submitButtonList.length > 0) {
    let submitButton = submitButtonList[0];
    submitButton.addEventListener('click', submitRating);
}