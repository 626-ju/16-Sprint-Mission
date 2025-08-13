export const deleteTodo = async (targetId: number) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_TENANTID}/items/${targetId}`,
    {
      method: 'DELTE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: targetId,
      }),
    },
  );
  if (!res.ok) {
    throw new Error('Failed to upload the post.');
  }

  return await res.json();
};
