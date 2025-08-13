'use client';

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ButtonHTMLAttributes, ReactNode } from 'react';

// type ButtonVariant = 'create' | 'update' | 'delete';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'create' | 'update' | 'delete' | 'todo' | 'done';
  children: ReactNode;
}

function Button({ variant, children, ...rest }: Props) {
  const Component = ButtonVariant[variant];

  return <Component {...rest}>{children}</Component>;
}

export default Button;

const DefaultButton = styled.button`
  width: 168px;
  height: 52px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSizes.md};
  border-radius: 24px;
  border: 2px solid ${(props) => props.theme.colors.slate900};
  border-bottom: 4px solid ${(props) => props.theme.colors.slate900};
  border-right: 4px solid ${(props) => props.theme.colors.slate900};
`;

const CreateButton = styled(DefaultButton)`
  color: white;
  background-color: ${(props) => props.theme.colors.violet600};
`;

const UpdateButton = styled(DefaultButton)`
  color: ${(props) => props.theme.colors.slate900};
  background-color: ${(props) => props.theme.colors.slate200};
`;

const DeleteButton = styled(DefaultButton)`
  color: white;
  background-color: ${(props) => props.theme.colors.rose500};
`;

const TodoButton = styled.button`
  border-radius: 27px;
  border: 2px solid ${(props) => props.theme.colors.slate900};
  width: 588px;
  height: 50px;
  color: ${(props) => props.theme.colors.slate800};
  text-align: left;
  padding-left: 60px;
`;

const DoneButton = styled(TodoButton)`
  width: 588px;
  height: 50px;
  background-color: ${(props) => props.theme.colors.violet100};
`;

const ButtonVariant = {
  create: CreateButton,
  delete: DeleteButton,
  update: UpdateButton,
  todo: TodoButton,
  done: DoneButton,
};
