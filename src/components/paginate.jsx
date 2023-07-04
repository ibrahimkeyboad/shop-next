'use client';
import React from 'react';
import { Pagination } from 'react-bootstrap';
import Link from 'next/link';

function Paginate({ pages, page, isAdmin = false, keyword }) {
  console.log(keyword);
  return (
    pages > 1 && (
      <Pagination>
        {[...Array(pages).keys()].map((x) => (
          <Link
            key={x + 1}
            to={
              keyword ? `/search/${keyword}/page/${x + 1}` : `/page/${x + 1}`
            }>
            <Pagination.Item active={x + 1 === page}>{x + 1}</Pagination.Item>
          </Link>
        ))}
      </Pagination>
    )
  );
}

export default React.memo(Paginate);
