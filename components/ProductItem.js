import Link from "next/link";
import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

const ProductItem = ({ product }) => {
  const userLink = () => {
    return (
      <>
        <Link href='/view'>
          <a
            className='btn btn-info text-white'
            style={{ marginRight: "5px", flex: 1 }}
          >
            View
          </a>
        </Link>
        <Button
          className='btn btn-success ml-1 text-white'
          style={{ marginLeft: "5px", flex: 1 }}
        >
          Buy
        </Button>
      </>
    );
  };
  return (
    <Card className='mb-3'>
      <Card.Img
        variant='top'
        src={product.images[0].url}
        alt={product.images[0].url}
      />
      <Card.Body>
        <Card.Title className='card-title text-capitalize'>
          {product.title}
        </Card.Title>
        <Row>
          <Col>
            <h6 className='text-danger'>${product.price}</h6>
          </Col>
          <Col>
            {product.inStock > 0 ? (
              <h6 className='text-danger'>In Stock: {product.inStock}</h6>
            ) : (
              <h6 className='text-danger'>Out Stock</h6>
            )}
          </Col>
        </Row>
        <Card.Text className='card-text'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div className='d-flex'>{userLink()}</div>
      </Card.Body>
    </Card>
  );
};

export default ProductItem;
