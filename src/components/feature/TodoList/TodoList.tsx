'use client';

import styled from '@emotion/styled';
import React from 'react';
import Todo from './Todo';
import Done from './Done';

function TodoList() {
  return (
    <StyledTodo>
      <Todo />
      <Done />
    </StyledTodo>
  );
}

export default TodoList;

const StyledTodo = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;
