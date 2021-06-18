import styled from 'styled-components';

export const GlobalNavibarWrapper = styled.div`
  /* Global Navbar */
  .cToFXH {
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    z-index: 100;
    transition-property: background, box-shadow;
    transition-duration: 0.25s;
    transition-timing-function: ease-in-out;
    background: rgb(255, 255, 255);
    box-shadow: rgba(27, 29, 31, 0.12) 0px 2px 10px;
  }

  .cToFXH > nav.menu-wrapper.categories {
    left: 0px;
    right: 0px;
    -webkit-box-align: center;
    align-items: center;
    z-index: 99;
  }

  .cToFXH > nav.menu-wrapper {
    position: relative;
    display: flex;
    height: 64px;
    background: rgb(255, 255, 255);
  }

  .cToFXH > nav.menu-wrapper:not(.categories) {
    -webkit-box-align: center;
    align-items: center;
    z-index: 102;
  }

  .dEgogF {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 80px;
    transform: translateY(-50%);
  }

  .dEgogF .gnb-logo {
    color: rgb(19, 21, 24);
    outline: none;
    margin-right: 0.375rem;
    margin-left: 0.375rem;
    flex: 0 0 1.75rem;
    font-size: 0px;
  }

  .dEgogF .menu-wrapper {
    flex: 0 0 auto;
  }

  .dedUFM {
    position: relative;
    list-style: none;
    text-align: center;
    margin: 0px;
    padding: 0px;
  }

  .fMUvUr > a .text {
    font-weight: bold;
  }

  .fMUvUr > a .icon svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  .hiEqvq {
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.4px;
    line-height: 1.43;
    display: inline-block;
    vertical-align: middle;
  }

  .hiEqvq > a,
  .hiEqvq > button {
    text-decoration: none;
    font-weight: 700;
    color: rgb(19, 21, 24);
    display: block;
    cursor: pointer;
    border: 0px;
    background: transparent;
    padding: 10px 12px;
    outline: none;
    transition: color 0.2s ease-in-out 0s;
  }

  .koSVjx {
    position: absolute;
    bottom: 6px;
    height: 2px;
    background-color: rgb(19, 21, 24);
    border-radius: 1px;
    transition: width 0.5s ease 0s, left 0.5s ease 0s;
  }

  /* rightMenu */
  .idFEuH {
    display: flex;
    position: absolute;
    -webkit-box-align: center;
    align-items: center;
    top: 50%;
    right: 80px;
    transform: translateY(-50%);
  }

  .idFEuH .inner-menu {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
  }

  .WmrXJ {
    padding: 5px 8px;
    color: inherit;
    font-size: 0px;
  }

  .WmrXJ svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  .hsjJDu {
    font-size: 16px;
    font-weight: 700;
    letter-spacing: -0.4px;
    line-height: 1.31;
    display: inline-block;
    vertical-align: middle;
  }

  .hsjJDu > a,
  .hsjJDu > button {
    text-decoration: none;
    font-weight: 700;
    color: rgb(19, 21, 24);
    display: block;
    cursor: pointer;
    border: 0px;
    background: transparent;
    padding: 10px 12px;
    outline: none;
    transition: color 0.2s ease-in-out 0s;
  }

  .eoCnUu {
    position: relative;
  }

  .eoCnUu > a,
  .eoCnUu > button {
    display: block;
    color: rgb(19, 21, 24);
    fill: rgb(19, 21, 24);
    font-size: 0px;
    transition: color 0.25s ease-in-out 0s, fill 0.25s 0s;
    padding: 5px 8px;
  }

  .eoCnUu > a > svg,
  .eoCnUu > button > svg,
  .eoCnUu > a > img,
  .eoCnUu > button > img {
    width: 28px;
    height: 28px;
  }

  /* login button */
  .bgoIGp .mobile {
    background: transparent;
    margin-right: 0.5rem;
    height: 32px;
    font-size: 0.875rem;
    color: rgb(255, 255, 255);
    letter-spacing: -0.4px;
    line-height: 1.4;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 22px;
    font-weight: 700;
    cursor: pointer;
  }

  .bgoIGp .mobile > a {
    color: rgb(19, 21, 24);
    text-decoration: none;
  }

  /* menu list */
  .YFKmM {
    position: relative;
    list-style: none;
    text-align: left;
    margin: 0px;
    padding: 0px;
  }

  .govvYI {
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.4px;
    line-height: 1.43;
  }

  @media screen and (min-width: 321px) {
    .fMUvUr > a .icon {
      display: none;
    }
  }

  @media screen and (max-width: 959px) {
    .dEgogF .gnb-logo > svg {
      height: 2rem;
      width: 2rem;
    }

    .dedUFM {
      overflow: auto hidden;
      white-space: nowrap;
    }

    .YFKmM {
      overflow: auto hidden;
      white-space: nowrap;
    }
  }

  @media screen and (max-width: 960px) {
    .dEgogF {
      left: 12px;
    }

    .idFEuH {
      right: 14px;
    }

    .gLZfwj {
      overflow: visible;
    }

    .eoCnUu > a > svg,
    .eoCnUu > button > svg,
    .eoCnUu > a > img,
    .eoCnUu > button > img {
      width: 24px;
      height: 24px;
    }

    .cToFXH > nav.menu-wrapper.categories {
      background: rgb(255, 255, 255);
      padding-left: 8px;
      overflow: hidden;
    }

    .cToFXH > nav.menu-wrapper {
      height: 40px;
    }

    .govvYI {
      font-size: 14px;
      font-weight: 400;
      letter-spacing: -0.4px;
      line-height: 1.43;
    }
  }
`;
