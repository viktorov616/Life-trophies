import * as React from 'react';
import styled from 'styled-components';
import Label from 'src/forms/Label';

interface TextAreaFieldProps {
  id: string;
  label?: string;
  name: string;
  onChange: (event: React.FormEvent<HTMLTextAreaElement>) => void;
  value: string;
}

const TextArea = styled.textarea`
  border: 1px solid white;
  background: #1d4282;
  color: white;
  padding: 8px 5px;
  font-family: 'Humanist777';
  font-size: 16px;
  line-height: 1.5;
  resize: none;
  height: calc(6em + 18px); // 4 rows
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextAreaField: React.SFC<TextAreaFieldProps> = ({
  id,
  label,
  name,
  onChange,
  value,
}) => (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <TextArea
        name={name}
        id={id}
        value={value}
        onChange={onChange}
      />
    </Wrapper>
  );

export default TextAreaField;
