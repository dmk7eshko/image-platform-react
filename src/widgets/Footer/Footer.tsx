import { FooterContainer, FooterNav, FooterText } from './styles';

export const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterNav>
          <ul>
            <li>
              <a href="#privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="#terms">Terms of Service</a>
            </li>
          </ul>
        </FooterNav>
        <FooterText>&copy; 2024</FooterText>
      </FooterContainer>
    </>
  );
};
