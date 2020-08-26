const default_data = {
  login_access: false,
  credentials: [
    {
      username: "abc",
      pass: 123
    },
    {
      username: "a",
      pass: "a"
    }
  ]
};

export const login_reducer = (state = default_data, action) => {
  let updated_state = { ...state };
  switch (action.type) {
    case "LOGIN_SUBMIT":
      const username = action.payload.username;
      const pass = action.payload.pass;
      let access = false;
      updated_state.credentials.forEach((c) => {
        if (access) return;
        if (c.username === username && c.pass === pass) access = true;
      });

      return {
        ...updated_state,
        login_access: access
      };
    default:
      return updated_state;
  }
};
