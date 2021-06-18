/**
 * 추천 Schema
 */
export interface RecommendSchema {
  id: number;
  name: string;
  isDiscounted: boolean;
  discountRate: number;
  price: number;
  priceOriginal: number;
  status: string; // 'normal';
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
