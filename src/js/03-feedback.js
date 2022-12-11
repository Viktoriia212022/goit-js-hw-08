import throttle from "lodash.throttle";


const form = document.querySelector('.feedback-form');
const input = document.querySelector('input[type="email"]');
const textArea = document.querySelector('textarea[name="message"]');

const STORAGE_KEY = 'feedback-form-state';
populateText();
const formData = {};

form.addEventListener('input', e => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    formData[e.target.name] = e.target.value;
    console.log(formData)
})

// console.log(form);
// console.log(input);


form.addEventListener('submit', onFormSubmit);
// input.addEventListener('input', onFormInput);
textArea.addEventListener('input', throttle (onFormInput, 500));


function onFormInput(event) {
    const textInput = event.target.value;
    // console.log(textInput);
    localStorage.setItem(STORAGE_KEY,textInput);
}

function onFormSubmit(evt) {
    evt.preventDefault();
    console.log('отправляем форму')
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function populateText() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    console.log(savedMessage)
    if (savedMessage) {
        console.log(savedMessage);
        textArea.value = savedMessage;
    }
}




// function onTextareaInput(evt) {
//   let fg = JSON.parse(localStorage.getItem(STORAGE_KEY));
// ось тут витягаю дані
//   formData = { ...fg, [evt.target.name]: evt.target.value };
// дістаю їх
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
// і записую
// }






    


