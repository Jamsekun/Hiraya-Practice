//class
//
class employees {
    constructor(firstName, lastName, Age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.Age = Age;

    }

    getFullName () {
        return this.firstName + " " + this.lastName;
    }
}

const employee1 = new employees('James', 'Balolong', 21);
console.log(employee1.getFullName());

let soMany = 10;
console.log(`This is ${soMany} times easier!`);

const a = 5;
const b = 10;
console.log(`Fifteen is ${a + b} and not ${2 * a + b}.`);
//

//randomizer
function getRandomHexColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

console.log(getRandomHexColor());
// Single elements

console.log(document.querySelector('h1'));

//multiple elements
console.log(document.querySelectorAll('.item'));


const btn = document.querySelector('.btn');
btn.addEventListener('mouseover',(e) => {
    e.preventDefault();
    document.querySelector('body').style.background = getRandomHexColor();
    console.log(getRandomHexColor());

});

// functional example
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msgOutput = document.querySelector('.msg');
const UserList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === '') {
        msgOutput.classList.add('error');
        msgOutput.innerHTML = '<h6>FFILL UP EMPTY BOXES!</h6> <style> h6 {color: red;}}</style>';
    }else {
        msgOutput.remove();
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        UserList.appendChild(li);

        //clear 
        nameInput.value = '';
        emailInput.value = '';
    }
}





























