import React from 'react';
import { StorePageStyle, GoodsCardList } from '../components';
import { GoodsFilter } from '../components/filter/GoodsFilter';
import { useFilter } from '../hooks';
import { useRecommentService } from '../services/useRecommentService';

export const CategoryProductContainer = () => {
  const { recommendItems, isLoading } = useRecommentService();
  const { open, onOpenFilter, onCloseFilter } = useFilter();

  if (recommendItems === undefined || isLoading) {
    return (
      <StorePageStyle>
        <div>Loading...</div>
      </StorePageStyle>
    );
  }

  return (
    <StorePageStyle>
      <article className="store-page page" id="app">
        <div className="category-container clearfix">
          <GoodsFilter
            isOpen={open}
            onOpen={onOpenFilter}
            onClose={onCloseFilter}
            onSelect={() => {}}
          />
          <GoodsCardList items={recommendItems} />
        </div>
      </article>
    </StorePageStyle>
  );
};
