export const add_to_cart = (item) => {
  console.log("adding item:", item);

  const obj = {
    name: "new_item",
    id: "prod_" + +Math.floor(Math.random() * 100000),
    quantity: +Math.floor(Math.random() * 100)
  };

  return {
    type: "ADD_ITEM",
    payload: obj
  };
};

export const remove_from_cart = (item) => {
  console.log("removing item:", item);
  return {
    type: "REMOVE_ITEM",
    payload: item
  };
};

export const login_submit = (credential_obj) => {
  console.log("LOGIN SUBMITTED :", credential_obj);
  return {
    type: "LOGIN_SUBMIT",
    payload: credential_obj
  };
};
