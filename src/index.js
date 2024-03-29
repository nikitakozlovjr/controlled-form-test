const renderForm = () => {
  const container = document.querySelector('.form-container');

  const form = document.createElement('form');
  form.setAttribute('id', 'registrationForm');

  const divName = document.createElement('div');
  divName.classList.add('form-group');

  const labelName = document.createElement('label');
  labelName.setAttribute('for', 'inputName');
  labelName.textContent = 'Name';

  const inputName = document.createElement('input');
  inputName.setAttribute('type', 'text');
  inputName.setAttribute('id', 'inputName');
  inputName.setAttribute('placeholder', 'Введите ваше имя');
  inputName.setAttribute('name', 'name');
  inputName.setAttribute('required', true);
  inputName.classList.add('form-control');

  divName.appendChild(labelName);
  divName.appendChild(inputName);
  form.appendChild(divName);

  const divEmail = document.createElement('div');
  divEmail.classList.add('form-group');

  const labelEmail = document.createElement('label');
  labelEmail.setAttribute('for', 'inputEmail');
  labelEmail.textContent = 'Email';

  const inputEmail = document.createElement('input');
  inputEmail.setAttribute('type', 'text');
  inputEmail.setAttribute('id', 'inputEmail');
  inputEmail.setAttribute('placeholder', 'Введите email');
  inputEmail.setAttribute('name', 'email');
  inputEmail.setAttribute('required', true);
  inputEmail.classList.add('form-control');

  divEmail.appendChild(labelEmail);
  divEmail.appendChild(inputEmail);
  form.appendChild(divEmail);

  const inputSubmit = document.createElement('input');
  inputSubmit.setAttribute('type', 'submit');
  inputSubmit.setAttribute('value', 'Submit');
  inputSubmit.classList.add('btn');
  inputSubmit.classList.add('btn-primary');

  form.appendChild(inputSubmit);

  container.appendChild(form);
};

export default renderForm;
