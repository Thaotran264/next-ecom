import Head from "next/head";
import Link from "next/link";
import React from "react";
import { Button, Form } from "react-bootstrap";

const Login = () => {
  return (
    <div>
      <Head>
        <title>Sign in Page</title>
      </Head>
      <Form className='mx-auto my-4' style={{ maxWidth: "500px" }}>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control type='email' placeholder='Enter email' />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Password' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicCheckbox'>
          <Form.Check type='checkbox' label='Check me out' />
        </Form.Group>
        <Button variant='primary' type='submit' className='btn btn-dark w-100'>
          Login
        </Button>
        <p className='my-2'>
          {"You don't have an account? "}
          <Link href='/register'>
            <a style={{ color: "crimson" }}>Register</a>
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default Login;
