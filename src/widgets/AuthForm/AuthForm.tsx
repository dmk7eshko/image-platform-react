import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { loginUser, registerUser } from '../../entities/users/api';
import { Button } from '../../shared/Button';
import { Input } from '../../shared/Input';
import { getCookie } from '../../shared/lib';
import { Tab } from '../../shared/Tab';
import { TabContent } from '../../shared/TabContent';
import { TabGroup } from '../../shared/TabGroup';
import { Content } from '../MainContent/styles';

import { initialLoginData, initialRegisterData } from './constants';
import { validateLoginForm, validateRegisterForm } from './lib';
import { Styled } from './styles';

interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
}

export const AuthForm = () => {
  const [activeTab, setActiveTab] = useState<string>('signup');
  const [formData, setFormData] = useState(initialRegisterData);
  const [loginData, setLoginData] = useState(initialLoginData);
  const [errors, setErrors] = useState<FormErrors>({});
  const navigate = useNavigate();

  useEffect(() => {
    const authCookie = getCookie('authorization');
    if (authCookie) {
      navigate('/');
    }
  }, [navigate]);

  const handleTabClick = (target: string) => {
    setActiveTab(target);
    setErrors({});
  };

  const handleRegisterInputChange = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleLoginInputChange = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement>) => {
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleRegister = async () => {
    if (validateRegisterForm(formData, setErrors)) {
      const result = await registerUser(formData);
      if (result.success) {
        navigate('/');
      }
    }
  };

  const handleLogin = async () => {
    if (validateLoginForm(loginData, setErrors)) {
      const result = await loginUser(loginData);
      if (result.success) {
        navigate('/');
      }
    }
  };

  const handleSwitchToLogin = () => handleTabClick('login');
  const handleSwitchToSignup = () => handleTabClick('signup');

  return (
    <Content>
      <Styled.FormContainer className="form-container">
        <TabGroup>
          <Tab
            onClick={() => handleTabClick('signup')}
            target="signup"
            isActive={activeTab === 'signup'}
          >
            Регистрация
          </Tab>
          <Tab
            onClick={() => handleTabClick('login')}
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
              {errors.name && (
                <Styled.ErrorText>{errors.name}</Styled.ErrorText>
              )}
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
            <Button buttonType="link" onClick={handleSwitchToLogin}>
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
            <Button buttonType="link" onClick={handleSwitchToSignup}>
              Зарегистрироваться
            </Button>
          </Styled.Form>
        </TabContent>
      </Styled.FormContainer>
    </Content>
  );
};
