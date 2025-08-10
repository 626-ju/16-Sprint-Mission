'use client';

import styled from '@emotion/styled';
import React from 'react';
import Logo from '@/assets/img/logo.svg';

import Link from 'next/link';

function Gnb() {
  return (
    <StyledHeader>
      <Link href="/">
        <Logo />
      </Link>
    </StyledHeader>
  );
}

export default Gnb;

const StyledHeader = styled.header`
  max-width: 1200px;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 320px;
`;
