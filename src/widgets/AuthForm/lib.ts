interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
}

export const validateName = (name: string) => {
  const regex = /^[a-zA-Zа-яА-ЯёЁ]+([ -]?[a-zA-Zа-яА-ЯёЁ]+)*$/;
  if (!regex.test(name)) {
    return 'Имя может содержать только буквы, один пробел или дефис между словами';
  }
  return '';
};

export const validateEmail = (email: string) => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
  if (!regex.test(email)) {
    return 'Неправильный формат';
  }
  return '';
};

export const validatePassword = (password: string) => {
  if (password.length < 8) {
    return 'Пароль должен содержать минимум 8 символов';
  }
  return '';
};

export const validateRegisterForm = (
  formData: { name: string; email: string; password: string },
  setErrors: (errors: FormErrors) => void,
) => {
  const newErrors: FormErrors = {};
  newErrors.name = validateName(formData.name);
  newErrors.email = validateEmail(formData.email);
  newErrors.password = validatePassword(formData.password);

  setErrors(newErrors);

  return !newErrors.name && !newErrors.email && !newErrors.password;
};

export const validateLoginForm = (
  loginData: { email: string; password: string },
  setErrors: (errors: FormErrors) => void,
) => {
  const newErrors: FormErrors = {};
  newErrors.email = validateEmail(loginData.email);
  newErrors.password = validatePassword(loginData.password);

  setErrors(newErrors);

  return !newErrors.email && !newErrors.password;
};
