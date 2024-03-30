import onChange from 'on-change';
import axios from 'axios';
import renderForm from './index.js';

const render = (state) => (path, value) => {
  if (path === 'process') {
    if (value === 'processed') {
      const body = document.querySelector('body');
      body.innerHTML = `<p>${state.message}</p>`;
    }
  }
};

export default () => {
  const state = {
    name: {
      value: null,
      error: null,
    },
    email: {
      value: null,
      error: null,
    },
    process: 'filling',
    message: null,
  };

  renderForm();

  const watchedState = onChange(state, render(state));

  const btn = document.querySelector('.btn');

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
};
