import { useParams } from 'react-router-dom';
 
import AvailableProducts from "./AvailableProducts";

const ProductCategory = () => {
  const params = useParams();

  if (params.productId === 'kids') {
    return (
      <AvailableProducts
        onData="https://react-http-82e1c-default-rtdb.europe-west1.firebasedatabase.app/products//kids.json"
        onCategory="Продукти для дітей"
      />
    );
  } else if (params.productId === 'adults') {
    return (
      <AvailableProducts
        onData="https://react-http-82e1c-default-rtdb.europe-west1.firebasedatabase.app/products//adults.json"
        onCategory="Продукти для дорослих"
      />
    );
  } else if (params.productId === 'other') {
    return (
      <AvailableProducts
        onData="https://react-http-82e1c-default-rtdb.europe-west1.firebasedatabase.app/products//other.json"
        onCategory="Різне"
      />
    );
  }
};

export default ProductCategory;