"use client"

import styled from '@emotion/styled';
import React, { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  variant: 'search' | 'todo' | 'done';
}

function Input({ variant, ...rest }: Props) {
  const Component = InputVariant[variant];

  return <Component {...rest} />;
}

export default Input;

const SearchInput = styled.input`
  border-radius: 24px;
`;
const TodoInput = styled.input`
  border-radius: 27px;
`;
const DoneInput = styled(TodoInput)`
  background-color: ${(props) => props.theme.colors.violet100};
`;

const InputVariant = {
  search: SearchInput,
  todo: TodoInput,
  done: DoneInput,
};
