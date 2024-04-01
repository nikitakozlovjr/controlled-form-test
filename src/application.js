import onChange from 'on-change';
import axios from 'axios';
import initForm from './index.js';
import mappingValidate from './validation/index.js';
import validateFormCheck from './validateFormCheck.js';
import render from './views/index.js';

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

  const form = document.getElementById('registrationForm');
  const fields = document.querySelectorAll('input[type="text"]');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const registrationDataUser = {
      name: formData.get('name'),
      email: formData.get('email'),
    };

    try {
      const { data } = await axios.post('/users', registrationDataUser);
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
