import { useMutation, useQuery } from 'react-query';
import { useParams, useHistory } from 'react-router-dom';
import { Box, Heading } from 'rebass/styled-components';
import { getBook, updateBook } from '../../api';
import { BookForm, Container, Error, Loader } from '../../components';

export const UpdateBook = () => {
  const { id } = useParams();
  const history = useHistory();

  const { data, error, isLoading, isError } = useQuery(['book', { id }], getBook);
  const { mutateAsync, isLoading: isMutating } = useMutation(updateBook);

  const onFormSubmit = async (data) => {
    await mutateAsync({ ...data, id });
    history.push('/');
  };

  if (isLoading) return <Loader />;

  if (isError) return <Error message={error.message} />;

  return (
    <Container>
      <Box sx={{ py: 3 }}>
        <Heading sx={{ marginBottom: 3 }}>Update Book</Heading>
        <BookForm defaultValues={data} onFormSubmit={onFormSubmit} isLoading={isMutating} />
      </Box>
    </Container>
  );
};
