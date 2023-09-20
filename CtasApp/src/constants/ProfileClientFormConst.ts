export const NAME_VALIDATION_RULES = {
  required: 'Name is required!',
  pattern: {
    value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/,
    message: 'Name can only contain letters and spaces!',
  },
};

export const PHONE_VALIDATION_RULES = {
  required: 'Phone number is required!',
  pattern: {
    value: /^\d{3}-\d{3}-\d{4}$/,
    message: 'Phone number must be 10 digits!',
  },
};

export const OCCUPATION_VALIDATION_RULES = {
  required: 'Occupation is required!',
  pattern: {
    value: /^[A-ZÁÉÍÓÚÑ][A-Za-zÁÉÍÓÚáéíóúÑñ\s]*$/,
    message: 'Start with a capital letter; ONLY LETTERS AND SPACES',
  },
};