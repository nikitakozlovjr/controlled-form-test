export const validateName = (name) => (name.trim().length >= 1 ? {} : { errors: ['name cannot be empty'] });
