import Link from "next/link";
import React from "react";
import { Button } from "react-bootstrap";
import { BiTrash } from "react-icons/bi";
import { decrease, increase } from "../store/actions";

const CartItem = ({ item, dispatch, cart, setShowModal }) => {
  console.log(item);
  const handleDelButton = () => {
    setShowModal(true);
    dispatch({
      type: "ADD_MODAL",
      payload: {
        data: cart,
        id: item.Id,
        title: item.Name,
        type: "ADD_CART",
      },
    });
  };
  return (
    <tr className=''>
      <td style={{ width: "100px", overflow: "hidden" }}>
        <img
          src={item.Image}
          className='img-thumbnail w-100'
          style={{ minWidth: "80px", height: "80px", objectFit: "cover" }}
        />
      </td>
      <td style={{ minWidth: 200 }} className='d-flex align-items-center'>
        <div className=''>
          <h5 className='text-capitalize text-secondary'>
            <Link href=''>
              <a>{item.Name}</a>
            </Link>
          </h5>
          <h6 className='text-danger'>{item.Price} đ</h6>
        </div>
      </td>
      <td className='' style={{ minWidth: 150, cursor: "pointer" }}>
        <div className=''>
          <Button
            variant='outline-secondary'
            disabled={item.quantity == 1 ? true : false}
            onClick={() => dispatch(decrease(cart, item.Id))}
          >
            -
          </Button>
          <span className='px-3'>{item.quantity}</span>
          <Button
            variant='outline-secondary'
            // disabled={item.quantity == 1 ? true : false}
            onClick={() => dispatch(increase(cart, item.Id))}
          >
            +
          </Button>
        </div>
      </td>
      <td
        style={{ minWidth: 250, cursor: "pointer" }}
        // className='d-flex align-items-center justify-content-center'
      >
        <BiTrash
          className='text-danger fs-3'
          data-toggle='modal'
          data-target='#exampleModal'
          onClick={handleDelButton}
        />
      </td>
    </tr>
  );
};

export default CartItem;
