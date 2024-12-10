import styled from 'styled-components';

import { footerHeight, headerHeight } from '../../app/variables';

export const Content = styled.main`
  min-height: calc(100vh - ${headerHeight} - ${footerHeight});
  padding: 2rem;
  background-color: #fbe9db;
`;

export const Section = styled.section`
  margin-bottom: 2rem;

  h2 {
    margin-bottom: 1rem;
    font-size: 2rem;
    color: #333;
  }

  p {
    font-size: 1rem;
    color: #666;
    line-height: 1.6;
  }
`;
