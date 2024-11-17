import { ButtonStyled } from './styles';

type Props = {
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  children: React.ReactNode;
};

export const Button = ({ type = 'button', onClick, children }: Props) => (
  <ButtonStyled type={type} onClick={onClick}>
    {children}
  </ButtonStyled>
);
