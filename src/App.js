import "./App.css";
import { React, useState } from "react";
import { ProductForm } from "./components/ProductForm";
import { ProductGrid } from "./components/ProductGrid";

function App() {
  const [productList, setProductList] = useState([]);
  const updateProductList = (eachProduct) => {
    setProductList([...productList, eachProduct]);
  };
  return (
    <>
      <div>
        <h3>Products in cart: {productList.length}</h3>
        <ProductForm updateProductList={updateProductList} />
        <ProductGrid productList={productList} />
      </div>
    </>
  );
}

export default App;
