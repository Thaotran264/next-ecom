import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { Button, Col, Row, Table } from "react-bootstrap";
import CartItem from "../components/CartItem";
import { DataContext } from "../store/globalState";

const Cart = () => {
  const { state, dispatch, setShowModal } = useContext(DataContext);
  const { cart } = state;
  const [totals, setTotals] = useState(0);
  const [count, setCount] = useState(1);

  useEffect(() => {
    const getTotal = () => {
      const res = cart?.reduce((prev, item) => {
        return prev + item.Price * item.quantity;
      }, 0);
      setTotals(res);
    };
    getTotal();
  }, [cart]);
  if (cart.length == 0)
    return (
      <div className='container mt-2 position-relative d-flex flex-column justify-content-center'>
        <img
          src='https://images.pexels.com/photos/296916/pexels-photo-296916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          className='rounded'
        />
        <p className='bg-dark bg-opacity-10 text-center fs-2 text-light position-absolute start-0 end-0'>
          No Items
        </p>
      </div>
    );

  // console.log("dât", data);
  return (
    <div className='container'>
      <Row className='p-3'>
        <Col sm={8}>
          <h2>Shopping Cart</h2>
          <hr />
          <Table className='table my-3' striped bordered hover>
            {/* <thead></thead> */}
            <tbody>
              {cart?.map((item, index) => (
                <CartItem
                  setShowModal={setShowModal}
                  key={index}
                  item={item}
                  dispatch={dispatch}
                  cart={cart}
                />
              ))}
            </tbody>
          </Table>
        </Col>
        <Col>
          <h5>
            Total: <span className='text-danger'>{totals} đ</span>
          </h5>
        </Col>
      </Row>
    </div>
  );
};
export default Cart;
