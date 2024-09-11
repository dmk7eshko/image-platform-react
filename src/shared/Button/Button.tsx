import { ButtonStyled } from './styles';

type Props = {
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  children: React.ReactNode;
};

export const Button: React.FC<Props> = ({
  className,
  type = 'button',
  onClick,
  children,
}) => (
  <ButtonStyled className={className} type={type} onClick={onClick}>
    {children}
  </ButtonStyled>
);
