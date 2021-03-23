import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
export const ProductForm = (props) => {
  const { updateProductList } = props;
  const initialProductState = { image: "", name: "", price: "" };
  const [product, setProduct] = useState(initialProductState);
  const { image, name, price } = product;
  const handleInputChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  const handleFinalSubmit = (e) => {
    updateProductList(product);
  };
  return (
    <Form>
      <Form.Group>
        <Form.File
          name="image"
          id="productImage"
          label="Product image: "
          onChange={handleInputChange}
          value={image}
        />
        <br />
        <Form.Control
          name="name"
          type="text"
          placeholder="Product name: "
          onChange={handleInputChange}
          value={name}
        />
        <br />
        <Form.Control
          name="price"
          type="text"
          placeholder="Product price: "
          onChange={handleInputChange}
          value={price}
        />
        <br />
      </Form.Group>
      <Button onClick={handleFinalSubmit}>Submit</Button>
    </Form>
  );
};
