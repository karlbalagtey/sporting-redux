import styled from 'styled-components/macro';
import { StyleConstants } from 'styles/StyleConstants';

export function Footer() {
  return (
    <FooterWrap>
      <Container>2021 Sportlabs Technology Ltd. All rights reserved</Container>
    </FooterWrap>
  );
}

const FooterWrap = styled.footer`
  background-color: #fff;
  padding: 20px;
  margin-top: auto;
  display: flex;
  justify-content: center;
`;

const Container = styled.p`
  max-width: ${StyleConstants.CONTAINER};
  width: 100%;
  font-size: 11px;
`;
