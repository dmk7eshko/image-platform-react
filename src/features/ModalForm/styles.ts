import styled from 'styled-components';

export const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: #fff;
  margin: 0 0 20px 0;
`;

export const FormContainer = styled.div`
  background: rgba(19, 35, 47, 0.9);
  padding: 40px;
  max-width: 400px;
  height: fit-content;
  border-radius: 4px;
  box-shadow: 0 4px 10px 4px rgba(19, 35, 47, 0.3);
  color: #fff;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FieldWrap = styled.div`
  margin-bottom: 15px;
`;

export const ForgotPassword = styled.p`
  text-align: center;
  margin-top: 10px;
  a {
    color: #5cb85c;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
`;
