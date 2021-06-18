import styled from 'styled-components';

export const StorePageStyle = styled.div`
  margin-top: 100px;

  ${({ theme }) => theme.mediaQuery.lg} {
    margin-top: 120px;
  }

  .category-filter {
    position: relative;
  }

  .category-filter:after,
  .category-filter:before {
    content: ' ';
    display: table;
  }

  .category-filter:after {
    clear: both;
  }

  @media (min-width: 1180px) {
    .category-filter {
      float: left;
    }
  }

  @media (min-width: 940px) and (max-width: 1179px) {
    .category-filter {
      float: left;
    }
  }

  @media (min-width: 700px) and (max-width: 939px) {
    .category-filter {
      margin-top: 30px;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: -34px;
      width: 700px;
      clear: both;
    }
  }

  @media (min-width: 0) and (max-width: 699px) {
    .category-filter {
      margin-top: 16px;
      margin-top: 5vw;
      margin-left: 16px;
      margin-left: 5vw;
      margin-right: 16px;
      margin-right: 5vw;
      margin-bottom: -26px;
      margin-bottom: -8.125vw;
      clear: both;
    }
  }

  .category-filter .third-categories-wrapper {
    position: relative;
    z-index: 1;
  }

  @media (min-width: 0) and (max-width: 939px) {
    .category-filter .second-categories,
    .category-filter .third-categories {
      float: left;
    }
  }

  .category-filter .second-categories .placeholder,
  .category-filter .third-categories .placeholder {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  @media (min-width: 0) and (max-width: 939px) {
    .category-filter .second-categories .placeholder,
    .category-filter .third-categories .placeholder {
      max-width: 54px;
      max-width: 16.875vw;
    }
  }

  .category-filter .second-categories {
    padding-top: 32px;
    padding-left: 12px;
    padding-bottom: 32px;
    width: 220px;
    background: white;
  }

  @media (min-width: 0) and (max-width: 939px) {
    .category-filter .second-categories {
      padding: 0;
    }
  }

  @media (min-width: 0) and (max-width: 699px) {
    .category-filter .second-categories {
      width: 100px;
      width: 31.25vw;
    }
  }

  .category-filter .second-categories .category-label {
    color: #21242a;
    font-size: 16px;
    font-weight: bold;
  }

  .category-filter .third-categories {
    position: absolute;
    top: -46px;
    left: 100%;
    margin-left: -13px;
    padding-top: 16px;
    padding-left: 12px;
    padding-right: 12px;
    padding-bottom: 16px;
    background-color: white;
    border-color: #f0f1f4;
    border-style: solid;
    border-radius: 3px;
    border-width: 1px;
  }

  @media (min-width: 0) and (max-width: 939px) {
    .category-filter .third-categories {
      position: static;
      margin-left: 0;
      padding: 0;
      border: 0;
    }
  }

  @media (min-width: 700px) and (max-width: 939px) {
    .category-filter .third-categories {
      width: 240px;
    }
  }

  @media (min-width: 0) and (max-width: 699px) {
    .category-filter .third-categories {
      width: 100px;
      width: 31.25vw;
    }
  }

  .category-filter .third-categories:before,
  .category-filter .third-categories:after {
    content: '';
    position: absolute;
    top: 20px;
    left: -10px;
    border-style: solid;
  }

  @media (min-width: 700px) and (max-width: 939px) {
    .category-filter .third-categories:before,
    .category-filter .third-categories:after {
      display: none;
    }
  }

  @media (min-width: 0) and (max-width: 699px) {
    .category-filter .third-categories:before,
    .category-filter .third-categories:after {
      display: none;
    }
  }

  .category-filter .third-categories:before {
    border-color: transparent #f0f1f4 transparent transparent;
    border-width: 10px 10px 10px 0;
  }

  .category-filter .third-categories:after {
    margin-left: 1px;
    border-color: transparent white transparent transparent;
    border-width: 10px 10px 10px 0;
  }

  .category-filter .second-category,
  .category-filter .third-category {
    margin-top: 2px;
    padding-left: 12px;
    width: 140px;
    border-radius: 3px;
    cursor: pointer;
    text-align: left;
  }

  .category-filter .second-category:first-child,
  .category-filter .third-category:first-child {
    margin-top: 0;
  }

  .category-filter .second-category:hover,
  .category-filter .third-category:hover {
    background-color: #fcfcfd;
  }

  .category-filter .second-category:active,
  .category-filter .third-category:active {
    background-color: rgba(19, 21, 24, 0.1);
  }

  .category-filter .second-category.selected,
  .category-filter .third-category.selected {
    cursor: default;
  }

  .category-filter .second-category.selected:hover,
  .category-filter .third-category.selected:hover {
    background-color: rgba(19, 21, 24, 0.1);
  }

  .category-filter .second-category.selected > .category-name,
  .category-filter .third-category.selected > .category-name {
    font-weight: bold;
    color: #131518;
  }

  .category-filter .second-category .category-name,
  .category-filter .third-category .category-name {
    font-size: 14px;
    line-height: 28px;
    user-select: none;
  }

  .basic-select {
    position: relative;
    display: inline-block;
  }

  .basic-select.inline {
    margin-left: -1px;
  }

  @media (min-width: 0) and (max-width: 939px) {
    .basic-select.inline .select-opener {
      border-radius: 0;
    }
  }

  .basic-select.inline:first-child {
    margin-left: 0;
  }

  @media (min-width: 0) and (max-width: 939px) {
    .basic-select.inline:first-child .select-opener {
      border-radius: 3px 0 0 3px;
    }
  }

  @media (min-width: 0) and (max-width: 939px) {
    .basic-select.inline:last-child .select-opener {
      border-radius: 0 3px 3px 0;
    }
  }

  .basic-select.is-open .select-opener .caret {
    transform: rotate(180deg);
  }

  .basic-select .select-opener {
    display: block;
    padding-left: 18px;
    padding-right: 18px;
    height: 18px;
    background-color: white;
    border-color: #f0f1f4;
    border-style: solid;
    border-width: 0 1px;
    font-size: 0;
    outline: none;
  }

  @media (min-width: 0) and (max-width: 939px) {
    .basic-select .select-opener {
      width: 100%;
      border-color: #f0f1f4;
      border-style: solid;
      border-radius: 3px;
      border-width: 1px;
    }
  }

  @media (min-width: 700px) and (max-width: 939px) {
    .basic-select .select-opener {
      padding-left: 12px;
      padding-right: 12px;
      height: 34px;
    }
  }

  @media (min-width: 0) and (max-width: 699px) {
    .basic-select .select-opener {
      padding-left: 12px;
      padding-left: 3.75vw;
      padding-right: 12px;
      padding-right: 3.75vw;
      height: 26px;
      height: 8.125vw;
    }
  }

  .basic-select .select-opener .placeholder,
  .basic-select .select-opener .caret {
    display: inline-block;
    color: #21242a;
    font-size: 14px;
  }

  .basic-select .select-opener .placeholder {
    margin-right: 8px;
    vertical-align: middle;
  }

  @media (min-width: 0) and (max-width: 939px) {
    .basic-select .select-opener .placeholder {
      float: left;
    }
  }

  @media (min-width: 0) and (max-width: 699px) {
    .basic-select .select-opener .placeholder {
      font-size: 12px;
      font-size: 3.75vw;
    }
  }

  .basic-select .select-opener .vertical-center {
    height: 100%;
  }

  .basic-select .select-opener .caret {
    transition: transform 0.4s ease;
  }

  @media (min-width: 0) and (max-width: 939px) {
    .basic-select .select-opener .caret {
      float: right;
    }
  }

  .basic-select .select-panel {
    position: absolute;
    top: 100%;
    left: 50%;
    margin-top: 12px;
    margin-left: -90px;
    width: 180px;
  }

  @media (min-width: 0) and (max-width: 768px) {
    .basic-select .select-panel {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 500;
      margin-top: 0;
      margin-left: 0;
      width: auto;
      height: 100%;
      height: 100vh;
      background-color: rgba(34, 34, 34, 0.6);
      overflow: hidden;
    }
  }

  .basic-select .select-items {
    padding-top: 6px;
    padding-bottom: 6px;
    background-color: white;
    border-color: #f0f1f4;
    border-radius: 3px;
    border-style: solid;
    border-width: 1px;
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.1);
  }

  @media (min-width: 0) and (max-width: 768px) {
    .basic-select .select-items {
      padding-top: 0;
      padding-bottom: 0;
      height: 100%;
      background-color: white;
      border: 0;
      overflow: hidden;
      transition: margin 0.4s ease;
    }
  }

  @media (min-width: 0) and (max-width: 768px) {
    .basic-select .select-items.expand-up {
      margin-top: 0 !important;
    }
  }

  @media (min-width: 0) and (max-width: 768px) {
    .basic-select .select-items.items-sticked {
      overflow: auto;
    }
  }

  .basic-select .select-item {
    color: #21242a;
    cursor: pointer;
    font-size: 14px;
    line-height: 36px;
    text-align: center;

    &:hover {
      cursor: url(https://cdn2.unrealengine.com/play-text-forest-240x240-210c4fb48dc2.png?resize=1&w=120&h=120&quality=high)
          0 0,
        auto;
    }
  }

  @media (min-width: 0) and (max-width: 768px) {
    .basic-select .select-item {
      padding-top: 16px;
      padding-top: 5vw;
      padding-bottom: 16px;
      padding-bottom: 5vw;
      border-top-color: #f0f1f4;
      border-top-style: solid;
      border-top-width: 1px;
      font-size: 14px;
      font-size: 4.375vw;
      line-height: 1;
    }
  }

  @media (min-width: 0) and (max-width: 768px) {
    .basic-select .select-item.selected {
      font-weight: bold;
    }
  }

  @media (min-width: 0) and (max-width: 768px) {
    .basic-select .select-item:first-child {
      border-top: 0;
    }
  }

  .basic-select .select-item:hover {
    background-color: #fcfcfd;
  }

  @media (min-width: 0) and (max-width: 768px) {
    .basic-select .select-item:hover {
      background-color: transparent;
    }
  }

  .featured-goods-list {
    margin-top: 36px;
    border-bottom-color: #f0f1f4;
    border-bottom-style: solid;
    border-bottom-width: 0;
  }

  @media (min-width: 700px) and (max-width: 939px) {
    .featured-goods-list {
      margin-top: 30px;
      border-bottom-width: 1px;
    }
  }

  @media (min-width: 0) and (max-width: 699px) {
    .featured-goods-list {
      margin-top: 16px;
      margin-top: 5vw;
      border-bottom-width: 1px;
    }
  }

  .featured-goods-list .label {
    color: #21242a;
    font-size: 18px;
    font-weight: bold;
  }

  @media (min-width: 700px) and (max-width: 939px) {
    .featured-goods-list .label {
      width: 700px;
      margin-left: auto;
      margin-right: auto;
    }
  }

  @media (min-width: 0) and (max-width: 699px) {
    .featured-goods-list .label {
      width: auto;
      margin-left: 16px;
      margin-left: 5vw;
      font-size: 14px;
      font-size: 4.375vw;
    }
  }

  .featured-goods-list .goods-card-container {
    margin-top: 18px;
    width: 940px;
  }

  @media (min-width: 940px) and (max-width: 1179px) {
    .featured-goods-list .goods-card-container {
      width: 700px;
    }
  }

  @media (min-width: 700px) and (max-width: 939px) {
    .featured-goods-list .goods-card-container {
      margin-top: 18px;
      margin-bottom: 20px;
      overflow-x: auto;
      overflow-y: hidden;
    }

    .featured-goods-list .goods-card-container::-webkit-scrollbar {
      display: none;
    }
  }

  @media (min-width: 0) and (max-width: 699px) {
    .featured-goods-list .goods-card-container {
      width: auto;
      margin-top: 12px;
      margin-top: 3.75vw;
      margin-left: 0;
      margin-right: 0;
      margin-bottom: 12px;
      margin-bottom: 5vw;
      overflow-x: auto;
      overflow-y: hidden;
    }

    .featured-goods-list .goods-card-container::-webkit-scrollbar {
      display: none;
    }
  }

  .featured-goods-list .load-more-trigger {
    display: none;
  }

  @media (min-width: 0) and (max-width: 768px) {
    .featured-goods-list .load-more-trigger {
      display: block;
      float: left;
      margin: 0;
      width: 0;
      height: 0;
    }
  }

  .featured-goods-list .pagination {
    padding-top: 12px;
    font-size: 0;
    text-align: center;
    clear: both;
  }

  @media (min-width: 0) and (max-width: 939px) {
    .featured-goods-list .pagination {
      display: none;
    }
  }

  .featured-goods-list .pagination .prev-button,
  .featured-goods-list .pagination .next-button,
  .featured-goods-list .pagination .page-number {
    margin-left: 6px;
    display: inline-block;
    width: 32px;
    height: 32px;
    background-color: white;
    border-color: #f0f1f4;
    border-radius: 50%;
    border-style: solid;
    border-width: 1px;
    line-height: 1em;
    outline: none;
    vertical-align: middle;
  }

  .featured-goods-list .pagination .prev-button:hover,
  .featured-goods-list .pagination .next-button:hover,
  .featured-goods-list .pagination .page-number:hover {
    background-color: #fcfcfd;
  }

  .featured-goods-list .pagination .prev-button:first-child,
  .featured-goods-list .pagination .next-button:first-child,
  .featured-goods-list .pagination .page-number:first-child {
    margin-left: 0;
  }

  .featured-goods-list .pagination .page-number {
    color: #21242a;
    font-size: 14px;
  }

  .featured-goods-list .pagination .page-number.selected {
    background-color: #4d00eb;
    border-color: transparent;
    color: white;
  }

  .featured-goods-list .pagination .prev-button,
  .featured-goods-list .pagination .next-button {
    position: relative;
  }

  .featured-goods-list .pagination .prev-button:disabled > svg,
  .featured-goods-list .pagination .next-button:disabled > svg {
    color: #f0f1f4;
  }

  .featured-goods-list .pagination .prev-button > svg,
  .featured-goods-list .pagination .next-button > svg {
    position: absolute;
    top: 7px;
    left: 7px;
    color: #9f9f9f;
    width: 17px;
    height: 17px;
  }

  .category-container .category-goods-label {
    float: right;
    text-align: left;
  }

  .category-container .category-goods-label .all-goods-in-category {
    margin-top: 36px;
    margin-bottom: -18px;
    color: #21242a;
    font-weight: bold;
  }

  .category-container .category-goods-label .second-category-name {
    color: #21242a;
    font-size: 24px;
    font-weight: bold;
  }

  .category-container .category-goods-label .third-category-wrapper {
    margin-top: 18px;
    margin-bottom: 36px;
    padding-top: 18px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 18px;
    border-color: #f0f1f4;
    border-style: solid;
    border-width: 3px;
    font-size: 0;
  }

  .category-container
    .category-goods-label
    .third-category-wrapper
    .inner-wrapper {
    margin-left: -2px;
    margin-right: -2px;
  }

  .category-container .category-goods-label .all-third-category,
  .category-container .category-goods-label .third-category {
    display: inline-block;
    margin-top: 2px;
    margin-left: 2px;
    padding-top: 10px;
    padding-left: 14px;
    padding-right: 14px;
    padding-bottom: 10px;
    background-color: transparent;
    border: 0;
    color: #50585f;
    font-size: 14px;
    outline: none;
  }

  .category-container .category-goods-label .all-third-category:hover,
  .category-container .category-goods-label .third-category:hover {
    background-color: #fcfcfd;
  }

  .category-container .category-goods-label .all-third-category.selected,
  .category-container .category-goods-label .third-category.selected {
    border-radius: 3px;
    color: #21242a;
    font-weight: bold;
  }

  .category-container .sort-filter {
    clear: right;
  }

  .category-container .sort-filter:after {
    clear: right;
  }

  @media (min-width: 700px) and (max-width: 939px) {
    .category-container .sort-filter {
      float: none;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 18px;
      width: 700px;
    }
  }

  @media (min-width: 0) and (max-width: 699px) {
    .category-container .sort-filter {
      float: none;
      margin-left: 16px;
      margin-left: 5vw;
      margin-right: 16px;
      margin-right: 5vw;
      margin-bottom: 12px;
      margin-bottom: 3.75vw;
    }
  }

  .category-container .sort-filter .basic-select {
    float: right;
  }

  @media (min-width: 700px) and (max-width: 939px) {
    .category-container .sort-filter .basic-select {
      width: 220px;
    }
  }

  @media (min-width: 0) and (max-width: 699px) {
    .category-container .sort-filter .basic-select .placeholder {
      margin-right: 13px;
      margin-right: 4.0625vw;
    }
  }

  .category-container .sort-filter .basic-select .select-panel {
    z-index: 1;
  }

  .category-container {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    max-width: 1180px;
  }

  @media (min-width: 940px) and (max-width: 1179px) {
    .category-container {
      width: 940px;
    }
  }

  .category-container .banner-and-featured-goods {
    float: right;
  }

  @media (min-width: 0) and (max-width: 939px) {
    .category-container .banner-and-featured-goods {
      float: none;
    }
  }

  .category-container .category-goods-label {
    width: 940px;
  }

  @media (min-width: 940px) and (max-width: 1179px) {
    .category-container .category-goods-label {
      width: 700px;
    }
  }

  @media (min-width: 0) and (max-width: 939px) {
    .category-container .category-goods-label {
      display: none;
    }
  }

  .category-container .category-goods-label .all-goods-in-category {
    font-size: 18px;
  }

  .category-container .category-goods-label .second-category-name {
    margin-top: 30px;
  }

  .category-container .goods-card-container {
    margin-top: 18px;
    width: 940px;
  }

  @media (min-width: 1180px) {
    .category-container .goods-card-container {
      float: right;
    }
  }

  @media (min-width: 940px) and (max-width: 1179px) {
    .category-container .goods-card-container {
      float: right;
      width: 700px;
    }
  }

  @media (min-width: 700px) and (max-width: 939px) {
    .category-container .goods-card-container {
      width: 700px;
    }
  }

  @media (min-width: 481px) and (max-width: 699px) {
    .category-container .goods-card-container {
      width: 460px;
    }
  }

  @media (min-width: 0) and (max-width: 480px) {
    .category-container .goods-card-container {
      width: auto;
      clear: both;
    }
  }

  @media (min-width: 700px) and (max-width: 939px) {
    .category-container.best-category {
      margin-top: 30px;
      width: 700px;
    }
  }

  @media (min-width: 0) and (max-width: 699px) {
    .category-container.best-category {
      margin-top: 16px;
      margin-top: 5vw;
    }
  }

  .category-container.best-category .category-goods-label {
    width: 1180px;
  }

  @media (min-width: 940px) and (max-width: 1179px) {
    .category-container.best-category .category-goods-label {
      width: 940px;
    }
  }

  @media (min-width: 700px) and (max-width: 939px) {
    .category-container.best-category .category-goods-label {
      width: 700px;
    }
  }

  .category-container.best-category .goods-card-container {
    float: none;
    width: 1180px;
  }

  @media (min-width: 940px) and (max-width: 1179px) {
    .category-container.best-category .goods-card-container {
      width: 940px;
    }
  }

  @media (min-width: 700px) and (max-width: 939px) {
    .category-container.best-category .goods-card-container {
      width: 700px;
    }
  }

  @media (min-width: 481px) and (max-width: 699px) {
    .category-container.best-category .goods-card-container {
      width: 460px;
    }
  }

  @media (min-width: 0) and (max-width: 480px) {
    .category-container.best-category .goods-card-container {
      width: auto;
      clear: both;
    }
  }

  .horizontal-scroller {
    overflow-x: auto;
    overflow-y: hidden;
  }

  .horizontal-scroller::-webkit-scrollbar {
    display: none;
  }

  .style-card .style-link .icon_play,
  .style-card2 .style-link .icon_play {
    position: absolute;
    top: 50%;
    left: 50%;
    display: inline-block;
    width: 75px;
    height: 75px;
    margin-top: -37.5px;
    margin-left: -37.5px;
    background-image: url(../img/video/ic_play_sprites.png);
    background-repeat: no-repeat;
    background-position: 0 -96px;
  }

  @media (max-width: 480px) {
    .style-card .style-link .icon_play,
    .style-card2 .style-link .icon_play {
      width: 74px;
      height: 74px;
      margin-top: -37px;
      margin-left: -37px;
      background-image: url(../img/video/m_ic_play.png);
      background-position: 0;
      background-size: 74px;
    }
  }

  .style-card {
    float: left;
    margin-right: 20px;
    margin-bottom: 12px;
    width: 220px;
  }

  @media (min-width: 0) and (max-width: 480px) {
    .style-card {
      margin-right: 8px;
      margin-right: 2.5vw;
      margin-bottom: 8px;
      margin-bottom: 2.5vw;
      width: 140px;
      width: 43.75vw;
    }
  }

  .style-card .style-link {
    position: relative;
    display: block;
  }

  .style-card .style-image {
    display: block;
    width: 220px;
    height: 220px;
  }

  @media (min-width: 0) and (max-width: 480px) {
    .style-card .style-image {
      width: 140px;
      width: 43.75vw;
      height: 140px;
      height: 43.75vw;
    }
  }

  .style-card .user-profile-wrapper {
    margin-top: 12px;
  }

  @media (min-width: 0) and (max-width: 480px) {
    .style-card .user-profile-wrapper {
      margin-top: 3.75vw;
    }
  }

  .style-card .profile-link {
    display: block;
    float: left;
    margin-right: 8px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    overflow: hidden;
  }

  @media (min-width: 0) and (max-width: 480px) {
    .style-card .profile-link {
      margin-right: 2.5vw;
      width: 28px;
      width: 8.75vw;
      height: 28px;
      height: 8.75vw;
    }
  }

  .style-card .profile-image {
    display: block;
    width: 100%;
    height: 100%;
  }

  .style-card .profile {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 32px;
  }

  @media (min-width: 0) and (max-width: 480px) {
    .style-card .profile {
      height: 28px;
      height: 8.75vw;
    }
  }

  .style-card .user-nickname,
  .style-card .reviewer-info,
  .style-card .user-bio {
    line-height: 1.2;
  }

  .style-card .user-nickname {
    margin-top: -2px;
    color: #21242a;
    font-size: 14px;
    font-weight: bold;
  }

  @media (min-width: 0) and (max-width: 480px) {
    .style-card .user-nickname {
      margin-top: -0.625vw;
      font-size: 4.375vw;
    }
  }

  .style-card .reviewer-info,
  .style-card .user-bio {
    color: #99a1a8;
    font-size: 12px;
  }

  @media (min-width: 0) and (max-width: 480px) {
    .style-card .reviewer-info,
    .style-card .user-bio {
      font-size: 3.75vw;
    }
  }

  .style-card .option-info,
  .style-card .description {
    margin-top: 10px;
    height: 50px;
    color: #50585f;
    overflow: hidden;
    word-break: keep-all;
    word-wrap: break-word;
    white-space: pre-wrap;
  }

  @media (min-width: 0) and (max-width: 480px) {
    .style-card .option-info,
    .style-card .description {
      margin-top: 12px;
      margin-top: 3.75vw;
      margin-left: 4px;
      margin-left: 1.25vw;
      margin-right: 4px;
      margin-right: 1.25vw;
      height: 50px;
      height: 15.625vw;
      font-size: 4.0625vw;
    }
  }

  .style-card .option-info .link,
  .style-card .description .link {
    color: #0cc;
  }

  .style-card2 {
    float: left;
    width: 220px;
  }

  @media (min-width: 0) and (max-width: 480px) {
    .style-card2 {
      width: 288px;
      width: 90vw;
    }
  }

  .style-card2 .style-link {
    position: relative;
    display: block;
  }

  .style-card2 .style-image {
    display: block;
    width: 220px;
    height: 220px;
  }

  @media (min-width: 0) and (max-width: 480px) {
    .style-card2 .style-image {
      width: 288px;
      width: 90vw;
      height: 288px;
      height: 90vw;
    }
  }

  .style-card2 .style-info {
    padding-top: 10px;
    padding-bottom: 10px;
  }

  @media (min-width: 0) and (max-width: 480px) {
    .style-card2 .style-info {
      padding-top: 3.125vw;
      padding-bottom: 3.125vw;
    }
  }

  .style-card2 .profile-link {
    display: block;
    float: left;
    margin-right: 10px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    overflow: hidden;
  }

  @media (min-width: 0) and (max-width: 480px) {
    .style-card2 .profile-link {
      margin-right: 3.125vw;
      width: 9.375vw;
      height: 9.375vw;
    }
  }

  .style-card2 .profile-image {
    display: block;
    width: 100%;
    height: 100%;
  }

  .style-card2 .profile {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 30px;
  }

  @media (min-width: 0) and (max-width: 480px) {
    .style-card2 .profile {
      height: 9.375vw;
    }
  }

  .style-card2 .user-nickname,
  .style-card2 .user-bio,
  .style-card2 .created-at {
    line-height: 1.2;
  }

  .style-card2 .user-nickname {
    margin-top: -2px;
    color: #21242a;
    font-size: 14px;
    font-weight: bold;
  }

  @media (min-width: 0) and (max-width: 480px) {
    .style-card2 .user-nickname {
      margin-top: -0.625vw;
      font-size: 4.375vw;
    }
  }

  .style-card2 .user-bio {
    color: #99a1a8;
    font-size: 12px;
  }

  @media (min-width: 0) and (max-width: 480px) {
    .style-card2 .user-bio {
      font-size: 3.75vw;
    }
  }

  .style-card2 .created-at {
    margin-left: 8px;
    color: #c9cdd2;
    font-size: 13px;
    line-height: 30px;
  }

  .style-card2 .counts {
    margin-top: 10px;
    font-size: 0;
  }

  @media (min-width: 0) and (max-width: 480px) {
    .style-card2 .counts {
      margin-top: 3.125vw;
    }
  }

  .style-card2 .counts .count {
    display: inline-block;
    margin-left: 10px;
    color: #99a1a8;
    font-size: 12px;
  }

  @media (min-width: 0) and (max-width: 480px) {
    .style-card2 .counts .count {
      margin-left: 3.125vw;
      font-size: 3.75vw;
    }
  }

  .style-card2 .counts .count:first-child {
    margin-left: 0;
  }

  @media (min-width: 0) and (max-width: 480px) {
    .style-card2 .counts .count:first-child {
      margin-left: 0;
    }
  }

  .style-card2 .description {
    margin-top: 10px;
    height: 50px;
    color: #50585f;
    overflow: hidden;
    word-break: keep-all;
    word-wrap: break-word;
    white-space: pre-wrap;
  }

  @media (min-width: 0) and (max-width: 480px) {
    .style-card2 .description {
      margin-top: 3.125vw;
      height: 16.25vw;
      height: 16.25vw;
      font-size: 14px;
      font-size: 4.375vw;
    }
  }

  .style-card2 .description .link {
    color: #0cc;
  }

  .style-card2 .goods-thumbnail-card {
    padding-top: 14px;
    padding-bottom: 14px;
    border-top-color: #f0f1f4;
    border-top-style: solid;
    border-top-width: 1px;
  }

  @media (min-width: 0) and (max-width: 480px) {
    .style-card2 .goods-thumbnail-card {
      padding-top: 4.375vw;
      padding-bottom: 4.375vw;
    }
  }

  .style-card2 .goods-thumbnail-card .info-group {
    padding-left: 10px;
  }

  @media (min-width: 0) and (max-width: 480px) {
    .style-card2 .goods-thumbnail-card .info-group {
      padding-left: 1.875vw;
    }
  }

  .style-card2 .goods-thumbnail-card .goods-name {
    height: 30px;
    font-size: 12px;
  }

  @media (min-width: 0) and (max-width: 480px) {
    .style-card2 .goods-thumbnail-card .goods-name {
      height: 32px;
      height: 10vw;
      font-size: 13px;
      font-size: 4.0625vw;
    }
  }

  .style-card2 .goods-thumbnail-card .goods-price,
  .style-card2 .goods-thumbnail-card .goods-origin-price {
    display: inline-block;
  }

  .style-card2 .goods-thumbnail-card .goods-price,
  .style-card2 .goods-thumbnail-card .goods-origin-price {
    font-size: 12px;
  }

  @media (min-width: 0) and (max-width: 480px) {
    .style-card2 .goods-thumbnail-card .goods-price,
    .style-card2 .goods-thumbnail-card .goods-origin-price {
      font-size: 13px;
      font-size: 4.0625vw;
    }
  }

  .style-card2 .goods-thumbnail-card .goods-price {
    font-weight: bold;
  }

  .style-card2 .goods-thumbnail-card .goods-price .goods-discount {
    display: none;
  }

  .style-card2 .goods-thumbnail-card .goods-origin-price {
    margin-left: 6px;
  }

  @media (min-width: 0) and (max-width: 480px) {
    .style-card2 .goods-thumbnail-card .goods-origin-price {
      margin-left: 1.875vw;
    }
  }

  .style-card2.with-padding .description,
  .style-card2.with-padding .goods-thumbnail-card .goods-link {
    padding-right: 16px;
  }

  @media (min-width: 0) and (max-width: 480px) {
    .style-card2.with-padding .description,
    .style-card2.with-padding .goods-thumbnail-card .goods-link {
      padding-right: 0;
    }
  }

  @media (min-width: 0) and (max-width: 480px) {
    .style-card2.with-padding .style-info,
    .style-card2.with-padding .goods-thumbnail-card {
      margin-left: 12px;
      margin-left: 3.75vw;
      margin-right: 12px;
      margin-right: 3.75vw;
    }
  }

  .style-card-container > div {
    margin-right: -20px;
    margin-bottom: -12px;
  }

  @media (min-width: 0) and (max-width: 480px) {
    .style-card-container > div {
      margin-right: -8px;
      margin-right: -2.5vw;
      margin-bottom: -8px;
      margin-bottom: -2.5vw;
    }
  }

  .brand-list {
    margin-left: auto;
    margin-right: auto;
    max-width: 1180px;
  }

  @media (min-width: 940px) and (max-width: 1179px) {
    .brand-list {
      max-width: 940px;
    }
  }

  @media (min-width: 769px) and (max-width: 939px) {
    .brand-list {
      max-width: 700px;
    }
  }

  @media (max-width: 768px) {
    .brand-list {
      width: 288px;
      width: 90vw;
    }
  }

  .brand-list .list-label {
    color: #21242a;
    font-size: 18px;
    font-weight: bold;
    text-align: left;
  }

  @media (max-width: 768px) {
    .brand-list .list-label {
      font-size: 14px;
      font-size: 4.375vw;
    }
  }

  .brand-list .brands {
    text-decoration: none;
  }

  .brand-list .brands:after,
  .brand-list .brands:before {
    content: ' ';
    display: table;
  }

  .brand-list .brands:after {
    clear: both;
  }

  .brand-list .featured-brands {
    text-align: center;
  }

  .brand-list .featured-brands .list-label {
    margin-top: 24px;
  }

  @media (max-width: 768px) {
    .brand-list .featured-brands .list-label {
      margin-top: 18px;
      margin-top: 5.625vw;
    }
  }

  .brand-list .featured-brands .brands {
    margin-top: 18px;
  }

  @media (max-width: 768px) {
    .brand-list .featured-brands .brands {
      margin-top: 12px;
      margin-top: 3.75vw;
      height: 122px;
      height: 38.125vw;
      overflow: auto;
    }

    .brand-list .featured-brands .brands::-webkit-scrollbar {
      display: none;
    }
  }

  .brand-list .featured-brands .scroll-track {
    margin-top: -18px;
    margin-left: -20px;
  }

  @media (max-width: 768px) {
    .brand-list .featured-brands .scroll-track {
      margin-top: 0;
      margin-left: -8px;
      margin-left: -2.5vw;
    }
  }

  .brand-list .featured-brands .load-more-button {
    display: inline-block;
    padding-left: 24px;
    padding-right: 24px;
    border: none;
    cursor: pointer;
    outline: none;
    background-color: white !important;
    border-style: solid;
    border-radius: 5px;
    height: 50px;
    border-width: 2px;
    font-size: 16px;
    font-weight: bold;
    margin-top: 32px;
    border-color: #f0f1f4;
    clear: both;
  }

  @media (max-width: 768px) {
    .brand-list .featured-brands .load-more-button {
      display: none;
    }
  }

  .brand-list .featured-brands .load-more-button:hover {
    border-color: #c9cdd2;
  }

  .brand-list .featured-brands .load-more-button:active {
    border-color: #99a1a8;
  }

  .brand-list .featured-brands .load-more-button > * {
    color: #99a1a8;
    vertical-align: middle;
  }

  .brand-list .featured-brands .load-more-button .arrow-down {
    margin-left: 8px;
  }

  .brand-list .filtered-brands {
    margin-top: 36px;
  }

  @media (max-width: 768px) {
    .brand-list .filtered-brands {
      margin-top: 11.25vw;
    }
  }

  .brand-list .filtered-brands .initial-filter {
    margin-top: 18px;
    text-align: left;
  }

  @media (max-width: 768px) {
    .brand-list .filtered-brands .initial-filter {
      margin-top: 12px;
      margin-top: 3.75vw;
      margin-right: -16px;
      margin-right: -5vw;
      overflow: auto;
    }

    .brand-list .filtered-brands .initial-filter::-webkit-scrollbar {
      display: none;
    }
  }

  @media (max-width: 768px) {
    .brand-list .filtered-brands .initial-filter .inner-wrapper {
      width: 765px;
      width: 239.0625vw;
    }
  }

  .brand-list .filtered-brands .filter-button {
    margin-left: 10px;
    width: 32px;
    height: 32px;
    background-color: white;
    border-color: #f0f1f4;
    border-radius: 50%;
    border-style: solid;
    border-width: 1px;
    font-size: 13px;
    outline: none;
  }

  @media (max-width: 768px) {
    .brand-list .filtered-brands .filter-button {
      margin-left: 3.125vw;
      width: 36px;
      width: 11.25vw;
      height: 36px;
      height: 11.25vw;
      border-radius: 50%;
      font-size: 4.0625vw;
    }
  }

  .brand-list .filtered-brands .filter-button.special-filter-alpha-button,
  .brand-list .filtered-brands .filter-button.special-filter-etc-button {
    width: auto;
    height: 32px;
    border-radius: 16px;
  }

  @media (max-width: 768px) {
    .brand-list .filtered-brands .filter-button.special-filter-alpha-button,
    .brand-list .filtered-brands .filter-button.special-filter-etc-button {
      padding-left: 14px;
      padding-left: 4.375vw;
      padding-right: 14px;
      padding-right: 4.375vw;
      width: auto;
      height: 36px;
      height: 11.25vw;
      border-radius: 18px;
      border-radius: 5.625vw;
    }
  }

  .brand-list .filtered-brands .filter-button.special-filter-alpha-button {
    width: 44px;
  }

  .brand-list .filtered-brands .filter-button.special-filter-etc-button {
    width: 54px;
  }

  .brand-list .filtered-brands .filter-button:first-child {
    margin-left: 0;
  }

  .brand-list .filtered-brands .filter-button:hover {
    background-color: #fcfcfd;
  }

  .brand-list .filtered-brands .filter-button:active,
  .brand-list .filtered-brands .filter-button.selected {
    background-color: #131518;
    border-color: #131518;
    color: white;
    font-weight: bold;
  }

  .brand-list .filtered-brands .brands {
    margin-top: 18px;
  }

  @media (max-width: 768px) {
    .brand-list .filtered-brands .brands {
      margin-top: 12px;
      margin-top: 3.75vw;
      margin-left: -16px;
      margin-left: -5vw;
      margin-right: -16px;
      margin-right: -5vw;
    }
  }

  .brand-list .filtered-brands .brands-inner-wrapper {
    margin-top: -10px;
    margin-left: -20px;
  }

  @media (max-width: 768px) {
    .brand-list .filtered-brands .brands-inner-wrapper {
      margin-top: 0;
      margin-left: 0;
    }
  }

  .brand-list .filtered-brands .brand-card,
  .brand-list .filtered-brands .featured-brand {
    margin-top: 10px;
    margin-left: 20px;
    width: 320px;
  }

  @media (max-width: 768px) {
    .brand-list .filtered-brands .brand-card,
    .brand-list .filtered-brands .featured-brand {
      float: none;
      margin-top: 0;
      margin-left: 0;
      width: auto;
    }
  }

  .brand-list .filtered-brands .brand-link {
    width: 88px;
  }

  @media (max-width: 768px) {
    .brand-list .filtered-brands .brand-link {
      width: 114px;
      width: 35.625vw;
    }
  }

  .brand-list .filtered-brands .brand-image {
    float: left;
    width: 100%;
    height: 50px;
  }

  @media (max-width: 768px) {
    .brand-list .filtered-brands .brand-image {
      height: 64px;
      height: 20vw;
    }
  }

  .brand-list .filtered-brands .brand-image .brand-no-image-icon {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 768px) {
    .brand-list .filtered-brands .brand-image .brand-no-image-icon {
      width: 24px;
      width: 7.5vw;
      height: 24px;
      height: 7.5vw;
    }
  }

  .brand-list .filtered-brands .brand-info {
    float: left;
    margin-left: 10px;
    height: 50px;
    text-align: left;
  }

  @media (max-width: 768px) {
    .brand-list .filtered-brands .brand-info {
      margin-left: 3.125vw;
      height: 64px;
      height: 20vw;
    }
  }

  .brand-list .filtered-brands .brand-name {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 220px;
    font-size: 13px;
  }

  @media (max-width: 768px) {
    .brand-list .filtered-brands .brand-name {
      font-size: 4.0625vw;
      max-width: 180px;
      max-width: 56.25vw;
    }
  }

  .brand-list .filtered-brands .goods-count {
    margin-top: 3px;
    font-size: 12px;
  }

  @media (max-width: 768px) {
    .brand-list .filtered-brands .goods-count {
      margin-top: 0.9375vw;
      font-size: 3.75vw;
    }
  }

  .brand-card,
  .featured-brand {
    float: left;
    display: block;
  }

  .brand-card .brand-link,
  .featured-brand .brand-link {
    display: block;
  }

  .brand-card .brand-image,
  .featured-brand .brand-image {
    width: 100%;
  }

  .brand-card .brand-name,
  .featured-brand .brand-name {
    color: #21242a;
    text-decoration: none;
  }

  .brand-card .goods-count,
  .featured-brand .goods-count {
    color: #99a1a8;
  }

  .brand-card .brand-image.no-image,
  .featured-brand .brand-image.no-image {
    background-color: #131518;
    text-align: center;
  }

  .brand-card .brand-image.no-image .brand-no-image-icon,
  .featured-brand .brand-image.no-image .brand-no-image-icon {
    display: inline-block;
    background-image: url(../img/brand/ic_store_brand_default.svg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  .featured-brand {
    margin-top: 18px;
    margin-left: 20px;
  }

  @media (max-width: 768px) {
    .featured-brand {
      margin-top: 0;
      margin-left: 8px;
      margin-left: 2.5vw;
    }
  }

  .featured-brand .brand-link {
    width: 220px;
  }

  @media (max-width: 768px) {
    .featured-brand .brand-link {
      width: 140px;
      width: 43.75vw;
    }
  }

  .featured-brand .brand-image {
    display: block;
    height: 123px;
  }

  @media (max-width: 768px) {
    .featured-brand .brand-image {
      height: 88px;
      height: 27.5vw;
    }
  }

  .featured-brand .brand-image .brand-no-image-icon {
    width: 36px;
    height: 36px;
  }

  @media (max-width: 768px) {
    .featured-brand .brand-image .brand-no-image-icon {
      width: 22px;
      width: 6.875vw;
      height: 22px;
      height: 6.875vw;
    }
  }

  .featured-brand .brand-info {
    margin-top: 10px;
    font-size: 0;
    text-align: left;
    width: 220px;
  }

  .featured-brand .brand-info.vertical-center {
    display: block;
  }

  .featured-brand .brand-info.vertical-center > .middle {
    width: 100%;
    display: flex;
  }

  @media (max-width: 768px) {
    .featured-brand .brand-info {
      width: 140px;
      width: 43.75vw;
    }
  }

  .featured-brand .brand-name {
    display: inline-block;
    font-size: 14px;
    flex: 0 1 auto;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  @media (max-width: 768px) {
    .featured-brand .brand-name {
      font-size: 4.375vw;
    }
  }

  .featured-brand .goods-count {
    display: inline-flex;
    align-items: center;
    margin-left: 8px;
    font-size: 13px;
    flex: 0 1 5em;
  }

  @media (max-width: 768px) {
    .featured-brand .goods-count {
      flex: 0 1 2em;
      margin-left: 2.5vw;
      font-size: 4.0625vw;
    }
  }

  .category-sprite {
    display: inline-block;
    background-image: url(../img/sprites/category.png);
    background-repeat: no-repeat;
    vertical-align: middle;
    zoom: 1;
  }

  @media (max-width: 480px) {
    .category-sprite {
      background-image: url(../img/sprites/category_m.png);
      background-size: 64px 38px;
    }
  }

  .category-sprite.arrow_left-gray {
    width: 12px;
    height: 9px;
    background-position: -5px -5px;
  }

  .category-sprite.arrow_left-white {
    width: 12px;
    height: 9px;
    background-position: -27px -5px;
  }

  .category-sprite.arrow_right-gray {
    width: 12px;
    height: 9px;
    background-position: -5px -24px;
  }

  .category-sprite.arrow_right-white {
    width: 12px;
    height: 9px;
    background-position: -27px -24px;
  }

  .category-sprite.dropdown_arrow2 {
    width: 10px;
    height: 6px;
    background-position: -49px -5px;
  }

  .store-sprite {
    display: inline-block;
    background-image: url(../img/sprites/store.png);
    background-repeat: no-repeat;
    vertical-align: middle;
    zoom: 1;
  }

  .store-sprite.store-arrow_left-white {
    width: 12px;
    height: 9px;
    background-position: 0 0;
  }

  .store-sprite.store-arrow_right-black {
    width: 12px;
    height: 9px;
    background-position: -12px 0;
  }

  .store-sprite.store-arrow_right-white {
    width: 12px;
    height: 9px;
    background-position: -24px 0;
  }

  body {
    background-color: white;
  }

  .store-page {
    min-height: 100vh;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    .store-page {
      padding-bottom: 36px;
    }
  }

  @media (min-width: 0) and (max-width: 480px) {
    .store-page {
      padding-top: 80px;
      padding-bottom: 24px;
      padding-bottom: 7.5vw;
    }
  }

  .store-page section {
    margin-top: 36px;
    margin-left: auto;
    margin-right: auto;
    width: 1180px;
  }

  @media (min-width: 0) and (max-width: 768px) {
    .store-page section {
      width: 100%;
    }
  }

  @media (min-width: 0) and (max-width: 480px) {
    .store-page section {
      margin-top: 24px;
      margin-top: 7.5vw;
    }
  }

  .store-page .section-label {
    color: #21242a;
    font-size: 18px;
    font-weight: bold;
    line-height: 48px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    .store-page .section-label {
      padding-left: 34px;
      font-size: 16px;
    }
  }

  @media (min-width: 0) and (max-width: 480px) {
    .store-page .section-label {
      padding-left: 16px;
      padding-left: 5vw;
      font-size: 14px;
      font-size: 4.375vw;
    }
  }

  .dotdotdot {
    margin-top: 16px;
    font-size: 0;
    text-align: center;
  }

  @media (min-width: 0) and (max-width: 480px) {
    .dotdotdot {
      margin-top: 9px;
      margin-top: 2.8125vw;
    }
  }

  .dotdotdot > li {
    display: inline-block;
    margin-left: 8px;
  }

  .dotdotdot > li:first-child {
    margin-left: 0;
  }

  .dotdotdot > li > button {
    width: 6px;
    height: 6px;
    background-color: #c9cdd2;
    border: 0;
    border-radius: 50%;
    font-size: 0;
    overflow: hidden;
    outline: none;
  }

  @media (min-width: 0) and (max-width: 480px) {
    .dotdotdot > li > button {
      width: 3px;
      width: 0.9375vw;
      height: 3px;
      height: 0.9375vw;
    }
  }

  .dotdotdot > li.slick-active > button {
    background-color: #4d00eb;
  }

  .goods-card-container {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 24px;
    overflow: hidden;
  }

  @media (min-width: 1180px) {
    .goods-card-container {
      width: 1180px;
    }
  }

  @media (min-width: 940px) and (max-width: 1179px) {
    .goods-card-container {
      width: 940px;
    }
  }

  @media (min-width: 481px) and (max-width: 939px) {
    .goods-card-container {
      margin-top: 30px;
    }
  }

  @media (min-width: 700px) and (max-width: 939px) {
    .goods-card-container {
      width: 700px;
    }
  }

  @media (min-width: 481px) and (max-width: 699px) {
    .goods-card-container {
      width: 460px;
    }
  }

  @media (min-width: 0) and (max-width: 480px) {
    .goods-card-container {
      margin-top: 16px;
      margin-top: 5vw;
      margin-left: 16px;
      margin-left: 5vw;
      margin-right: 16px;
      margin-right: 5vw;
    }
  }

  .goods-card-container.in-catalog.dark-bg .goods-card .goods-brand,
  .goods-card-container.in-catalog.dark-bg .goods-card .goods-name,
  .goods-card-container.in-catalog.dark-bg .goods-card .goods-price {
    color: white;
  }

  .goods-card-container.in-catalog.dark-bg .goods-card .goods-origin-price {
    color: #99a1a8;
  }

  .goods-card-container.in-catalog .goods-card .goods-price {
    color: black;
  }

  .goods-card-container.in-catalog .goods-card .goods-origin-price {
    color: #c9cdd2;
  }

  .goods-card-container .inner-wrapper {
    margin-right: -20px;
    margin-bottom: -18px;
  }

  @media (min-width: 0) and (max-width: 480px) {
    .goods-card-container .inner-wrapper {
      margin-right: -8px;
      margin-right: -2.5vw;
      margin-bottom: -8px;
      margin-bottom: -2.5vw;
    }
  }

  .goods-card-container .goods-card {
    float: left;
    margin-right: 20px;
    margin-bottom: 18px;
  }

  @media (min-width: 0) and (max-width: 480px) {
    .goods-card-container .goods-card {
      margin-right: 8px;
      margin-right: 2.5vw;
      margin-bottom: 8px;
      margin-bottom: 2.5vw;
    }
  }

  .goods-card-container .no-goods {
    font-size: 16px;
    color: #99a1a8;
    margin-right: 20px;
    margin-bottom: 18px;
    padding-top: 120px;
    padding-bottom: 120px;
  }

  @media (max-width: 768px) {
    .goods-card-container .no-goods {
      padding-top: 80px;
      padding-bottom: 80px;
    }
  }

  @media (max-width: 480px) {
    .goods-card-container .no-goods {
      margin-right: 8px;
      margin-right: 2.5vw;
      margin-bottom: 8px;
      margin-bottom: 2.5vw;
      padding-top: 25vw;
      padding-bottom: 25vw;
    }
  }

  .goods-card-container .load-more-trigger {
    width: 100%;
    height: 44px;
    margin-right: 20px;
    margin-bottom: 18px;
    background-image: url('data:image/gif;base64,R0lGODlhEAAQAPIAAP///4CAgODg4KCgoICAgLCwsMDAwMjIyCH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==');
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 16px;
    cursor: pointer;
  }

  @media (min-width: 0) and (max-width: 480px) {
    .goods-card-container .load-more-trigger {
      margin-right: 8px;
      margin-right: 2.5vw;
      margin-bottom: 8px;
      margin-bottom: 2.5vw;
    }
  }

  .goods-card-container .load-more-trigger:hover {
    background-color: rgba(252, 252, 253, 0.5);
  }

  @media (min-width: 0) and (max-width: 480px) {
    .goods-card-container .load-more-trigger:hover {
      background-color: transparent;
    }
  }

  .goods-card-container .load-more-trigger:active {
    background-color: #fcfcfd;
  }

  @media (min-width: 0) and (max-width: 480px) {
    .goods-card-container .load-more-trigger {
      height: 44px;
      height: 10vw;
      background-size: 5vw;
    }
  }

  .goods-card {
    width: 220px;
  }

  @media (min-width: 0) and (max-width: 480px) {
    .goods-card {
      width: 140px;
      width: 43.75vw;
    }
  }

  .goods-card.ranked-goods-card {
    position: relative;
  }

  .goods-card.ranked-goods-card:after {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 32px;
    background-color: #21242a;
    color: white;
    content: attr(data-rank);
    font-size: 16px;
    font-weight: bold;
    line-height: 32px;
    text-align: center;
  }

  .goods-card .image-wrapper {
    position: relative;
    display: block;
  }

  .goods-card .image-wrapper .sold-out {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    background-color: #99a1a8;
    color: white;
    font-size: 14px;
    font-weight: bold;
    line-height: 34px;
    pointer-events: none;
  }

  @media (min-width: 0) and (max-width: 480px) {
    .goods-card .image-wrapper .sold-out {
      line-height: 26px;
      line-height: 8.125vw;
      font-size: 12px;
      font-size: 3.75vw;
    }
  }

  .goods-card .goods-image {
    display: block;
    width: 100%;
    height: 220px;
  }

  @media (min-width: 0) and (max-width: 480px) {
    .goods-card .goods-image {
      height: 140px;
      height: 43.75vw;
    }
  }

  .goods-card .info-group {
    margin-top: 5px;
    height: 108px;
    text-align: left;
  }

  @media (min-width: 0) and (max-width: 480px) {
    .goods-card .info-group {
      padding-left: 4px;
      padding-left: 1.25vw;
    }
  }

  .goods-card .goods-brand,
  .goods-card .goods-name {
    outline: none;
    background: transparent;
    border: 0;
    text-align: left;
    color: #21242a;
  }

  .goods-card .goods-brand {
    font-size: 14px;
    text-decoration: none;
    color: #21242a;
    font-weight: 700;
  }

  .goods-card .goods-link {
    text-decoration: none;
    outline: 0;
    background: transparent;
    border: 0;
    text-align: left;
  }

  .goods-card .goods-name {
    display: inline;
    margin-top: 4px;
    height: 36px;
    color: #21242a;
    overflow: hidden;
    font-size: 14px;
  }

  .goods-card .goods-price {
    margin-top: 10px;
    color: #131518;
  }

  .goods-card .goods-price,
  .goods-card .goods-price.discounted .goods-discount {
    font-size: 14px;
    font-weight: 700;
  }

  .goods-card .goods-price.discounted .goods-discount {
    color: #f81542;
  }

  .goods-card .goods-origin-price {
    margin-top: 4px;
    text-decoration: line-through;
    color: #c9cdd2;
    font-size: 12px;
  }

  .category-container .sort-filter {
    clear: right;
  }

  .category-container .sort-filter:after {
    clear: right;
  }

  @media (min-width: 700px) and (max-width: 939px) {
    .category-container .sort-filter {
      float: none;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 18px;
      width: 700px;
    }
  }

  @media (min-width: 0) and (max-width: 699px) {
    .category-container .sort-filter {
      float: none;
      margin-left: 16px;
      margin-left: 5vw;
      margin-right: 16px;
      margin-right: 5vw;
      margin-bottom: 12px;
      margin-bottom: 3.75vw;
    }
  }

  .category-container .sort-filter .basic-select {
    float: right;
  }

  @media (min-width: 700px) and (max-width: 939px) {
    .category-container .sort-filter .basic-select {
      width: 220px;
    }
  }

  @media (min-width: 0) and (max-width: 699px) {
    .category-container .sort-filter .basic-select .placeholder {
      margin-right: 13px;
      margin-right: 4.0625vw;
    }
  }

  .category-container .sort-filter .basic-select .select-panel {
    z-index: 1;
  }

  .vertical-center {
    *position: relative;
    display: table;
    overflow: hidden;
  }

  .vertical-center > .middle {
    *position: absolute;
    *left: 0;
    *top: 50%;
    display: table-cell;
    vertical-align: middle;
  }

  .vertical-center > .middle > .inner {
    *position: relative;
    *top: -50%;
  }

  .vertical-center.horizontal-center > .middle {
    *left: 50%;
  }

  .vertical-center.horizontal-center > .middle > .inner {
    *left: -50%;
  }

  .category-sprite {
    display: inline-block;
    background-image: url(../img/sprites/category.png);
    background-repeat: no-repeat;
    vertical-align: middle;
    zoom: 1;
  }

  @media (max-width: 480px) {
    .category-sprite {
      background-image: url(../img/sprites/category_m.png);
      background-size: 64px 38px;
    }
  }

  .category-sprite.arrow_left-gray {
    width: 12px;
    height: 9px;
    background-position: -5px -5px;
  }

  .category-sprite.arrow_left-white {
    width: 12px;
    height: 9px;
    background-position: -27px -5px;
  }

  .category-sprite.arrow_right-gray {
    width: 12px;
    height: 9px;
    background-position: -5px -24px;
  }

  .category-sprite.arrow_right-white {
    width: 12px;
    height: 9px;
    background-position: -27px -24px;
  }

  .category-sprite.dropdown_arrow2 {
    width: 10px;
    height: 6px;
    background-position: -49px -5px;
  }

  .left,
  .modal .modal-header .modal-title {
    float: left;
  }

  .right,
  .modal .modal-header .modal-close-btn,
  .modal .modal-lower-body .button-wrapper {
    float: right;
  }

  .clearboth {
    clear: both;
  }

  .clearfix:after,
  .modal .modal-header:after,
  .modal .modal-lower-body:after,
  .modal .modal-lower-body .button-wrapper:after,
  .clearfix:before,
  .modal .modal-header:before,
  .modal .modal-lower-body:before,
  .modal .modal-lower-body .button-wrapper:before {
    content: ' ';
    display: table;
  }

  .clearfix:after,
  .modal .modal-header:after,
  .modal .modal-lower-body:after,
  .modal .modal-lower-body .button-wrapper:after {
    clear: both;
  }
`;
