export interface ProductItemType {
  product: {
    pre_spec: any;
    in_wishlist: boolean
    is_top_sell: number;
    discount: number;
    id: string;
    name: string;
    primary_image: string;
    default_price: number;
    stock_type: string;
  };
  pre_spec : {
    spec: string[]
  }
}
