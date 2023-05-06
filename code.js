var fNameField = document.getElementById('fName');
var lNameField = document.getElementById('lName');
var ageField = document.getElementById('age');
var sexField = document.getElementsByName('sex');
var errorField = document.getElementById('error');
const personList = [];

class Person {
    #fName;
    #lName;
    #age;
    #sex;
    constructor(fName, lName, age, sex) {
        this.#fName = fName;
        this.#lName = lName;
        this.#age = age;
        this.#sex = sex;
    }
    get firstName() {
        return this.#fName;
    }
    get lastName() {
        return this.#lName;
    }
    get personAge() {
        return this.#age;
    }
    get personSex() {
        return this.#sex;
    }
}

function validate () {
    errorField.innerText = '';
    let fName = fNameField.value.slice(0,);
    let lName = lNameField.value.slice(0,);
    const checker = /[^a-zA-Z\s]/g;
    if (fName.length == 0 || fName.search(checker) != -1) {
        errorField.innerText = 'First name must be only letters, spaces allowed';
        console.error('Invalid first name');
        return false;
    }
    if (lName.length == 0 || lName.search(checker) != -1) {
        errorField.innerText = 'Last name must be only letters, spaces allowed';
        console.error('Invalid last name');
        return false;
    }
    if (ageField.value < 0 || ageField.value > 160) {
        errorField.innerText = 'Please enter valid age (0-160)';
        console.error('Invalid age');
        return false;
    }
    /*if (sexField[0].value != 'on' && sexField[1].value != 'on') {
        errorField.innerText = 'Please choose a sex';
        console.error('Enter sex');
        return false;
    }*/
    return true;
}

function submit () {
    if (validate()) {
        console.log('good');
        errorField.innerText = '';
        let sex;
        if (sexField[0].checked) {
            sex = 'Male';
        } else {
            sex = 'Female';
        }
        let temp = new Person(fNameField.value, lNameField.value, ageField.value, sex);
        personList.push(temp);
    }
}

function list() {
    if (personList.length == 0) {
        errorField.innerText = 'List is empty';
    } else {
        console.log('entered');
        errorField.innerText = '';
        let nodes = document.getElementsByClassName('entry');
        let n = nodes.length;
        while (nodes.length > 0) {
            nodes[0].remove();
        }
        for (let i = 0; i < personList.length; i++) {
            let listEntry = document.createElement('div');
            document.getElementById('last').before(listEntry);
            listEntry.setAttribute('class', 'entry')
            listEntry.innerHTML =
                personList[i].firstName + '<br>' +
                personList[i].lastName + '<br>' +
                personList[i].personAge + '<br>' +
                personList[i].personSex
            ;
        }
    }
}