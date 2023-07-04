import LoginForm from './LoginForm';
import { Col, Container, Row } from 'react-bootstrap';

function LoginScreen() {
  return (
    <Container>
      <Row className='justify-content-md-center'>
        <Col xs={12} md={6}>
          <h1>Sign In</h1>
          <LoginForm />
        </Col>
      </Row>
    </Container>
  );
}

export default memo(LoginScreen);
