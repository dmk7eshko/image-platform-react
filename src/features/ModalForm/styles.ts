import styled from 'styled-components';

interface FieldWrapProps {
  isError: boolean;
}

export const Styled = {
  Title: styled.h2`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    color: #fff;
    margin: 0 0 20px 0;
  `,

  FormContainer: styled.div`
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
  `,

  Form: styled.form`
    display: flex;
    flex-direction: column;
  `,

  FieldWrap: styled.div<FieldWrapProps>`
    margin-bottom: 1rem;
    input {
      border-color: ${({ isError }) => (isError ? 'red' : '')};
    }
  `,

  ForgotPassword: styled.p`
    text-align: center;
    margin-top: 10px;
    a {
      color: #5cb85c;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
  `,

  ErrorText: styled.p`
    color: red;
    font-size: 0.875rem;
    margin-top: 0.25rem;
  `,
};
