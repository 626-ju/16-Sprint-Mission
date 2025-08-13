import { getTodoList } from '@/service/getTodoList';
import styled from '@emotion/styled';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import { Item } from '@/types/itemsType';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import FullCheck from '@/assets/icon/fillCheck.svg';
import EmptyList from './EmptyList';

function Done() {
  const { data } = useQuery({
    queryKey: ['todoList'],
    queryFn: getTodoList,
    staleTime: 60 * 5 * 100,
  });

  const doneItems = data?.filter((item: Item) => item.isCompleted) ?? [];

  return (
    <div>
      <Badge variant="done">DONE</Badge>
      <StyledItems>
        {doneItems.length ? (
          doneItems.map(({ id, name: content, isCompleted }: Item) => {
            return (
              <li key={id}>
                <Button variant="done">
                  <FullCheck />
                  {content}
                </Button>
              </li>
            );
          })
        ) : (
          <EmptyList variant="done" />
        )}
      </StyledItems>
    </div>
  );
}

export default Done;

export const StyledItems = styled.ul`
  margin-top: 14px;
  display: flex;
  flex-direction: column;
  gap: 14px;

  & button > svg {
    position: absolute;
    left: 12px;
    top: 8px;
  }
`;
