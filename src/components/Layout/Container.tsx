import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

const Container = ({ children }: React.PropsWithChildren) => <Wrapper>{children}</Wrapper>;

export default Container;

const Wrapper = styled(motion.div)`
  width: 60vw;
  margin: auto;
  background-color: rgba(41, 41, 41, 0.9);
  padding: 40px 80px 80px 80px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 7px 29px 0px;
`;
