import { setCookie } from '../../shared/lib';

const API_URL = 'http://localhost:8080/api/user';

const handleResponse = async (response: Response) => {
  if (response.ok) {
    const { message, token } = await response.json();
    setCookie('authorization', token, 7);
    return { success: true, message, token };
  } else {
    const { message } = await response.json();
    return { success: false, message };
  }
};

const handleError = (error: unknown) => {
  const { message } = error as Error;
  return { success: false, message: `Ошибка: ${message}` };
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
    return await handleResponse(response);
  } catch (error) {
    return handleError(error);
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
    return await handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};
