import { patchTodo } from '@/service/patchTodo';
import { Items } from '@/types/itemsType';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useSwitchTodo() {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: ({ id, isCompleted }: { id: number; isCompleted: boolean }) =>
      patchTodo(id, isCompleted),

    onMutate: async ({ id, isCompleted }) => {
      await queryClient.cancelQueries({ queryKey: ['todoList'] });
      const previous = queryClient.getQueryData(['todoList']);

      queryClient.setQueryData<Items>(['todoList'], (prev) =>
        prev?.map((item) => (item.id === id ? { ...item, isCompleted: !isCompleted } : item)),
      );

      return { previous };
    },

    onError: (_0, _1, context) => {
      queryClient.setQueryData(['todoList'], context?.previous);
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['todoList'] });
    },

    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['todoList'] }),
  });

  return { mutate };
}
