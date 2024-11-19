import React from 'react';

import { TabStyled } from './styles';

type Props = {
  onClick: (target: string) => void;
  target: string;
  isActive: boolean;
  children: React.ReactNode;
};

export const Tab = ({ onClick, target, isActive, children }: Props) => (
  <TabStyled isActive={isActive}>
    <button
      type="button"
      onClick={() => onClick(target)}
      className={isActive ? 'active' : ''}
    >
      {children}
    </button>
  </TabStyled>
);
