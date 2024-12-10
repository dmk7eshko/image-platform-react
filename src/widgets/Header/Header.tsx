import { HeaderContainer, Logo, Nav, SearchButton } from './styles';

export const Header = () => {
  return (
    <>
      <HeaderContainer>
        <Logo>IPR React</Logo>
        <Nav>
          {/*  Тут навигация и все остальное, что должно быть в шапке */}
        </Nav>
        <SearchButton>Search</SearchButton>
      </HeaderContainer>
    </>
  );
};
