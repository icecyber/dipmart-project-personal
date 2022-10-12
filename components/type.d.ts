export interface ProductItemType {
  product: {
    in_wishlist: boolean
    is_top_sell: number;
    discount: number;
    id: string;
    name: string;
    primary_image: string;
    default_price: number;
    stock_type: string;
  };
}
