'use client';

import styled from '@emotion/styled';
import React from 'react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { createTodo } from '@/service/createTodo';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

interface FormValues {
  todo: string;
}

function SearchForm() {
  const queryClient = useQueryClient();
  const { register, handleSubmit, reset } = useForm<FormValues>({ mode: 'onSubmit' });

  const { mutate } = useMutation({
    mutationFn: (newTodo: string) => createTodo(newTodo),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todoList'] });
      reset();
    },
  });

  const addTodo = (data: FormValues) => {
    mutate(data.todo);
  };

  return (
    <StyledForm onSubmit={handleSubmit(addTodo)}>
      <Input type='text' {...register('todo', searchValidate)} placeholder='할 일을 입력해주세요' />
      <Button variant='create'>추가하기</Button>
    </StyledForm>
  );
}

export default SearchForm;

const searchValidate = {
  validate: (value: string) => {
    if (value.trim().length === 0) {
      toast.error('검색어를 입력해주세요.');
      return false;
    } else {
      return true;
    }
  },
};

const StyledForm = styled.form`
  margin-top: 24px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 20px;

  & > button {
    width: 168px;
    height: 56px;
  }
`;
