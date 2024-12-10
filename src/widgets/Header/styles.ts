import styled from 'styled-components';

import { headerHeight } from '../../app/variables';

export const HeaderContainer = styled.header`
  height: ${headerHeight};
  background-color: #fff;
  border-bottom: 1px solid #e1e1e1;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const Nav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    gap: 1rem;
    margin: 0;
    padding: 0;
  }

  li {
    display: inline;
  }

  a {
    text-decoration: none;
    color: #333;
    font-size: 1rem;
  }

  a:hover {
    color: #007bff;
  }
`;

export const SearchButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #0056b3;
  }
`;
