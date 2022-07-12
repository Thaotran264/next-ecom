export const ACTIONCS = {
  NOTIFY: "NOTIFY",
  AUTH: "AUTH",
  ADD_CART: "ADD_CART",
};
export const addToCart = (product, cart) => {
  console.log("cart", cart);
  const check = cart?.every((item) => item.Id !== product.Id);
  if (!check) {
    return {
      type: "NOTIFY",
      payload: { error: "The product has been added to cart" },
    };
  }
  return {
    type: "ADD_CART",
    payload: [...cart, { ...product, quantity: 1 }],
  };
};
