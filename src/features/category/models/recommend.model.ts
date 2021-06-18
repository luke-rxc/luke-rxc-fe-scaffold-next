import { RecommendSchema } from '../schemas';

/**
 * 추천 UI Model
 */
export interface RecommendUiModel {
  id: number;
  name: string;
  isDiscounted: boolean;
  discountRate: number;
  price: string;
  priceOriginal: string;
  status: string;
  picture: {
    id: string;
    originalHeight: number;
    originalWidth: number;
  };
  brand: {
    name: string;
    id: number;
  };
  approved: boolean;
}

/**
 * 추천 schema -> ui model로 convert
 */
export function toRecommendUiModel(item: RecommendSchema): RecommendUiModel {
  return {
    ...item,
    price: item.price.toLocaleString(),
    priceOriginal: item.priceOriginal.toLocaleString(),
  };
}
