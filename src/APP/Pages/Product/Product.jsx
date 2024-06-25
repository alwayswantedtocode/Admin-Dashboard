import React from "react";
import SinglePage from "../../../Components/SinglePage/SinglePage";
import { singleProduct } from "../../../Components/data";

const Product = () => {
  return (
    <div>
      <SinglePage {...singleProduct} />
    </div>
  );
};

export default Product;
