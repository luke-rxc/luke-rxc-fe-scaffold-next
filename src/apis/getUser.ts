import { UserSchema } from '../schemas/userSchema';
import { baseAPI } from '../utils/clients/baseAPI';

export const getUser = () => {
  return baseAPI.get<UserSchema>('/user');
};
