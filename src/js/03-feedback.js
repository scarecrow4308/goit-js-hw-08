import throttle from 'lodash.throttle';
const FORM_LOCAL_STORAGE_KEY = 'feedback-form-state';
const formEl = document.querySelector('.feedback-form');

const userInfo = {};

const OnFillContactFormElements = event => {
  const { email, message } = formEl.elements;

  userInfo.email = email.value;
  userInfo.message = message.value;
  localStorage.setItem(FORM_LOCAL_STORAGE_KEY, JSON.stringify(userInfo));
  console.log(userInfo);
};

const FormFillFromLocalStorage = function (form) {
  const localStorageItem = JSON.parse(
    localStorage.getItem(FORM_LOCAL_STORAGE_KEY)
  );

  const formElements = form.elements;

  if (!localStorageItem) {
    return;
  }
  const keysOfLocalStorage = Object.keys(localStorageItem);

  for (const key of keysOfLocalStorage) {
    formElements[key].value = localStorageItem[key];
  }
};

formEl.addEventListener('input', throttle(OnFillContactFormElements, 500));

FormFillFromLocalStorage(formEl);

formEl.addEventListener('submit', event => {
  event.preventDefault();
  console.log(userInfo.email);
  console.log(userInfo.message);
  formEl.reset();
  localStorage.removeItem(FORM_LOCAL_STORAGE_KEY);
});
