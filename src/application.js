import onChange from 'on-change';
import axios from 'axios';
import initForm from './index.js';
import mappingValidate from './validation/index.js';
import validateFormCheck from './validateFormCheck.js';

const render = (state) => (path, value) => {
  if (path === 'process') {
    if (value === 'processed') {
      const body = document.querySelector('body');
      body.innerHTML = `<p>${state.message}</p>`;
    }
  }

  if (path === 'inputName.validate') {
    const inputName = document.getElementById('inputName');
    if (value) {
      inputName.classList.remove('is-invalid');
      inputName.classList.add('is-valid');
    } else {
      inputName.classList.remove('is-valid');
      inputName.classList.add('is-invalid');
    }
  }

  if (path === 'inputEmail.validate') {
    const inputEmail = document.getElementById('inputEmail');
    if (value) {
      inputEmail.classList.remove('is-invalid');
      inputEmail.classList.add('is-valid');
    } else {
      inputEmail.classList.remove('is-valid');
      inputEmail.classList.add('is-invalid');
    }
  }

  if (path === 'validateForm') {
    const submit = document.querySelector('input[type="submit"]');
    if (value) {
      submit.removeAttribute('disabled');
    } else {
      submit.setAttribute('disabled', true);
    }
  }
};

export default () => {
  const state = {
    inputName: {
      validate: null,
      value: null,
    },
    inputEmail: {
      validate: null,
      value: null,
    },
    process: 'filling',
    message: null,
    validateForm: null,
  };

  initForm();

  const watchedState = onChange(state, render(state));

  const btn = document.querySelector('.btn');
  const fields = document.querySelectorAll('input[type="text"]');

  btn.addEventListener('click', async () => {
    try {
      const { data } = await axios.post('/users');
      state.message = data.message;
      watchedState.process = 'processed';
    } catch {
      throw new Error(
        'Problems with sending data to the server. Check your internet connection',
      );
    }
  });

  fields.forEach((field) => {
    field.addEventListener('input', (event) => {
      const fieldName = event.target.id;
      const { value } = event.target;
      watchedState[fieldName].validate = mappingValidate[fieldName](value);
      watchedState[fieldName].value = value;
      watchedState.validateForm = validateFormCheck(state);
    });
  });
};
