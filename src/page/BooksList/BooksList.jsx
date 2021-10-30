import { useQuery } from 'react-query';
import { Flex } from 'rebass/styled-components';
import { getAllBooks } from '../../api';
import { Container, Error, Loader } from '../../components';
import { BookItem } from './BookItem';

export const BooksList = () => {
  const { data, error, isLoading, isError } = useQuery('books', getAllBooks);

  if (isLoading) return <Loader />;

  if (isError) return <Error message={error.message} />;

  return (
    <Container>
      <Flex flexDirection="column" alignItems="center">
        {data.map((book) => (
          <BookItem {...book} key={book.id} />
        ))}
      </Flex>
    </Container>
  );
};
