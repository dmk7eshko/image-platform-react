import styled from 'styled-components';

export const TabStyled = styled.li<{ isActive?: boolean }>`
  margin: 0;
  min-width: 50%;
  height: 40px;
  cursor: pointer;
  list-style: none;
  background: rgba(160, 179, 176, 0.25);

  button {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000;
    cursor: pointer;

    ${({ isActive }) =>
      isActive &&
      `
        color: #fff;
        background: #179b77;
      `}
  }
`;
