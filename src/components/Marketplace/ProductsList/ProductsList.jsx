import { useEffect, useState } from 'react';
import { ProductItem } from '../ProductItem/ProductItem';
import { marketApi } from '../../../services/axiosConfig';
import { useParams } from 'react-router-dom';

import s from './ProductsList.module.scss';

export const ProductsList = () => {
  const { market } = useParams();
  const [products, setProducts] = useState([]);

  console.log(market);

  useEffect(() => {
    marketApi.get(`/products/${market}`).then(({ data }) => setProducts(data));
  }, [market]);

  return (
    <ul className={s.list}>
      {products.length > 0 &&
        products.map(product => <ProductItem product={product} key={product._id} />)}
    </ul>
  );
};
