'use client';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useRouter } from 'next/navigation';

function SearchingBox() {
  const navigate = useRouter();
  const [keyword, setKeyword] = React.useState('');

  function searchHandler(e) {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/search/${keyword}`);
    } else {
      navigate.push('/');
    }
  }
  return (
    <Form className='d-flex align-items-start w-50' onSubmit={searchHandler}>
      <Form.Control
        type='search'
        placeholder='Search Product....'
        onChange={(e) => setKeyword(e.target.value)}
        className='mr-sm-2 ml-sm-5'
      />
      <Button type='submit' variant='outline-success' className='p-2'>
        Search
      </Button>
    </Form>
  );
}

export default SearchingBox;
