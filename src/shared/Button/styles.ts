import styled, { css } from 'styled-components';

export const ButtonStyled = styled.button<{
  buttonType?: 'button' | 'submit' | 'link';
}>`
  background: #5cb85c;
  border: none;
  color: white;
  padding: 15px;
  text-transform: uppercase;
  font-size: 14px;
  cursor: pointer;
  border-radius: 5px;
  transition: background 0.3s;
  margin-top: 20px;

  &.button-block {
    width: 100%;
  }

  &:hover {
    background: #4cae4c;
  }

  ${(props) =>
    props.buttonType === 'link' &&
    css`
      background: none;
      color: #007bff;
      padding: 0;
      text-transform: none;
      font-size: inherit;
      border: none;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
        background: none;
      }
    `}
`;
