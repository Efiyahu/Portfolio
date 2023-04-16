import styled from 'styled-components';
import Summary from 'components/Summary';
import Specialties from 'components/Specialties';
const HomeScreen = () => (
  <>
    <Summary />
    <SubTitle>What are my specialties ?</SubTitle>
    <Specialties />
  </>
);

export default HomeScreen;

const SubTitle = styled.h2`
  margin: 200px 0 100px 0;
  font-size: ${({ theme }) => theme.typography.sizes.h2};
`;
