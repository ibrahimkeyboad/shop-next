'use client';

import {
  Col,
  Row,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { url } from '@/utils/api';
import { useAddToCartQuery } from '@/context/cart/api';

function CartComponents({ id, quantity }) {
  const navigate = useRouter();
  const { isLoading, data } = useAddToCartQuery(id, quantity);
  const [cartItems, setCartItems] = useState([]);
  console.log('data', data);

  function checkoutHandler() {
    navigate.push('/login?redirect=shipping');
  }

  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems?.length === 0 ? (
          <>
            <h3>Your cart is empty</h3>
            <Link href='/'>Go back</Link>
          </>
        ) : (
          <ListGroup variant='flush'>
            {cartItems?.map((item) => (
              <ListGroup.Item key={item.product}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Link href={`/product${item.product}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>${item.price}</Col>
                  <Col md={2}>
                    <Form.Control
                      as='select'
                      value={item.quantity}
                      onChange={(e) => {
                        addToCart({
                          id: item.product,
                          quantity: +e.target.value,
                        });
                      }}>
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                    <Button
                      type='button'
                      variant='light'
                      onClick={() => removeCartHandler(item.product)}>
                      <FaTrash />
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>
                Subtotal (
                {cartItems.reduce((acc, item) => acc + item.quantity, 0)})
              </h3>
              $
              {cartItems
                .reduce((acc, item) => acc + item.quantity * item.price, 0)
                .toFixed(2)}
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                type='button'
                className='btn-block'
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}>
                Proceed Checkout
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
}

export default CartComponents;
