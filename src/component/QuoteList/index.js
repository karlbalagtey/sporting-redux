import { useSelector } from 'react-redux';
import { selectQuotes } from 'selectors';
import styled from 'styled-components/macro';

import { Quote } from './Quote';
import { Card } from '../Card';

export function QuoteList() {
  const quotes = useSelector(selectQuotes);

  return (
    quotes && (
      <Card>
        <QuoteListWrap>
          {quotes.map((q, index) => (
            <Quote key={index} {...q} />
          ))}
        </QuoteListWrap>
      </Card>
    )
  );
}

const QuoteListWrap = styled.ul`
  padding: 0;
  margin: 0;
`;
