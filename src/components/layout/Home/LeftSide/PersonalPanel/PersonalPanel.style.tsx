import styled from 'styled-components';
import { Link } from 'react-router-dom';

//extends
import { Panel } from '../../../../common/Panel/Panel.style';
export const Container = styled(Panel)`
  & > a {
    border-top: 1px #f3f2ef solid;
    display: block;
    padding: 14px 17px;
  }
`;
export const Header = styled.div`
  position: relative;
  margin-bottom: 10px;
  & > img {
    position: absolute;
  }
  div {
    padding-top: 20px;
    p {
      text-align: center;
      font-size: 11.5px;
      color: rgb(0 0 0 / 60%);
      font-weight: 400;
      margin-top: 5px;
      letter-spacing: 1px;
    }
    a {
      display: flex;
      flex-direction: column;
      align-items: center;

      font-size: 18px;
      font-weight: 400;
      img {
        margin-bottom: 20px;
        width: 70px;
        border-radius: 100px;
        z-index: 0;
      }
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const ConnectionSection = styled(Link)`
  padding: 10px 0 !important;
  div {
    display: flex;
    justify-content: space-between;
    padding: 6px 15px;
    p {
      letter-spacing: 0.4px;
      span {
        color: rgb(0 0 0 / 60%);
      }
    }
    &:hover {
      background-color: rgb(235 235 235);
    }
  }
`;
export const PremiumSection = styled(Link)`
  &:hover {
    background-color: rgb(235 235 235);
  }
  & > p:nth-child(1) {
    font-weight: 400;
    color: rgb(0 0 0 / 60%);
    margin-bottom: 3px;
  }
  & > p:nth-child(2) {
    display: flex;
    align-items: center;
    font-weight: 500;
    img {
      width: 15px;
      margin-right: 5px;
    }
    &:hover {
      color: #004182;
    }
  }
`;
export const MyItems = styled(Link)`
  display: flex !important;
  align-items: center;
  img {
    margin-right: 5px;
  }
  &:hover {
    background-color: rgb(235 235 235);
  }
`;
