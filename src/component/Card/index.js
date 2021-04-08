import styled from 'styled-components/macro';
import { StyleConstants } from 'styles/StyleConstants';

export function Card({ children }) {
  return <CardWrap>{children}</CardWrap>;
}

const CardWrap = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #fff;
  margin: 15px;
  padding: 10px;
  box-shadow: 0px 0px 5px -2px;

  &.pull-right {
    margin-left: auto;
  }

  @media (min-width: ${StyleConstants.TABLET}) {
    width: 50%;
  } ;
`;
