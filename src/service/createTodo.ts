export const createTodo = async (newTodo: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_TENANTID}/items`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: newTodo,
      }),
    }
  );
  if (!res.ok) {
    throw new Error('Failed to upload the post.');
  }

  return await res.json();
};
