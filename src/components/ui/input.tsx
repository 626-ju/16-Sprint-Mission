'use client';

import styled from '@emotion/styled';
import React, { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  variant: 'create' | 'todo' | 'done';
}

function Input({ variant, ...rest }: Props) {
  const Component = InputVariant[variant];

  return <Component {...rest} />;
}

export default Input;

const DefaultInput = styled.input`
  border-radius: 24px;
  outline: none;
`;

const CreateInput = styled(DefaultInput)`
  border: 4px solid ${(props) => props.theme.colors.slate900};
  background-color: ${(props) => props.theme.colors.slate100};
  border-top: none;
  border-left: none;
  height: 56px;
  width: 100%;
`;

const TodoInput = styled(DefaultInput)``;

const DoneInput = styled(DefaultInput)`
  background-color: ${(props) => props.theme.colors.violet100};
`;

const InputVariant = {
  create: CreateInput,
  todo: TodoInput,
  done: DoneInput,
};
