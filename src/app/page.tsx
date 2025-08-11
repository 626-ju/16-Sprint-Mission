"use client";

import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import styled from "@emotion/styled";

export default function Home() {
  return (
    <StyledHome>
      <div>
        <Input variant="search" type="text" />
        <Button variant="create">추가하기</Button>
      </div>
    </StyledHome>
  );
}

const StyledHome = styled.main`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  & > div {
    margin-top: 24px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 20px;

    & > button {
      width: 168px;
      height: 56px;
    }
  }
`;
