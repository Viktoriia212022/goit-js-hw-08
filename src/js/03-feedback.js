import throttle from "lodash.throttle";


const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[type="email"]');
const textArea = document.querySelector('textarea[name="message"]');

const STORAGE_KEY = 'feedback-form-state';
populateText();
const formData = {};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle (onFormInput, 500));



function onFormInput(e) {

  formData[e.target.name] = e.target.value;
  // console.log(formData);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

function onFormSubmit(evt) {
    evt.preventDefault();
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function populateText() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    // console.log(savedMessage);
    if (savedMessage) {
      email.value = JSON.parse(savedMessage).email || '' ;
      textArea.value = JSON.parse(savedMessage).message|| '';
      console.log(savedMessage);
       }
}










    


