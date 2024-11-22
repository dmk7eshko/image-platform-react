const API_URL = 'http://localhost:8080/api/user';

const setCookie = (name: string, value: string, days: number) => {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = 'expires=' + date.toUTCString();
  document.cookie = name + '=' + value + ';' + expires + ';path=/';
};

export const registerUser = async (formData: {
  name: string;
  email: string;
  password: string;
}) => {
  try {
    const response = await fetch(`${API_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const data = await response.json();
      setCookie('authorization', data.token, 7);
      return { success: true, message: 'Регистрация прошла успешно!' };
    } else {
      const error = await response.json();
      return { success: false, message: error.message };
    }
  } catch (error) {
    const err = error as Error;
    return { success: false, message: `Ошибка: ${err.message}` };
  }
};

export const loginUser = async (loginData: {
  email: string;
  password: string;
}) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    });

    if (!response.ok) {
      console.error('Response:', response);
    }

    const contentType = response.headers.get('Content-Type');
    if (response.ok) {
      if (contentType && contentType.includes('application/json')) {
        const data = await response.json();
        setCookie('authorization', data.token, 7);
        return { success: true, message: 'Вы успешно вошли в систему!' };
      } else {
        return {
          success: false,
          message: 'Unexpected content type: ' + contentType,
        };
      }
    } else {
      if (contentType && contentType.includes('application/json')) {
        const errorData = await response.json();
        return {
          success: false,
          message: errorData.message || 'Не удалось войти',
        };
      } else {
        const errorText = await response.text();
        return { success: false, message: `Ошибка: ${errorText}` };
      }
    }
  } catch (error) {
    const err = error as Error;
    return { success: false, message: `Ошибка: ${err.message}` };
  }
};
