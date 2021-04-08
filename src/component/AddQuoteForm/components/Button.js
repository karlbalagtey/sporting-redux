import styled from 'styled-components/macro';
import { StyleConstants } from 'styles/StyleConstants';

export function Button({ handleClick, children, ...props }) {
  return (
    <ButtonWrap onClick={handleClick} {...props}>
      {children}
    </ButtonWrap>
  );
}

const ButtonWrap = styled.button`
  display: block;
  border: 1px solid ${StyleConstants.BLUE};
  border-radius: 2px;
  font-size: ${StyleConstants.SMALLTEXT};
  padding: 12px;
  color: ${StyleConstants.BLUE};
  background-color: transparent;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${StyleConstants.BLUE};
    color: #fff;
  }
`;
