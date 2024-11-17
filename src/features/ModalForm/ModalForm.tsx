import { useEffect, useState } from 'react';

import { Button } from '../../shared/Button';
import { Input } from '../../shared/Input';
import { Tab } from '../../shared/Tab';
import { TabContent } from '../../shared/TabContent';
import { TabGroup } from '../../shared/TabGroup';

import { Styled } from './styles';

export const ModalForm = () => {
  const [activeTab, setActiveTab] = useState<string>('#signup');

  const handleTabClick = (target: string) => {
    setActiveTab(target);
  };

  const handleEvent = (e: Event) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    const label = target.previousElementSibling as HTMLLabelElement;

    if (!label) return;

    if (e.type === 'keyup') {
      if (target.value === '') {
        label.classList.remove('active');
      } else {
        label.classList.add('active');
      }
    } else if (e.type === 'blur') {
      if (target.value === '') {
        label.classList.remove('active');
      }
    }
  };

  useEffect(() => {
    const formElement = document.querySelector('.form-container');

    if (!formElement) return;

    const inputs = formElement.querySelectorAll('input, textarea');

    inputs.forEach((input) => {
      input.addEventListener('keyup', handleEvent);
      input.addEventListener('blur', handleEvent);
      input.addEventListener('focus', handleEvent);
    });

    return () => {
      inputs.forEach((input) => {
        input.removeEventListener('keyup', handleEvent);
        input.removeEventListener('blur', handleEvent);
        input.removeEventListener('focus', handleEvent);
      });
    };
  }, []);

  return (
    <Styled.FormContainer className="form-container">
      <TabGroup>
        <Tab
          onClick={handleTabClick}
          target="#signup"
          isActive={activeTab === '#signup'}
        >
          Регистрация
        </Tab>
        <Tab
          onClick={handleTabClick}
          target="#login"
          isActive={activeTab === '#login'}
        >
          Вход
        </Tab>
      </TabGroup>

      <TabContent id="#signup" activeTab={activeTab}>
        <Styled.Title>Зарегистрируйся БЕСПЛАТНО</Styled.Title>
        <Styled.Form action="/" method="post">
          <div className="top-row">
            <Styled.FieldWrap>
              <Input labelText="Имя" />
            </Styled.FieldWrap>
            <Styled.FieldWrap>
              <Input labelText="Email" />
            </Styled.FieldWrap>
          </div>
          <Styled.FieldWrap>
            <Input labelText="Пароль" />
          </Styled.FieldWrap>
          <Button type="submit">Зарегистрироваться</Button>
        </Styled.Form>
      </TabContent>

      <TabContent id="#login" activeTab={activeTab}>
        <Styled.Title>С возвращением!</Styled.Title>
        <Styled.Form action="/" method="post">
          <Styled.FieldWrap>
            <Input labelText="Email" />
          </Styled.FieldWrap>
          <Styled.FieldWrap>
            <Input labelText="Пароль" />
          </Styled.FieldWrap>
          <Styled.ForgotPassword>
            <a href="#">Забыли пароль?</a>
          </Styled.ForgotPassword>
          <Button>Войти</Button>
        </Styled.Form>
      </TabContent>
    </Styled.FormContainer>
  );
};
