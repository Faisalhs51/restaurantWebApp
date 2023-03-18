export const fetchCart = () => {
  const cartInfo =
    localStorage.getItem("cartItems") !== "undefined"
      ? JSON.parse(localStorage.getItem("cartItems"))
      : localStorage.removeItem("cartItems");

  return cartInfo ? cartInfo : [];
};

export const fetchUser = () => {
  const userInfo =
    localStorage.getItem("userToken") !== "undefined"
      ? JSON.parse(localStorage.getItem("userToken"))
      : localStorage.clear();

  return userInfo;
};
