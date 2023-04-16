import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion, useAnimation, useInView } from 'framer-motion';
import { IoIosPaper } from 'react-icons/io';
import { BsFileEarmarkPersonFill } from 'react-icons/bs';
import MyPic from 'assets/myself.jpg';
import { TypeAnimation } from 'react-type-animation';

import { ReactComponent as Wave } from 'assets/wave.svg';
import { ReactComponent as Dots } from 'assets/dots.svg';
import ImageOne from 'assets/image1.svg';
import ImageTwo from 'assets/image2.svg';
import ImageThree from 'assets/image3.svg';

const letters = 'Full stack Developer';

const HomeScreen = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  const animationControls = useAnimation();
  const animationControlsTwo = useAnimation();
  React.useEffect(() => {
    function sequence() {
      console.log(isInView);
      if (isInView) {
        animationControls.start({ y: 0, opacity: 1 });
        animationControlsTwo.start({ y: 0, opacity: 1 });
      }
      if (!isInView) {
        animationControls.start({ y: '-300%', opacity: 0 });
        animationControlsTwo.start({ y: '-100%', opacity: 0 });
      }
    }
    sequence();
  }, [animationControls, animationControlsTwo, isInView]);

  return (
    <Container>
      <Nav>
        <div>logo</div>
        <Email>efraimalhazov@gmail.com</Email>
        <LinksContainer>
          <StyledLink to="/works">
            <div>
              <IoIosPaper color="#eee" />
              Works
            </div>
          </StyledLink>
          <StyledLink to="/Resume">
            <div>
              <BsFileEarmarkPersonFill color="#eee" />
              Resume
            </div>
          </StyledLink>
        </LinksContainer>
      </Nav>
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

      <SubTitle>What are my specialties ?</SubTitle>
      <SpecialtiesContainer>
        <TextContainer
          animate={animationControlsTwo}
          transition={{ ease: 'easeInOut', duration: 1.2 }}
          initial={{ y: '-100%', opacity: 0 }}
          className="left"
          style={{ flex: 1, width: '50%', height: '100%' }}
        >
          <CardTitle>Front end development</CardTitle>
          <CardText>
            As a front-end developer, I have developed expertise in creating responsive and engaging user interfaces
            using React. My skills in HTML, CSS, and JavaScript and TypeScript, combined with my passion for creating
            visually appealing and functional websites, have led me to successfully complete projects for clients in
            various industries.
          </CardText>
          <CardTitle>Native development</CardTitle>
          <CardText>
            Proficiency in developing and creating Native applications (Both Android and IOS) using React Native
            Library.
          </CardText>
          <CardTitle>Backend development</CardTitle>
          <CardText>
            As a Node.js developer, I specialize in developing scalable, high-performance web applications. My expertise
            in Node.js, might not be proficient as of yet, But Im a fast learner and surely continue on improving my
            skills.
          </CardText>
        </TextContainer>
        <ImageContainer>
          <StyledImageOne
            initial={{ y: '-100%', opacity: 0 }}
            animate={animationControlsTwo}
            transition={{ ease: 'easeInOut', duration: 1.2 }}
          />
          <StyledImageTwo
            initial={{ y: '-100%', opacity: 0 }}
            animate={animationControlsTwo}
            transition={{ ease: 'easeInOut', duration: 1 }}
          />
          <StyledImageThree
            initial={{ y: '-300%', opacity: 0 }}
            animate={animationControls}
            transition={{ ease: 'easeInOut', duration: 0.8 }}
          />
        </ImageContainer>
      </SpecialtiesContainer>
      <div ref={ref} />
    </Container>
  );
};

export default HomeScreen;

const Container = styled.div`
  width: 60vw;
  margin: auto;
  background-color: rgba(41, 41, 41, 0.9);
  padding: 40px 80px 80px 80px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 7px 29px 0px;
`;

const Nav = styled.nav`
  display: flex;
  color: ${({ theme }) => theme.colors.primary.light};
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const LinksContainer = styled.div`
  display: flex;

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const StyledLink = styled(Link)`
  font-size: ${({ theme }) => theme.typography.sizes.p};
  transition: all 0.3s;
  padding: 5px 10px;
  margin: 0 2px;

  div {
    display: flex;
    align-items: center;
    svg {
      margin-right: 3px;
    }
  }

  :hover {
    transform: rotate(-10deg) scale(1.1);
    background-color: ${({ theme }) => theme.colors.background.red};
  }
`;

const Email = styled.p`
  margin: 0;
  padding: 5px 10px;
  transition: all 0.3s;
  cursor: default;

  :hover {
    transform: rotate(-10deg) scale(1.1);
    background-color: ${({ theme }) => theme.colors.background.red};
  }
`;

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

const SpecialtiesContainer = styled.div`
  display: flex;
  border-radius: 8px;
  height: 500px;
  width: 100%;
  border: 2px solid #eee;
  overflow: hidden;
`;

const SubTitle = styled.h2`
  margin: 200px 0 100px 0;
  font-size: ${({ theme }) => theme.typography.sizes.h2};
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

const ImageContainer = styled.div`
  flex: 1;
  position: relative;
  width: 50%;
  height: 100%;
`;

const StyledImageOne = styled(motion.div)`
  background-image: url(${ImageOne});
  position: absolute;
  background-size: cover;
  width: 200px;
  height: 200px;
  right: 10px;
  top: 50px;
`;
const StyledImageTwo = styled(motion.div)`
  background-image: url(${ImageTwo});
  position: absolute;
  background-size: cover;

  width: 150px;
  height: 150px;
  left: 50px;
  top: 20px;
`;
const StyledImageThree = styled(motion.div)`
  background-image: url(${ImageThree});
  background-size: contain;
  position: absolute;
  width: 250px;
  height: 147px;
  right: 120px;
  bottom: -1px;
`;

const TextContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  text-align: center;
  padding: 40px 10px;
  flex-direction: column;
`;

const CardTitle = styled.h6`
  font-size: ${({ theme }) => theme.typography.sizes.h6};
  margin: 20px 0;
`;

const CardText = styled.p`
  font-size: 0.875rem;
`;
