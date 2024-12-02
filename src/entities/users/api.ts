import { setCookie } from '../../shared/lib';

// const API_URL = `${process.env.BASE_URL}/user`;
const API_URL = 'http://localhost:8080/api/user';

export interface ApiResponse {
  success: boolean;
  message: string;
  token?: string;
}

export const registerUser = async (formData: {
  name: string;
  email: string;
  password: string;
}): Promise<ApiResponse> => {
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
      return { success: true, message: data.message, token: data.token };
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
}): Promise<ApiResponse> => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    });

    if (response.ok) {
      const data = await response.json();
      setCookie('authorization', data.token, 7);
      return { success: true, message: data.message, token: data.token };
    } else {
      const error = await response.json();
      return { success: false, message: error.message };
    }
  } catch (error) {
    const err = error as Error;
    return { success: false, message: `Ошибка: ${err.message}` };
  }
};
