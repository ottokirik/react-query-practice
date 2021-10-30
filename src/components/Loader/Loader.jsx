import { Flex } from 'rebass/styled-components';
import LoaderSpinner from 'react-loader-spinner';

import { Container } from '..';

export const Loader = () => {
  return (
    <Container>
      <Flex py={5} justifyContent="center">
        <LoaderSpinner type="ThreeDots" color="#ccc" height={30} />
      </Flex>
    </Container>
  );
};
