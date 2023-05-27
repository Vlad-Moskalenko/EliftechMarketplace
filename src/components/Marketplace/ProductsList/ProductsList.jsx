import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ProductItem } from '../ProductItem/ProductItem';

import { getMarketProducts, getAllProducts } from 'src/services/fetchProducts';

import s from './ProductsList.module.scss';
import { Spinner } from '../../../ui-kit/Spinner/Spinner';

export const ProductsList = () => {
  const { market } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (market) {
      getMarketProducts(market).then(data => setProducts(data));
    } else {
      getAllProducts().then(data => setProducts(data));
    }
  }, [market]);

  return (
    <>
      {products.length === 0 ? (
        <Spinner />
      ) : (
        <ul className={s.list}>
          {products.map(product => (
            <ProductItem product={product} key={product._id} />
          ))}
        </ul>
      )}
    </>
  );
};
