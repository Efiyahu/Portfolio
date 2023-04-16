import styled from 'styled-components';

import Summary from 'components/Summary';
import Specialties from 'components/Specialties';

const HomeScreen = () => (
  <Container>
    <Summary />
    <SubTitle>What are my specialties ?</SubTitle>
    <Specialties />
  </Container>
);

export default HomeScreen;

const Container = styled.div`
  width: 60vw;
  margin: auto;
  background-color: rgba(41, 41, 41, 0.9);
  padding: 40px 80px 80px 80px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 7px 29px 0px;
`;

const SubTitle = styled.h2`
  margin: 200px 0 100px 0;
  font-size: ${({ theme }) => theme.typography.sizes.h2};
`;
