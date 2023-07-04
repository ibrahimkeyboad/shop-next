'use client';
import Rating from '@/components/rating';
import axios from 'axios';
import Link from 'next/link';
import React, { useState } from 'react';
import { Button, Col, Form, ListGroup, Row } from 'react-bootstrap';

function ProductReview({ reviews = [] }) {
  const user = null;
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);

  async function submitHandler(e) {
    e.preventDefault();
    const reviewData = {
      rating,
      review,
    };
    axios.post(`/products/${id}/review`);
    dispatch(createReview({ id: match.id, reviewData }));
  }

  return (
    <Row>
      <Col md={6}>
        <h3 className='p-0 my-3'>Reviews</h3>
        {reviews?.length === 0 && (
          <p className='alert-info p-2'>No reviews yet!</p>
        )}
        <ListGroup variant='flush'>
          {reviews?.map((review) => (
            <ListGroup.Item key={review.id}>
              <strong>{review.user.name}</strong>
              <Rating value={review.rating} />
              <p>{review.createdAt.substring(0, 10)}</p>
              <p>{review.review}</p>
            </ListGroup.Item>
          ))}
          <ListGroup.Item>
            <h4>Write a customer review</h4>
            {user ? (
              <Form onSubmit={submitHandler}>
                <Form.Group>
                  <Form.Label>Rating</Form.Label>
                  <Form.Control
                    as='select'
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}>
                    <option value={1}>1- Poor</option>
                    <option value={2}>2- Fair</option>
                    <option value={3}>3- Good</option>
                    <option value={4}>4- Very Good</option>
                    <option value={5}>5- Excellent</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Review</Form.Label>
                  <Form.Control
                    as='textarea'
                    rows={3}
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                  />
                </Form.Group>
                <Button type='submit' className='mt-2' variant='primary'>
                  Submit
                </Button>
              </Form>
            ) : (
              <p>
                Please
                <Link href='/login' prefetch={false}>
                  Login
                </Link>
              </p>
            )}
          </ListGroup.Item>
        </ListGroup>
      </Col>
    </Row>
  );
}

export default ProductReview;
