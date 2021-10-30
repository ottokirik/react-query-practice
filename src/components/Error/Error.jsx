import { Flex, Text } from 'rebass/styled-components';

export const Error = ({ message }) => {
  return (
    <Flex py={5} justifyContent="center">
      <Text fontSize={5} color="red">
        {message}
      </Text>
    </Flex>
  );
};
