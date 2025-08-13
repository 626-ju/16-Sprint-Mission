'use client';

import styled from '@emotion/styled';
import SearchForm from '@/components/feature/SearchForm';
import TodoList from '@/components/feature/TodoList/TodoList';

export default function Home() {
  return (
    <StyledHome>
      <SearchForm />
      <TodoList />
    </StyledHome>
  );
}

const StyledHome = styled.main`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;
