import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addQuoteStart, resetAddQuote } from 'actions';
import { selectIsSuccessful } from 'selectors';

import { Form } from './components/Form';
import { Button } from './components/Button';
import { Card } from '../Card';

import styled from 'styled-components/macro';

export function AddQuoteForm() {
  const dispatch = useDispatch();
  const isSuccessful = useSelector(selectIsSuccessful);
  const [quote, setQuote] = useState({
    message: '',
    person: '',
  });

  const handleSubmit = e => {
    e.preventDefault();
    console.log(quote);
    dispatch(addQuoteStart(quote));
  };

  const handleChange = e => {
    const { value, name } = e.target;
    setQuote({ ...quote, [name]: value });
    console.log(quote);
  };

  const handleReset = e => {
    e.preventDefault();
    dispatch(resetAddQuote());
    setQuote({
      message: '',
      person: '',
    });
  };

  return (
    <Card>
      <AddQuoteFormWrap onSubmit={handleSubmit}>
        {isSuccessful ? (
          <ThankYou>
            <h2>Thank you!</h2>
            <Button type="button" onClick={handleReset}>
              Add another?
            </Button>
          </ThankYou>
        ) : (
          <Form onHandleChange={handleChange} {...quote} />
        )}
      </AddQuoteFormWrap>
    </Card>
  );
}

const AddQuoteFormWrap = styled.form`
  padding: 10px;

  h2 {
    margin-top: 0;
    font-size: 18px;
  }
`;

const ThankYou = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
