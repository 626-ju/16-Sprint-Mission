'use client';

import styled from '@emotion/styled';
import React from 'react';

function Input({ ...rest }) {
  return <AddInput {...rest} />;
}

export default Input;

const DefaultInput = styled.input`
  border-radius: 24px;
  outline: none;
`;

const AddInput = styled(DefaultInput)`
  border: 4px solid ${(props) => props.theme.colors.slate900};
  background-color: ${(props) => props.theme.colors.slate100};
  border-top: none;
  border-left: none;
  height: 56px;
  width: 100%;
`;
