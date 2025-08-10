'use client';

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'create' | 'update' | 'delete';
  children: ReactNode;
}

function Button({ variant, children, ...rest }: Props) {
  return (
    <StyledButton variant={variant} {...rest}>
      {children}
    </StyledButton>
  );
}

export default Button;

const StyledButton = styled.button<Props>`
  width: 168px;
  height: 52px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSizes.md};
  border-radius: 24px;
  border: 2px solid ${(props) => props.theme.colors.slate900};

  /* 등록버튼 */
  ${(props) =>
    props.variant === 'create' &&
    css`
      color: ${props.theme.colors.slate900};
      background-color: ${props.theme.colors.slate200};
    `}

  /* 수정버튼 */
  ${(props) =>
    props.variant === 'update' &&
    css`
      color: ${props.theme.colors.slate900};
      background-color: ${props.theme.colors.slate200};
    `}
      
      
  /* 삭제버튼 */
  ${(props) =>
    props.variant === 'delete' &&
    css`
      color: white;
      background-color: ${props.theme.colors.rose500};
    `}
`;
