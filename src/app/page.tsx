'use client';

import styled from '@emotion/styled';
import SearchForm from '@/components/feature/SearchForm';

export default function Home() {
  return (
    <StyledHome>
      <SearchForm />
    </StyledHome>
  );
}

const StyledHome = styled.main`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;
