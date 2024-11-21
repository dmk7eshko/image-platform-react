import { useState } from 'react';

import { loginUser, registerUser } from '../../entities/users/api';
import { Button } from '../../shared/Button';
import { Input } from '../../shared/Input';
import { Tab } from '../../shared/Tab';
import { TabContent } from '../../shared/TabContent';
import { TabGroup } from '../../shared/TabGroup';

import { Styled } from './styles';

interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
}

export const ModalForm = () => {
  const [activeTab, setActiveTab] = useState<string>('signup');
  const initialRegisterData = {
    name: '',
    email: '',
    password: '',
  };
  const initialLoginData = {
    email: '',
    password: '',
  };
  const [formData, setFormData] = useState(initialRegisterData);
  const [loginData, setLoginData] = useState(initialLoginData);
  const [errors, setErrors] = useState<FormErrors>({});

  const validateName = (name: string) => {
    const regex = /^[a-zA-Zа-яА-ЯёЁ]+([ -]?[a-zA-Zа-яА-ЯёЁ]+)*$/;
    if (!regex.test(name)) {
      return 'Имя может содержать только буквы, один пробел или дефис между словами';
    }
    return '';
  };

  const validateEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
    if (!regex.test(email)) {
      return 'Неправильный формат';
    }
    return '';
  };

  const validatePassword = (password: string) => {
    if (password.length < 8) {
      return 'Пароль должен содержать минимум 8 символов';
    }
    return '';
  };

  const validateRegisterForm = () => {
    const newErrors: FormErrors = {};
    newErrors.name = validateName(formData.name);
    newErrors.email = validateEmail(formData.email);
    newErrors.password = validatePassword(formData.password);

    setErrors(newErrors);

    return !newErrors.name && !newErrors.email && !newErrors.password;
  };

  const validateLoginForm = () => {
    const newErrors: FormErrors = {};
    newErrors.email = validateEmail(loginData.email);
    newErrors.password = validatePassword(loginData.password);

    setErrors(newErrors);

    return !newErrors.email && !newErrors.password;
  };

  const handleTabClick = (target: string) => {
    setActiveTab(target);
    setErrors({});
  };

  const handleRegisterInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleLoginInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleRegister = async () => {
    if (validateRegisterForm()) {
      const result = await registerUser(formData);
      alert(result.message);
      if (result.success) {
        setFormData(initialRegisterData);
      }
    }
  };

  const handleLogin = async () => {
    if (validateLoginForm()) {
      const result = await loginUser(loginData);
      alert(result.message);
      if (result.success) {
        setLoginData(initialLoginData);
      }
    }
  };

  return (
    <Styled.FormContainer className="form-container">
      <TabGroup>
        <Tab
          onClick={handleTabClick}
          target="signup"
          isActive={activeTab === 'signup'}
        >
          Регистрация
        </Tab>
        <Tab
          onClick={handleTabClick}
          target="login"
          isActive={activeTab === 'login'}
        >
          Вход
        </Tab>
      </TabGroup>

      <TabContent id="signup" activeTab={activeTab}>
        <Styled.Title>Зарегистрируйся БЕСПЛАТНО</Styled.Title>
        <Styled.Form>
          <Styled.FieldWrap isError={!!errors.name}>
            <Input
              labelText="Имя"
              name="name"
              value={formData.name}
              onChange={handleRegisterInputChange}
            />
            {errors.name && <Styled.ErrorText>{errors.name}</Styled.ErrorText>}
          </Styled.FieldWrap>
          <Styled.FieldWrap isError={!!errors.email}>
            <Input
              labelText="Email"
              name="email"
              value={formData.email}
              onChange={handleRegisterInputChange}
            />
            {errors.email && (
              <Styled.ErrorText>{errors.email}</Styled.ErrorText>
            )}
          </Styled.FieldWrap>
          <Styled.FieldWrap isError={!!errors.password}>
            <Input
              labelText="Пароль"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleRegisterInputChange}
            />
            {errors.password && (
              <Styled.ErrorText>{errors.password}</Styled.ErrorText>
            )}
          </Styled.FieldWrap>
          <Button type="button" onClick={handleRegister}>
            Зарегистрироваться
          </Button>
          <Button buttonType="link" onClick={() => handleTabClick('login')}>
            У меня есть аккаунт
          </Button>
        </Styled.Form>
      </TabContent>

      <TabContent id="login" activeTab={activeTab}>
        <Styled.Title>С возвращением!</Styled.Title>
        <Styled.Form>
          <Styled.FieldWrap isError={!!errors.email}>
            <Input
              labelText="Email"
              name="email"
              value={loginData.email}
              onChange={handleLoginInputChange}
            />
            {errors.email && (
              <Styled.ErrorText>{errors.email}</Styled.ErrorText>
            )}
          </Styled.FieldWrap>
          <Styled.FieldWrap isError={!!errors.password}>
            <Input
              labelText="Пароль"
              name="password"
              type="password"
              value={loginData.password}
              onChange={handleLoginInputChange}
            />
            {errors.password && (
              <Styled.ErrorText>{errors.password}</Styled.ErrorText>
            )}
          </Styled.FieldWrap>
          <Styled.ForgotPassword>
            <Button buttonType="link">Забыли пароль?</Button>
          </Styled.ForgotPassword>
          <Button type="button" onClick={handleLogin}>
            Войти
          </Button>
          <Button buttonType="link" onClick={() => handleTabClick('signup')}>
            Зарегистрироваться
          </Button>
        </Styled.Form>
      </TabContent>
    </Styled.FormContainer>
  );
};
