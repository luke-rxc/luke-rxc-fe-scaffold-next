import { useQuery } from 'react-query';
import { getRecommend } from '../apis/getRecommend';
import { toRecommendUiModel } from '../models/recommend.model';

export const RECOMMED_LIST_CACHE = 'recommend/get-recommend-list';

export const useRecommentService = () => {
  const { data, isLoading } = useQuery(RECOMMED_LIST_CACHE, getRecommend);
  return { recommendItems: data?.data.map(toRecommendUiModel), isLoading };
};
