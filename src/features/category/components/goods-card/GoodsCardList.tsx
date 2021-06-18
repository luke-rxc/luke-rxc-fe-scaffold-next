import React from 'react';
import { RecommendUiModel } from '../../models';
import { GoodsCardItem } from './GoodsCardItem';

interface Props {
  items: Array<RecommendUiModel>;
}

export const GoodsCardList = ({ items }: Props) => {
  return (
    <div className="goods-card-container">
      <div className="inner-wrapper clearfix">
        {items.map((item) => (
          <GoodsCardItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
