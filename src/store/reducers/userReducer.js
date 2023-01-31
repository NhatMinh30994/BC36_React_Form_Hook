import {
  ADD_USER,
  DELETE_USER,
  SET_SELECTED_USER,
  UPDATE_USER,
} from "../types/userTypes";

const STATE_DEFAULT = {
  userList: [
    {
      id: 1,
      username: "minh",
      fullName: "Minh Tran",
      password: "proboy123",
      phoneNumber: "0772945680",
      email: "minhtran@gmail.com",
      type: "Admin",
    },
    {
      id: 2,
      username: "anh",
      fullName: "Anh Tran",
      password: "proboy123",
      phoneNumber: "0772945680",
      email: "anhtran@gmail.com",
      type: "Client",
    },
  ],
  selectedUser: null,
};

export const userReducer = (state = STATE_DEFAULT, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_USER: {
      const data = [...state.userList];
      data.push({
        ...payload,
        id: Date.now(),
      });

      state.userList = data;

      break;
    }

    case SET_SELECTED_USER: {
      state.selectedUser = payload;

      break;
    }

    case UPDATE_USER: {
      const data = [...state.userList];
      data.push({
        ...payload,
        id: Date.now(),
      });

      state.userList = data;
      state.selectedUser = null;

      break;
    }

    case DELETE_USER: {
      const data = [...state.userList];
      const idx = data.findIndex((ele) => ele.id === payload.id);
      data.splice(idx, 1);

      state.userList = data;

      break;
    }

    default:
      break;
  }

  return { ...state };
};
