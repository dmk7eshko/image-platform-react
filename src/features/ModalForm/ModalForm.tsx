import React, { useRef, useState } from 'react';

import { Button } from '../../shared/Button/Button';
import { Input } from '../../shared/Input/Input';
import { Tab } from '../../shared/Tab/Tab';
import { TabContent } from '../../shared/TabContent/TabContent';
import { TabGroup } from '../../shared/TabGroup/TabGroup';

import {
  FieldWrap,
  ForgotPassword,
  Form,
  FormContainer,
  Title,
} from './styles';
import { useFormEvents } from './useFormEvents';

type Props = {
  labelText: string;
  value?: string;
};

export const ModalForm: React.FC<Props> = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<string>('#signup');

  useFormEvents(formRef);

  const handleTabClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    target: string,
  ) => {
    e.preventDefault();
    setActiveTab(target);
  };

  return (
    <FormContainer ref={formRef}>
      <TabGroup>
        <Tab
          className={activeTab === '#signup' ? 'active' : ''}
          onClick={handleTabClick}
          target="#signup"
          isActive={activeTab === '#signup'}
        >
          Регистрация
        </Tab>
        <Tab
          className={activeTab === '#login' ? 'active' : ''}
          onClick={handleTabClick}
          target="#login"
          isActive={activeTab === '#login'}
        >
          Вход
        </Tab>
      </TabGroup>

      <TabContent id="#signup" activeTab={activeTab}>
        <Title>Зарегистрируйся БЕСПЛАТНО</Title>
        <Form action="/" method="post">
          <div className="top-row">
            <FieldWrap>
              <Input labelText="Имя" />
            </FieldWrap>
            <FieldWrap>
              <Input labelText="Email" />
            </FieldWrap>
          </div>
          <FieldWrap>
            <Input labelText="Пароль" />
          </FieldWrap>
          <Button type="submit" className="button button-block">
            Зарегистрироваться
          </Button>
        </Form>
      </TabContent>

      <TabContent id="#login" activeTab={activeTab}>
        <Title>С возвращением!</Title>
        <Form action="/" method="post">
          <FieldWrap>
            <Input labelText="Email" />
          </FieldWrap>
          <FieldWrap>
            <Input labelText="Пароль" />
          </FieldWrap>
          <ForgotPassword>
            <a href="#">Забыли пароль?</a>
          </ForgotPassword>
          <Button className="button button-block">Войти</Button>
        </Form>
      </TabContent>
    </FormContainer>
  );
};
