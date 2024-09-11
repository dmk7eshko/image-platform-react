import { TabStyled } from './styles';

type Props = {
  className?: string;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>, target: string) => void;
  target: string;
  isActive: boolean;
  children: React.ReactNode;
};

export const Tab: React.FC<Props> = ({
  className,
  onClick,
  target,
  isActive,
  children,
}) => (
  <TabStyled className={className} isActive={isActive}>
    <a href={target} onClick={(e) => onClick(e, target)}>
      {children}
    </a>
  </TabStyled>
);
