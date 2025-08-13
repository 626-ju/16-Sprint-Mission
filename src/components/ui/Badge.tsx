'use client';

import styled from '@emotion/styled';
import React, { ReactNode } from 'react';

interface props {
  variant: 'todo' | 'done';
  children: ReactNode;
}

function Badge({ variant, children }: props) {
  const Component = badgeVariant[variant];

  return <Component>{children}</Component>;
}

export default Badge;

const DoneBadge = styled.label`
  display: inline-block;
  border-radius: 23px;
  /* 폰트패밀리 HS산토끼체 */
  padding: 8px 27px;
  font-size: ${(props) => props.theme.fontSizes.lg};
  color: ${(props) => props.theme.colors.amber300};
  background-color: ${(props) => props.theme.colors.green700};
`;

const TodoBadge = styled(DoneBadge)`
  color: ${(props) => props.theme.colors.green700};
  background-color: ${(props) => props.theme.colors.lime300};
`;

const badgeVariant = {
  done: DoneBadge,
  todo: TodoBadge,
};
