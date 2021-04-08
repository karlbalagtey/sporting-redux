import styled from 'styled-components/macro';
import { useSelector } from 'react-redux';
import { selectIsFetching } from 'selectors';
import { LoadingIndicator } from '../LoadingIndicator';
import { Input } from '../Input';
import { Button } from '../Button';

export function Form({ onHandleChange, person, message }) {
  const isFetching = useSelector(selectIsFetching);

  return (
    <>
      <h2>Add a new quote</h2>
      <Input
        id="message"
        onChange={onHandleChange}
        value={message}
        type="text"
        name="message"
        label="Quote"
        labelFor="message"
        required
      />
      <Input
        id="person"
        onChange={onHandleChange}
        value={person}
        type="text"
        name="person"
        label="Person"
        labelFor="person"
        required
      />

      {isFetching ? (
        <LoaderWrap>
          <LoadingIndicator />
        </LoaderWrap>
      ) : (
        <Button type="submit">Submit</Button>
      )}
    </>
  );
}

const LoaderWrap = styled.div`
  display: flex;
  justify-content: center;

  svg {
    fill: #fff;
  }
`;
