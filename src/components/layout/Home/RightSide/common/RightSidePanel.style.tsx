import styled from 'styled-components';

//styles
import { Panel } from '../../../../common/Panel/Panel.style';

export const Container = styled(Panel)`
  padding: 15px;
  margin-bottom: 5px;
  p,
  h3,
  h1 {
    font-weight: 500;
    font-size: 14px;
    color: #444444;
  }
  & > a p {
    display: flex;
    align-items: center;
    font-size: 13.5px;
    border-radius: 8px;
    padding: 5px 8px;
    width: fit-content;
    color: #797979;
    font-weight: 400;
    svg {
      margin-left: 4px;
      fill: rgb(102 102 102);
    }
    &:hover {
      background-color: rgb(235 235 235);
    }
  }
`;
export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-size: 15.5px;
  }
  svg {
    fill: rgb(102 102 102);
    cursor: pointer;
  }
`;
export const List = styled.div`
  padding-top: 20px;
  padding-bottom: 5px;
`;
