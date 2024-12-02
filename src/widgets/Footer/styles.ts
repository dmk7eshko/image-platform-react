import styled from 'styled-components';

import { footerHeight } from '../../app/variables';

export const FooterContainer = styled.footer`
  height: ${footerHeight};
  background-color: #333;
  color: #fff;
  padding: 1rem;
  text-align: center;
`;

export const FooterNav = styled.nav`
  margin-bottom: 1rem;

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
    gap: 1rem;
  }

  li {
    display: inline;
  }

  a {
    text-decoration: none;
    color: #fff;
    font-size: 1rem;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export const FooterText = styled.p`
  font-size: 0.875rem;
`;
