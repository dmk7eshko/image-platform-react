import styled from 'styled-components';

export const TabStyled = styled.li<{ isActive?: boolean }>`
  margin: 0;
  min-width: 50%;
  height: 40px;
  cursor: pointer;
  list-style: none;
  background: rgba(160, 179, 176, 0.25);
  ${(props) =>
    props.isActive &&
    `
      background: #179b77;
  `}
  a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #a0b3b0;
    ${(props) =>
      props.isActive &&
      `
        color: #fff;
      `}
  }
`;
