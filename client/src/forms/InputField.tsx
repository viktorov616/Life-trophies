import * as React from 'react';
import styled from 'styled-components';
import Label from './Label';

interface InputFieldProps {
  id: string;
  label?: string;
  name: string;
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
  value: string;
}

const Input = styled.input`
  border: 1px solid white;
  background: #1d4282;
  color: white;
  padding: 8px 5px;
  font-family: 'Humanist777';
  font-size: 16px;
  line-height: 1.5;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputField: React.SFC<InputFieldProps> = ({
  id,
  label,
  name,
  onChange,
  value,
}) => (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input
        name={name}
        id={id}
        value={value}
        onChange={onChange}
      />
    </Wrapper>
  );

export default InputField;
