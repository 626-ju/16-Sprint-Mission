import { patchTodo } from '@/service/patchTodo';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useSwitchTodo() {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: ({ id, isCompleted }: { id: number; isCompleted: boolean }) =>
      patchTodo(id, isCompleted),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['todoList'] }),
  });

  return { mutate };
}
