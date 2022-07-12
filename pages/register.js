import Head from "next/head";
import React from "react";
import { Button, Form } from "react-bootstrap";

const Register = () => {
  return (
    <div>
      <Head>
        <title>Sign in Page</title>
      </Head>
      <Form className='mx-auto my-4, py-4' style={{ maxWidth: "500px" }}>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control type='email' placeholder='Enter email' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>User Name</Form.Label>
          <Form.Control type='username' placeholder='Enter Username' />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Password' />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Re-Password</Form.Label>
          <Form.Control type='password' placeholder='Re-Password' />
        </Form.Group>

        <Button variant='primary' type='submit' className='btn btn-dark w-100'>
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Register;
