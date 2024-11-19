import { TabGroupStyled } from './styles';

type Props = {
  children: React.ReactNode;
};

export const TabGroup = ({ children }: Props) => (
  <TabGroupStyled>{children}</TabGroupStyled>
);
