import React from 'react';
import styled from 'styled-components/macro';
import { StyleConstants } from 'styles/StyleConstants';

export function Input({ handleChange, label, labelFor, ...props }) {
  return (
    <InputGroup>
      {label && <InputLabel htmlFor={labelFor}>{label}</InputLabel>}
      <InputWrap onChange={handleChange} {...props} />
    </InputGroup>
  );
}

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-bottom: 15px;
`;

const InputWrap = styled.input`
  padding: 10px;
`;

const InputLabel = styled.label`
  font-size: ${StyleConstants.SMALLTEXT};
`;
