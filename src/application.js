export const validateName = (name) => /.{1,}/.test(name.trim()) ? {} : {errors: ['name cannot be empty']};
