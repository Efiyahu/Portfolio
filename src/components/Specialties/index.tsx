import * as React from 'react';
import styled from 'styled-components';
import ImageOne from 'assets/image1.svg';
import ImageTwo from 'assets/image2.svg';
import ImageThree from 'assets/image3.svg';
import { useAnimation, useInView, motion } from 'framer-motion';

const Specialties = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  const animationControls = useAnimation();
  const animationControlsTwo = useAnimation();
  React.useEffect(() => {
    function sequence() {
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
    <>
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
    </>
  );
};

export default Specialties;

const SpecialtiesContainer = styled.div`
  display: flex;
  border-radius: 8px;
  height: 500px;
  width: 100%;
  border: 2px solid #eee;
  overflow: hidden;
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
