import { useState } from 'react';

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
          <Styled.FieldWrap>
            <Input labelText="Имя" />
          </Styled.FieldWrap>
          <Styled.FieldWrap>
            <Input labelText="Email" />
          </Styled.FieldWrap>
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
