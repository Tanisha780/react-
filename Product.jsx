import React from "react";
import { Link,Outlet } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <img src="https://cuple.ae/wp-content/uploads/2022/06/MY-WAY-INTENSE.jpg "></img>
      <Outlet></Outlet>
    </div>
  );
};

export default Product;