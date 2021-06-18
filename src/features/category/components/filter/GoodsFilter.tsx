/* eslint-disable react/no-unused-prop-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Filter } from '@components/filter';
import { FilterWrapper } from './FilterWrapper';

interface Props {
  isOpen: boolean;
  onSelect: () => void | undefined;
  onOpen: () => void;
  onClose: () => void;
}

export const GoodsFilter = ({ isOpen, onOpen, onClose }: Props) => {
  return (
    <>
      <div className="sort-filter clearfix">
        <div className="dropdown is-open basic-select">
          <button
            type="button"
            className="select-opener clearfix"
            onClick={onOpen}
          >
            <div className="vertical-center left">
              <div className="middle">
                <span className="placeholder">인기순</span>
              </div>
            </div>
            <div className="vertical-center right">
              <div className="middle">
                <span className="caret category-sprite dropdown_arrow2" />
              </div>
            </div>
          </button>
        </div>
      </div>
      <Filter open={isOpen} onClose={onClose}>
        <FilterWrapper>
          <ul className="select-items">
            <li role="presentation" className="select-item selected">
              인기순(인기많은순)
            </li>
            <li role="presentation" className="select-item">
              최신순(최근등록순)
            </li>
            <li role="presentation" className="select-item">
              할인율(할인율높은순)
            </li>
            <li role="presentation" className="select-item">
              가격↓(가격낮은순)
            </li>
            <li role="presentation" className="select-item">
              가격↑(가격높은순)
            </li>
          </ul>
        </FilterWrapper>
      </Filter>
    </>
  );
};
