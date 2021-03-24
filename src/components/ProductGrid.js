import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Col } from "react-bootstrap";
import "./ProductGrid.css"
export const ProductGrid = (props) => {
  const { productList, updateCart } = props;
  return (
    <RenderProductList productList={productList} updateCart={updateCart} />
  );
};

const RenderProductList = (props) => {
  const { productList, updateCart } = props;
  return Object.keys(productList).map((i, o) => {
    const { image, name, price } = productList[i];
    const handleAddtoCart = (e) => {
      return updateCart(productList[i]);
    };
    if (image === "") return null;
    return (
      <Col>
        <Card key={i.toString()}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{price}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button onClick={handleAddtoCart}>Add to cart</Button>
          </Card.Footer>
        </Card>
      </Col>
    );
  });
};
