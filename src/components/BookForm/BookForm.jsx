import { useForm } from 'react-hook-form';
import { Box, Button } from 'rebass/styled-components';
import { Label, Input } from '@rebass/forms/styled-components';
import Loader from 'react-loader-spinner';

export const BookForm = ({ defaultValues, onFormSubmit, isLoading }) => {
  const { register, handleSubmit } = useForm({ defaultValues });

  const onSubmit = (data) => {
    onFormSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ marginBottom: 3 }}>
        <Label htmlFor="title">Title</Label>
        <Input {...register('title')} id="title" type="text" />
      </Box>
      <Box sx={{ marginBottom: 3 }}>
        <Label htmlFor="author">Author</Label>
        <Input id="author" {...register('author')} type="text" />
      </Box>
      <Button variant="primary" mr={2}>
        {isLoading ? <Loader type="ThreeDots" color="#fff" height={10} /> : 'Submit'}
      </Button>
    </form>
  );
};
