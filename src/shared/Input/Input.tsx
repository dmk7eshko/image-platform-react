import { StyledInput, StyledLabel } from './styles';

type Props = {
  labelText: string;
  value?: string;
};

export const Input = ({ labelText, value }: Props) => {
  return (
    <>
      <StyledLabel>{labelText}</StyledLabel>
      <StyledInput
        type="text"
        value={value}
        placeholder={`Введите ${labelText}`}
      />
    </>
  );
};
