export type CartItem = {
  id: string;
  brand_model: string;
  color: string;
  img: string;
  price: number;
};

export type CartSliceState = {
  items: CartItem[];
  totalAmount: number;
};
