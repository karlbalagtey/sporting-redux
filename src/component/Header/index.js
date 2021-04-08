import styled from 'styled-components/macro';
import headerBg from 'assets/header.jpg';

export function Header() {
  return (
    <HeaderWrap>
      <GradientLayer>
        <h1>Sporting quotes</h1>
      </GradientLayer>
    </HeaderWrap>
  );
}

const HeaderWrap = styled.header`
  height: 60vh;
  background-image: url(${headerBg});
  background-size: cover;
  background-position: 50% 50%;

  h1 {
    color: #fff;
    font-size: 3.4em;
    font-weight: 300;
  }
`;

const GradientLayer = styled.section`
  background-image: linear-gradient(
    90deg,
    rgba(37, 121, 199, 0.75),
    rgba(41, 181, 149, 0.75)
  );
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
