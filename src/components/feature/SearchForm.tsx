'use client';

import styled from '@emotion/styled';
import React from 'react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { createTodo } from '@/service/createTodo';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';

interface FormValues {
  todo: string;
}

function SearchForm() {
  const { register, handleSubmit, reset } = useForm<FormValues>();

  const { mutate } = useMutation({
    mutationFn: (newTodo: string) => createTodo(newTodo),
    onSuccess: () => reset(),
  });

  const addTodo = (data: FormValues) => {
    mutate(data.todo);
  };

  return (
    <StyledForm onSubmit={handleSubmit(addTodo)}>
      <Input type='text' {...register('todo')} />
      <Button variant='create'>추가하기</Button>
    </StyledForm>
  );
}

export default SearchForm;

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
