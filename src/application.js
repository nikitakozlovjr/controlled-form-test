export const validateName = (name) => (name.trim().length >= 1 ? [] : ['name cannot be empty']);
export const validateEmail = (email) => (/\S+@\S+/.test(email.trim()) ? [] : ['invalid email']);