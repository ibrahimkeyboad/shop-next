'use client';
import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Product from './product';
import Paginate from './paginate';

function PageIndex({ products, params }) {
  const pages = params.pages;
  const page = params.page;

  return (
    <>
      <Row>
        {products?.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product {...product} />
          </Col>
        ))}
      </Row>
      <Paginate pages={pages} page={page} />
    </>
  );
}

export default PageIndex;
