import React from 'react';
import { RecommendUiModel } from '../../models';

interface Props {
  item: RecommendUiModel;
}

export const GoodsCardItem = ({
  item: { id, name, discountRate, price, picture, brand },
}: Props) => {
  return (
    <div className="goods-card">
      <a
        className="image-wrapper"
        href={`/goods/${id}`}
        target="_blank"
        rel="noreferrer"
      >
        <img
          alt="goods"
          className="goods-image"
          src={`https://usercontents-d.styleshare.io/images/${picture.id}/${picture.originalWidth}x${picture.originalHeight}`}
        />
      </a>
      <div className="info-group">
        <a
          href={`/brands/${brand.id}`}
          className="goods-brand"
          target="_blank"
          rel="noreferrer"
        >
          {brand.name}
        </a>
        &nbsp;
        <a
          className="goods-link"
          href={`/goods/${id}`}
          target="_blank"
          rel="noreferrer"
        >
          <p className="goods-name">{name}</p>
        </a>
        <p className="goods-price discounted">
          <span className="goods-discount">{discountRate}%&nbsp;</span>
          {price}원
        </p>
      </div>
    </div>
  );
};
