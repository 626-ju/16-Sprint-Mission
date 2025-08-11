"use client";

import styled from "@emotion/styled";
import React from "react";
import Logo from "@/assets/img/logo.svg";

import Link from "next/link";

function Gnb() {
  return (
    <StyledHeader>
      <div>
        <Link href="/">
          <Logo />
        </Link>
      </div>
    </StyledHeader>
  );
}

export default Gnb;

const StyledHeader = styled.header`
  margin: 0 auto;
  background-color: white;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    width: 100%;
    height: 60px;
    margin: 0 auto;
  }
`;
