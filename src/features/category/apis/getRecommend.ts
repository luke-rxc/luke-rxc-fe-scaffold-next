import { baseAPI } from '@utils/clients/baseAPI';
import { RecommendSchema } from '../schemas';

interface RecommendResponse {
  data: Array<RecommendSchema>;
}

export const getRecommend = () => {
  return baseAPI.get<RecommendResponse>('/goods');
};
