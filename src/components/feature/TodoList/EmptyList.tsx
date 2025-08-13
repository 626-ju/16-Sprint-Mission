import React from 'react';
import EmptyDone from '@/assets/img/emptyDone.svg';
import EmptyTodo from '@/assets/img/emptyTodo.svg';
import styled from '@emotion/styled';

interface Props {
  variant: 'done' | 'todo';
}

function EmptyList({ variant }: Props) {
  const Component = variant === 'done' ? EmptyDone : EmptyTodo;

  return (
    <StyledEmpty>
      <Component />
      <p>{emptyMsg[variant]}</p>
    </StyledEmpty>
  );
}

export default EmptyList;

const StyledEmpty = styled.div`
  width: 588px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & svg {
    margin-top: 64px;
    margin-bottom: 24px;
  }

  & p {
    color: ${(props) => props.theme.colors.slate400};
    font-weight: 700;
    white-space: pre-line;
    text-align: center;
  }
`;

const emptyMsg = {
  done: '아직 다 한 일이 없어요.\n 해야 할 일을 체크해보세요!',
  todo: '할 일이 없어요.\n  TODO를 새롭게 추가해주세요!',
};
