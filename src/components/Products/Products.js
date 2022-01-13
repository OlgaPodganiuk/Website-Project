import { Fragment } from "react";
import { Link } from 'react-router-dom'

import AvailableProducts from "./AvailableProducts";
import classes from "./AvailableProducts.module.css";
import Card from "../UI/Card";

const Products = () => {
  return (
    <section className={classes.products}>
      <Card>
        <Link to="/product-category/kids">
          <h2>Продукти для дітей</h2>
        </Link>
        <Link to="/product-category/adults">
          <h2>Продукти для дорослих</h2>
        </Link>
        <Link to="/product-category/other">
          <h2>Різне</h2>
        </Link>
      </Card>
      {/* <AvailableProducts
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
      /> */}
    </section>
  );
};

export default Products;
