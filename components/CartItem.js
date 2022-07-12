import Link from "next/link";
import React from "react";
import { Button } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";

const CartItem = ({ item, dispatch, cart }) => {
  console.log(item);
  return (
    <tr className='d-flex align-center justify-content-between'>
      <td style={{ width: "100px", overflow: "hidden" }}>
        <img
          src={item.Image}
          className='img-thumbnail w-100'
          style={{ minWidth: "80px", height: "80px", objectFit: "cover" }}
        />
      </td>
      <td style={{ minWidth: 200 }} className='d-flex align-items-center'>
        <div className='d-flex flex-column '>
          <h5 className='text-capitalize text-secondary'>
            <Link href=''>
              <a>{item.Name}</a>
            </Link>
          </h5>
          <h6 className='text-danger'>{item.quantity * item.Price}d</h6>
        </div>
      </td>
      <td
        className='d-flex justify-content-center align-items-center'
        style={{ minWidth: 150, cursor: "pointer" }}
      >
        <div className='d-flex justify-content-center align-items-center'>
          <Button variant='outline-primary'>-</Button>
          <span className='px-3'>{item.quantity}</span>
          <Button variant='outline-primary'>+</Button>
        </div>
      </td>
    </tr>
  );
};

export default CartItem;
