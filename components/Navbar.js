import React, { useContext } from "react";
import Link from "next/link";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { useRouter } from "next/router";
import Image from "next/image";
import { DataContext } from "../store/globalState";
const NavbarComponent = () => {
  const { state, dispatch } = useContext(DataContext);
  const { cart, auth } = state;
  const router = useRouter();
  const isActive = (route) => {
    if (route == router.pathname) {
      return " active";
    } else {
      return "";
    }
  };
  return (
    <Navbar
      className=''
      style={{ zIndex: 9, backgroundColor: "rgba(55,55,55, 0.7)" }}
      expand='lg'
    >
      <Container className='d-flex justify-content-between text-white'>
        <Link href='/' passHref>
          <Navbar.Brand className='text-white'>
            <Image height={30} width={100} src='/logo2.png' />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls='navbarScroll' />

        <Navbar.Collapse id='basic-navbar-nav'>
          {/* <Form className='d-flex'>
            <FormControl
              type='search'
              placeholder='Search'
              className='me-2'
              aria-label='Search'
            />
            <Button variant='outline-success'>Search</Button>
          </Form> */}
          <Nav
            className='ms-auto my-2 my-lg-0 text-white'
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link href='/cart' passHref>
              <Nav.Link
                className={
                  "d-flex align-items-center text-white" + isActive("/cart")
                }
              >
                <span>{cart.length}</span>
                <FaShoppingCart className='me-2' />
                Cart
              </Nav.Link>
            </Link>
            <Link href='/login' passHref>
              <Nav.Link
                className={
                  "d-flex align-items-center text-white" + isActive("/cart")
                }
              >
                <FaUser className='me-2' />
                User
              </Nav.Link>
            </Link>
            {/* <NavDropdown title='User' id='navbarScrollingDropdown'>
              <NavDropdown.Item href='#action3'>Login</NavDropdown.Item>
              <NavDropdown.Item href='#action4'>Log Out</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action5'>Setting</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
