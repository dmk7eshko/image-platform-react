import { TabContentStyled } from './styles';

type Props = {
  id: string;
  activeTab: string;
  children: React.ReactNode;
};

export const TabContent: React.FC<Props> = ({ id, activeTab, children }) => (
  <TabContentStyled
    id={id}
    style={{ display: activeTab === id ? 'block' : 'none' }}
  >
    {children}
  </TabContentStyled>
);
