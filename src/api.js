export const getAllBooks = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_SERVER}/books`);

  if (!response.ok) {
    throw new Error('Something went wrong');
  }

  return response.json();
};

export const getBook = async ({ queryKey }) => {
  const [, { id }] = queryKey;

  const response = await fetch(`${process.env.REACT_APP_API_SERVER}/books/${id}`);

  if (!response.ok) {
    throw new Error('Something went wrong');
  }

  return response.json();
};

export const removeBook = async ({ id }) => {
  const response = await fetch(`${process.env.REACT_APP_API_SERVER}/books/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error(response.json().message);
  }

  return true;
};

export const updateBook = async ({ id, ...data }) => {
  const response = await fetch(`${process.env.REACT_APP_API_SERVER}/books/${id}`, {
    method: 'PATCH',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(response.json().message);
  }

  return response.json();
};

export const createBook = async ({ data }) => {
  const response = await fetch(`${process.env.REACT_APP_API_SERVER}/books`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(response.json().message);
  }

  return response.json();
};
