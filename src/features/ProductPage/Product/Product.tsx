import { ProductDefault } from 'features/ProductPage/Product/Default/Default';
import { ProductPageProductComponent } from '../types';

export type ProductProps = {
  component: ProductPageProductComponent;
};

export const Product = ({ component, ...props }: ProductProps) => {
  return <ProductDefault {...props} />;
};
