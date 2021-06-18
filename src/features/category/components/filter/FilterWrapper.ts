import styled from 'styled-components';

export const FilterWrapper = styled.div`
  .select-items {
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
    .select-items {
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
    .select-items.expand-up {
      margin-top: 0 !important;
    }
  }

  @media (min-width: 0) and (max-width: 768px) {
    .select-items.items-sticked {
      overflow: auto;
    }
  }

  .select-item {
    color: #21242a;
    cursor: pointer;
    font-size: 14px;
    line-height: 36px;
    text-align: center;
  }

  @media (min-width: 0) and (max-width: 768px) {
    .select-item {
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
    .select-item.selected {
      font-weight: bold;
    }
  }

  @media (min-width: 0) and (max-width: 768px) {
    .select-item:first-child {
      border-top: 0;
    }
  }

  .select-item:hover {
    background-color: #fcfcfd;
  }

  @media (min-width: 0) and (max-width: 768px) {
    .select-item:hover {
      background-color: transparent;
    }
  }
`;
