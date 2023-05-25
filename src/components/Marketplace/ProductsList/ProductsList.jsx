import { ProductItem } from '../ProductItem/ProductItem';

import s from './ProductsList.module.scss';

export const ProductsList = ({ products }) => {
  return (
    <ul className={s.list}>
      {products.length > 0 &&
        products.map(product => <ProductItem product={product} key={product._id} />)}
    </ul>
  );
};
