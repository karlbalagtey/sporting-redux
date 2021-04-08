import React from 'react';

import styled from 'styled-components/macro';
import bgImg from 'assets/bg.png';
import { GlobalStyle } from 'styles/global-styles';

import { Header } from 'component/Header';
import { Footer } from 'component/Footer';
import { QuoteList } from 'component/QuoteList';
import { AddQuoteForm } from 'component/AddQuoteForm';

import { StyleConstants } from 'styles/StyleConstants';

export function App() {
  return (
    <>
      <Header />
      <Wrapper>
        <Content>
          <AddQuoteForm />
          <QuoteList />
        </Content>
      </Wrapper>
      <Footer />
      <GlobalStyle />
    </>
  );
}

const Wrapper = styled.main`
  background-image: url(${bgImg});
  background-size: 100%;
  background-position-y: 100px;
  background-repeat: no-repeat;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 100%;
  max-width: ${StyleConstants.CONTAINER};
  padding: 20px;

  @media (min-width: ${StyleConstants.TABLET}) {
    flex-direction: row-reverse;
  }
`;
