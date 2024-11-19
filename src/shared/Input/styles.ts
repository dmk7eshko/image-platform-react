import styled from 'styled-components';

export const StyledLabel = styled.label`
  display: block;
  color: #a0b3b0;
  margin-bottom: 4px;
`;

export const StyledInput = styled.input`
  width: 100%;
  color: #fff;
  border: 2px solid rgba(160, 179, 176, 0.25);
  background-color: transparent;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;

  &:hover,
  &:active,
  &:focus {
    border: 2px solid #179b77;
  }
`;
