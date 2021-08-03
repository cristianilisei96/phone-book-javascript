// get buttons from DOM
const addNewContact = document.querySelector('button.btnAddNewContact');
const phoneBook = document.querySelector('.phoneBook');
const list = document.querySelector('.tBodyList');
const inputs = [
    document.getElementById('inputName'),
    document.getElementById('inputNumber')
];

// add event listener 
inputs.forEach((input) => {
    input.addEventListener('keydown', handler);
    input.addEventListener('input', handler);
    input.addEventListener('keypress', submitOnEnterKey);
})
addNewContact.addEventListener('click', addNewContactFunction);

function checkLength(target) {
    return !!target.value;
}

function submitOnEnterKey(e) {
    if (e.keyCode === 13) {
        addNewContactFunction(e);
        if (e.cancelable) {
            e.preventDefault();
        }
    }
}

function handler(e) {
    if (e.type === 'input') {
        validate(e.target);
    } else {
        submitOnEnterKey(e);
    }
}

function validate(target) {
    const result = checkLength(target);

    if (result) {
        target.classList.remove('is-invalid');
    } else {
        target.classList.add('is-invalid');
    }

    return result;
}

function addNewContactFunction(e){
    const result = inputs.map((input) => validate(input)).every((val) => val);

    if(result) {
        const tr = document.createElement('tr');
        tr.classList.add('newTr');
        tr.innerHTML = 
            "<td>" + inputs[0].value + "</td>" + 
            "<td>" + inputs[1].value + "</td>" + 
            "<td class='text-nowrap'><button onclick='editContact(event)' class='btn btn-warning'>Editeaza</button>" + 
            "<button onclick='deleteContact(event)' class='btn btn-danger btnDeleteNewContact'>Sterge</button></td>";
        phoneBook.classList.add('d-block');
        const appendedItem = list.appendChild(tr);
        inputs[0].value = '';
        inputs[1].value = '';
    } else {

    }
    e.preventDefault();
}

function editContact(){
    const contactToBeEdit = event.target.parentElement.parentElement.children[0].innerText;
    const numberToBeEdit = event.target.parentElement.parentElement.children[1].innerText;
    // console.log(contactToBeEdit);
    // console.log(numberToBeEdit);
    inputs[0].value = contactToBeEdit;
    inputs[1].value = numberToBeEdit;
    addNewContact.innerText = 'Actualizeaza';

}

function deleteContact(){
    // console.log(event.target.parentElement.parentElement);
    const contactToBeRemoved = event.target.parentElement.parentElement;
    list.removeChild(contactToBeRemoved);
    const newTr = document.querySelector('.newTr');
    if(!list.contains(newTr)){
        phoneBook.classList.remove('d-block');
        // console.log('The list contains tr');
    } else {
        // console.log('The list does not contains any tr');
    }
}