import { TabGroupStyled } from './styles';

type Props = {
  children: React.ReactNode;
};

export const TabGroup: React.FC<Props> = ({ children }) => (
  <TabGroupStyled>{children}</TabGroupStyled>
);
