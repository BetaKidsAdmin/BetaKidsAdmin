import { SetRequired } from 'type-fest';
import { ProductBase } from 'types/product';
import { Shopify_Product, Shopify_ProductVariantConnection } from 'types/takeshape';

export type QuickAddShopifyProduct = Pick<
  Shopify_Product,
  | 'id'
  | 'handle'
  | 'title'
  | 'description'
  | 'descriptionHtml'
  | 'requiresSellingPlan'
  | 'priceRangeV2'
  | 'featuredImage'
  | 'publishedAt'
  | 'totalInventory'
  | 'totalVariants'
  | 'options'
  | 'sellingPlanGroupCount'
  | 'sellingPlanGroups'
> & {
  variants: Shopify_ProductVariantConnection;
};

export type QuickAddProduct = SetRequired<ProductBase, 'variants'>;
export type QuickAddReviewsIoReviews = any;

export type QuickAdd = {
  productHandle: string;
};
