import Image from "next/image";
import React, { useContext, useState } from "react";
import { Button, Col, Row, Table } from "react-bootstrap";
import CartItem from "../components/CartItem";
import { DataContext } from "../store/globalState";

const Cart = () => {
  const { state, dispatch } = useContext(DataContext);
  const { cart } = state;
  const [totals, setTotals] = useState(0);
  const [count, setCount] = useState(1);
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
      <Row>
        <Col sm={8}>
          <h2>Shopping Cart</h2>
          <Table className='table my-3'>
            {/* <thead></thead> */}
            <tbody>
              {cart.map((item, index) => (
                <CartItem
                  key={index}
                  item={item}
                  dispatch={dispatch}
                  cart={cart}
                />
              ))}
            </tbody>
          </Table>
        </Col>
        <Col></Col>
      </Row>
      {/* <div className='container'>
        {
          cart?.map((item, index) => (
            <div
              key={index}
              className='d-flex p-3 border-bottom  border-dark gap-3'
            >
              <img
                src={item.Image || ""}
                alt=''
                className='rounded'
                style={{ objectFit: " cover", width: 150, height: 150 }}
              />
              <div>
                <h5>{item.Name}</h5>
                <span>{item.Price} d</span>
                <div className='d-flex gap-2 mt-3'>
                  <Button onClick={() => setCount(--count)}>-</Button>
                  <span
                    style={{ border: "1px solid #fff", padding: "5px 10px" }}
                  >
                    {item.quantity}
                  </span>
                  <Button onClick={() => setCount(++count)}>+</Button>
                </div>
              </div>
            </div>
          ))
        }
      </div> */}
    </div>
  );
};
export default Cart;
