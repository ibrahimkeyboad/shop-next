'use client';
import Link from 'next/link';
import Wrapper from '@/assets/wrappers/ErrorPage';
import { useEffect } from 'react';

const Error = ({ error, reset }) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <Wrapper className='full-page'>
      <div>
        <img src={'/images/not-found.svg'} alt='not found' />
        <h3>Ohh! page not found</h3>
        <p>{`We can't seem to find the page you're looking for`}</p>
        <Link to='/'>back home</Link>
      </div>
    </Wrapper>
  );
};

export default Error;
