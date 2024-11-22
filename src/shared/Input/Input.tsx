import { StyledInput, StyledLabel } from './styles';

interface InputProps {
  labelText: string;
  name?: string;
  value?: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
  labelText,
  name,
  value,
  type,
  onChange,
}: InputProps) => {
  return (
    <>
      <StyledLabel>{labelText}</StyledLabel>
      <StyledInput
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={`Введите ${labelText}`}
      />
    </>
  );
};
