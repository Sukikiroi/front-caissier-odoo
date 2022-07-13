import { Box, Center } from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatepagenumber, paginateData } from '../redux/slices';

function paginate(array, page_size, page_number) {
  // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
  return array.slice((page_number - 1) * page_size, page_number * page_size);
}

const Pagination = ({ page, data }) => {
  const dispatch = useDispatch();
  return (
    <Center
      w={50}
      h={50}
      borderRadius="50%"
      bg="blue.400"
      ml={5}
      color="white"
      as="button"
      fontWeight={'bold'}
      onClick={() => dispatch(paginateData(paginate(data, 5, page)))}
    >
      {page}
    </Center>
  );
};

export default Pagination;
