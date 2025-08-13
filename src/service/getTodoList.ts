export const getTodoList = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_TENANTID}/items`
  );
  
  if (!res.ok) {
    throw new Error('Failed to upload the post.');
  }

  return await res.json();
};
