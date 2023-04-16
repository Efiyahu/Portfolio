import { TypeAnimation } from 'react-type-animation';
import styled from 'styled-components';
import MyPic from 'assets/myself.jpg';

import { ReactComponent as Wave } from 'assets/wave.svg';
import { ReactComponent as Dots } from 'assets/dots.svg';

const letters = 'Full stack Developer';

const Summary = () => (
  <Wrapper>
    <InfoWrapper>
      <h1>
        Efi <span>Alkhazov</span>
      </h1>
      <h3>
        <TypeAnimation sequence={[letters, 1000, '', 1000, letters]} repeat={Infinity} />
      </h3>
      <p>
        Full stack developer, with experience <br /> in both Web and mobile apps, using React, <br /> Typescript,
        React-native and node.js
      </p>
    </InfoWrapper>
    <Image />
    <StyledWave />
    <StyledDots />
  </Wrapper>
);

export default Summary;

const Wrapper = styled.div`
  display: flex;
  cursor: default;
  margin-top: 50px;
  position: relative;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  h1 {
    margin: 20px 0;
    font-size: 3.5rem;
    font-weight: 900;
    font-family: 'Roboto', sans-serif;
    letter-spacing: -2px;
    line-height: 60%;

    span {
      color: ${({ theme }) => theme.colors.background.red};
      display: block;
      margin-left: 5px;
    }
  }
  h3 {
    font-size: ${({ theme }) => theme.typography.sizes.h3};
    margin-bottom: 25px;
  }
`;

const Image = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background-image: url(${MyPic});
  background-size: cover;
  z-index: 1;
`;

const StyledDots = styled(Dots)`
  position: absolute;
  left: 0px;
  opacity: 1;
  top: 70px;
  transform: rotate(45deg);
  z-index: -1;
`;

const StyledWave = styled(Wave)`
  position: absolute;
  left: 130px;
  opacity: 0.5;
  top: 0px;
`;
