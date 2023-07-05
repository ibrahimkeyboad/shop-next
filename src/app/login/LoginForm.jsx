'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { signIn } from 'next-auth/react';

function LoginForm({ redirect = '/' }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useRouter();

  async function loginHandler(e) {
    e.preventDefault();

    const res = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    if (res.ok && res.error) {
      console.log(res);
      setError(res.error);
    } else {
      navigate.push(redirect);
    }
  }
  console.log(error);
  return (
    <Container>
      <Row className='justify-content-md-center'>
        <Col xs={12} md={6}>
          <h1>Sign In</h1>
          <Form onSubmit={loginHandler}>
            {error && <p className='alert-danger p-2'>{error}</p>}
            <Form.Group>
              <Form.Label id='email'>Email Address</Form.Label>
              <Form.Control
                id='email'
                type='email'
                as='input'
                placeholder='Enter your email'
                value={email}
                name={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label id='password'>Password </Form.Label>
              <Form.Control
                id='password'
                as='input'
                type='password'
                placeholder='Enter your password'
                value={password}
                name={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button className='mt-4' type='submit' variant='primary'>
              Sign In
            </Button>
          </Form>
          <Row className='py-3'>
            <Col>
              New Custumer?
              <Link
                href={redirect ? `/register?redire=${redirect}` : '/register'}>
                Register
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginForm;
