export const patchTodo = async (targetId: number, isCompleted: boolean) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_TENANTID}/items/${targetId}`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        isCompleted: !isCompleted,
      }),
    },
  );
  if (!res.ok) {
    throw new Error('Failed to patch the post.');
  }

  return await res.json();
};
