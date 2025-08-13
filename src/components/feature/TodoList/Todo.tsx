import Badge from '@/components/ui/Badge';
import React from 'react';
import { StyledItems } from './Done';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getTodoList } from '@/service/getTodoList';
import { Item } from '@/types/itemsType';
import Button from '@/components/ui/Button';
import EmptyCheck from '@/assets/icon/emptyCheck.svg';
import EmptyList from './EmptyList';
import { patchTodo } from '@/service/patchTodo';
import { useSwitchTodo } from '@/hooks/useSwitchTodo';

function Todo() {
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ['todoList'],
    queryFn: getTodoList,
    staleTime: 60 * 5 * 100,
  });

  const { mutate } = useSwitchTodo();

  const todoItems = data?.filter((item: Item) => item.isCompleted === false) ?? [];

  return (
    <div>
      <Badge variant='todo'>TO DO</Badge>
      <StyledItems>
        {todoItems.length ? (
          todoItems?.map(({ id, name: content, isCompleted }: Item) => {
            console.log(id);
            return (
              <li key={id}>
                <Button variant='todo' onClick={() => mutate({ id, isCompleted })}>
                  <EmptyCheck />
                  {content}
                </Button>
              </li>
            );
          })
        ) : (
          <EmptyList variant='todo' />
        )}
      </StyledItems>
    </div>
  );
}

export default Todo;
