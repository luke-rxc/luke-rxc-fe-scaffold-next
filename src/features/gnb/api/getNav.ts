import { baseAPI } from '@utils/clients/baseAPI';
import { NavSchema } from '../schemas/nav.schema';

interface NavResponse {
  data: Array<NavSchema>;
}

export const getNav = () => {
  return baseAPI.get<NavResponse>('/nav');
};
