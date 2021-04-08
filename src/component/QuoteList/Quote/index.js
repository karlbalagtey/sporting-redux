import styled from 'styled-components/macro';

export function Quote({ message, person }) {
  return (
    <QuoteContainer>
      <Message>{message}</Message>
      <Person>{person}</Person>
    </QuoteContainer>
  );
}

const QuoteContainer = styled.li`
  list-style: none;
  padding: 10px;
  border-bottom: 1px solid lightgray;

  &:last-child {
    border-bottom: 0;
  }
`;

const Message = styled.blockquote`
  font-style: italic;
  margin: 0;
`;

const Person = styled.p`
  font-size: 12px;
  margin: 10px 0;
`;
