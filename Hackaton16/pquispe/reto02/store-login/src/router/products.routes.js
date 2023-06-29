import { LayoutProducts, ProductList, ShoppingCart } from '@/views/products';

export default {
  path: '/products',
  component: LayoutProducts,
  children: [
    { path: '', component: ProductList },
    { path: 'shopping-cart', component: ShoppingCart },
  ],
};
