import "./App.css";
import { React, useState } from "react";
import { ProductForm } from "./components/ProductForm";
import { ProductGrid } from "./components/ProductGrid";
import { Col, Container, Row } from "react-bootstrap";

function App() {
  const [productList, setProductList] = useState([]);
  const [cart, setCart] = useState([]);
  const updateProductList = (eachProduct) => {
    setProductList([...productList, eachProduct]);
  };
  const removeProduct = (name) => {
    setProductList(productList.filter((item) => item.name !== name)); //unique id of an item would be better here
  };
  const updateCart = (eachProduct) => {
    setCart([...cart, eachProduct]);
  };
  console.log(productList);
  return (
    <>
      <div className="App">
        <Container fluid>
          <Row>
            <Col>
              <h1>Add product form</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>Products in cart: {cart.length.toString()}</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <ProductForm updateProductList={updateProductList} />
            </Col>
          </Row>
          <Row>
            <ProductGrid
              productList={productList}
              updateCart={updateCart}
              removeProduct={removeProduct}
            />
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;
