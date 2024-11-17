import React from 'react';

import { TabContentStyled } from './styles';

type Props = {
  id: string;
  activeTab: string;
  children: React.ReactNode;
};

export const TabContent = ({ id, activeTab, children }: Props) => (
  <TabContentStyled
    id={id}
    style={{ display: activeTab === id ? 'block' : 'none' }}
  >
    {children}
  </TabContentStyled>
);
