import { Fragment } from "react";

import AvailableProducts from "./AvailableProducts";

const Products = () => {
  return (
    <Fragment>
      <AvailableProducts
        onData="https://react-http-82e1c-default-rtdb.europe-west1.firebasedatabase.app/products//kids.json"
        onCategory="Продукти для дітей"
      />
      <AvailableProducts
        onData="https://react-http-82e1c-default-rtdb.europe-west1.firebasedatabase.app/products//adults.json"
        onCategory="Продукти для дорослих"
      />
      <AvailableProducts
        onData="https://react-http-82e1c-default-rtdb.europe-west1.firebasedatabase.app/products//other.json"
        onCategory="Різне"
      />
    </Fragment>
  );
};

export default Products;
