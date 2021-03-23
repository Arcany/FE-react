import "./App.css";
import {React,useState} from "react";
import { ProductForm } from "./components/ProductForm";

function App() {
  const [productList, setProductList] = useState([]);
  const updateProductList = (eachProduct) => {
    setProductList([...productList, eachProduct]);
  };
  console.log(productList);
  return (
    <>
      <div>
        <ProductForm updateProductList={updateProductList}/>
      </div>
    </>
  );
}

export default App;
