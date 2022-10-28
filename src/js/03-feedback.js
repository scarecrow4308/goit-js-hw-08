import throttle from 'lodash.throttle';
const FORM_LOCAL_STORAGE_KEY = 'feedback-form-state';
const formEl = document.querySelector('.feedback-form');
const userInfo = {};

const userInfoToLocalStorage = event => {
  userInfo[event.target.name] = event.target.value;
  localStorage.setItem(FORM_LOCAL_STORAGE_KEY, JSON.stringify(userInfo));
};

const formFillFromLocalStorage = function (form) {
  const localStorageItem = JSON.parse(
    localStorage.getItem(FORM_LOCAL_STORAGE_KEY)
  );
  console.log(localStorageItem);

  const formElements = form.elements;

  if (!localStorageItem) {
    return;
  }
  const keysOfLocalStorage = Object.keys(localStorageItem);

  for (const key of keysOfLocalStorage) {
    formElements[key].value = localStorageItem[key];
    userInfo[key] = localStorageItem[key];
  }
};

formEl.addEventListener('input', throttle(userInfoToLocalStorage, 500));

formFillFromLocalStorage(formEl);

formEl.addEventListener('submit', event => {
  event.preventDefault();
  console.log(event.target.email.value);
  console.log(event.target.message.value);
  formEl.reset();
  localStorage.removeItem(FORM_LOCAL_STORAGE_KEY);
});
