import React from "react";
import { Button } from "react-bootstrap";
import { AiOutlineArrowUp } from "react-icons/ai";
const ScrollTopButton = () => {
  return (
    <Button
      onClick={(e) => window.scrollTo(0, 0)}
      className='position-absolute end-0'
    >
      <AiOutlineArrowUp />
    </Button>
  );
};

export default ScrollTopButton;
