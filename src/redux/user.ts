import { Dispatch } from 'react';
import { UserSchema } from '@schemas/userSchema';
import { getUser } from '../apis/getUser';

const LOGIN = 'user/LOGIN' as const;
const LOGOUT = 'user/LOGOUT' as const;

export const loginUser = (userInfo: UserSchema) => ({
  type: LOGIN,
  userInfo,
});
export const logoutUser = () => ({ type: LOGOUT });
export const loginUserAsync = () => {
  return async (dispatch: Dispatch<UserActionType>) => {
    const userInfo = await getUser();
    dispatch(loginUser(userInfo));
  };
};

export interface UserState {
  isLogin: boolean;
  userName: string | null;
}

const initState: UserState = {
  isLogin: false,
  userName: null,
};

export default function user(state = initState, action: UserActionType) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLogin: true,
        userName: action.userInfo.userName,
      };
    case LOGOUT:
      return {
        ...state,
        isLogin: false,
        userName: null,
      };

    default:
      return state;
  }
}

export type UserActionType =
  | ReturnType<typeof loginUser>
  | ReturnType<typeof logoutUser>;
