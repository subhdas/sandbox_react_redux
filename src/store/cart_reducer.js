const default_data = {
  sideDrawerOpen: false,
  testdata: [1, 2, 3, 4, 5],
  cartdata: {
    products: [
      {
        name: "shaving_cream",
        id: "prod_0",
        quantity: +Math.floor(Math.random() * 100)
      },
      {
        name: "shampoo",
        id: "prod_1",
        quantity: +Math.floor(Math.random() * 100)
      },
      {
        name: "television",
        id: "prod_2",
        quantity: +Math.floor(Math.random() * 100)
      },
      {
        name: "room freshner",
        id: "prod_3",
        quantity: +Math.floor(Math.random() * 100)
      },
      {
        name: "cereals",
        id: "prod_4",
        quantity: +Math.floor(Math.random() * 100)
      },
      {
        name: "salad",
        id: "prod_5",
        quantity: +Math.floor(Math.random() * 100)
      }
    ]
  }
};

export const cart_reducer = (state = default_data, action) => {
  let updated_state = { ...state };
  let cartdata = { ...updated_state.cartdata };
  switch (action.type) {
    case "CHANGE_DATA":
      const data = action.data;
      return { data };
    case "ADD_ITEM":
      cartdata.products.push(action.payload);
      return {
        ...updated_state,
        cartdata
      };

    case "REMOVE_ITEM":
      let prod = cartdata.products;
      let updated_prod = prod.filter((p) => p.id !== action.payload);
      return {
        ...updated_state,
        cartdata: {
          products: updated_prod
        }
      };
    default:
      return updated_state;
  }
};
