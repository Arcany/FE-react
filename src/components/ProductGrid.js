import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Button from "react-bootstrap/Button";
export const ProductGrid = (props) => {
  const { productList } = props;
  return (
    <div>
      <CardDeck>
        <RenderProductList productList={productList} />
      </CardDeck>
    </div>
  );
};
const RenderProductList = (props) => {
  const { productList } = props;
  return Object.keys(productList).map((i, o) => {
    const { image, name, price } = productList[i];
    if (image === "") return null;
    return (
      <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{price}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button>Add to cart</Button>
        </Card.Footer>
      </Card>
    );
  });
};
