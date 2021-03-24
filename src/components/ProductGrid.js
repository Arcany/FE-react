import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Col } from "react-bootstrap";
import "./ProductGrid.css";
export const ProductGrid = (props) => {
  const { productList, updateCart, removeProduct } = props;
  return (
    <RenderProductList
      productList={productList}
      updateCart={updateCart}
      removeProduct={removeProduct}
    />
  );
};

const RenderProductList = (props) => {
  const { productList, updateCart, removeProduct } = props;
  return Object.keys(productList).map((i, o) => {
    const { image, name, price } = productList[i];
    const handleAddtoCart = (e) => {
      return updateCart(productList[i]);
    };
    const handleRemoveProduct = (e) => {
      return removeProduct(name);
    };
    if (image === "") return null;
    return (
      <Col key={i.toString()}>
        <Card>
          <Button
            style={{ justifySelf: "right" }}
            onClick={handleRemoveProduct}
          >
            X
          </Button>
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
