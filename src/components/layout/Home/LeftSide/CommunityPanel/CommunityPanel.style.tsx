import styled from 'styled-components';

//extends
import { Panel } from '../../../../common/Panel/Panel.style';

export const Container = styled(Panel)`
  margin-top: 5px;
  width: 100%;
  & > a:nth-child(2) {
    display: block;
    padding: 15px;
    text-align: center;
    border-top: 1px #f3f2ef solid;
    margin-top: 5px;
    font-size: 13.5px;
    color: #666666;
    &:hover {
      background-color: rgb(235 235 235);
    }
  }
`;
export const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    margin-left: 13px;
    a {
      color: rgb(41 121 201);
      margin-top: 14px;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  & > div:nth-child(2) {
    height: 36px;
    width: 36px;
    cursor: pointer;
    border-radius: 100px;
    padding: 10px;

    svg {
      fill: #666;
    }
    &:hover {
      background-color: #ebebeb;

      & {
        fill: black;
      }
    }
  }
`;
