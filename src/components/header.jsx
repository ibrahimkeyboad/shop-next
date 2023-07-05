'use client';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import Link from 'next/link';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

import SearchingBox from './searching';

function Header() {
  const user = null;

  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container className='align-items-center'>
          <Link className='navbar-brand' href='/'>
            Shops
          </Link>

          <div
            id='basic-navbar-nav'
            className='align-items-center navbar-collapse collapse'>
            <SearchingBox />
            <Nav className='ml-auhref'>
              <Link className='nav-link ml-5' href='/cart'>
                <FaShoppingCart /> Cart
              </Link>
              {user ? (
                <NavDropdown title={title} id='username'>
                  <Link href='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </Link>
                  <NavDropdown.Item>Logut</NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Link className='nav-link ml-2' href='/login'>
                  <FaUser />
                  Sign In
                </Link>
              )}
            </Nav>
          </div>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
