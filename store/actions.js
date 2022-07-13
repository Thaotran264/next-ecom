export const ACTIONCS = {
  NOTIFY: "NOTIFY",
  AUTH: "AUTH",
  ADD_CART: "ADD_CART",
  ADD_MODAL: "ADD_MODAL",
};
export const addToCart = (product, cart) => {
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

export const decrease = (data, id) => {
  const newData = [...data];
  newData.forEach((item) => {
    if (item.Id === id) item.quantity -= 1;
  });

  return { type: "ADD_CART", payload: newData };
};

export const increase = (data, id) => {
  const newData = [...data];
  newData.forEach((item) => {
    if (item.Id === id) item.quantity += 1;
  });
  return { type: "ADD_CART", payload: newData };
};

export const deleteItem = (data, id, type) => {
  const newData = data.filter((item) => item.Id !== id);
  return { type: type, payload: newData };
};
