import { ButtonStyled } from './styles';

type Props = {
  type?: 'button' | 'submit';
  buttonType?: 'button' | 'link';
  onClick?: () => void;
  children: React.ReactNode;
};

export const Button = ({
  type = 'button',
  onClick,
  children,
  buttonType,
}: Props) => (
  <ButtonStyled type={type} onClick={onClick} buttonType={buttonType}>
    {children}
  </ButtonStyled>
);
