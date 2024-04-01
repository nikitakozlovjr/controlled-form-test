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

export default render;
