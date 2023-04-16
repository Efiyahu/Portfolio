import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { IoIosPaper } from 'react-icons/io';
import { BsFileEarmarkPersonFill } from 'react-icons/bs';
import Logo from 'assets/logo.png';

import Summary from 'components/Summary';
import Specialties from 'components/Specialties';

const HomeScreen = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Nav>
        <img onClick={() => navigate('/')} src={Logo} alt="logo" />
        <Email href="mailto:efraimalkhazov@gmail.com">efraimalhazov@gmail.com</Email>
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
      <Summary />
      <SubTitle>What are my specialties ?</SubTitle>
      <Specialties />
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

  img {
    width: 200px;
    cursor: pointer;
  }
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

const Email = styled.a`
  margin: 0;
  padding: 5px 10px;
  transition: all 0.3s;
  text-decoration: none;
  color: inherit;

  :hover {
    transform: rotate(-10deg) scale(1.1);
    background-color: ${({ theme }) => theme.colors.background.red};
  }
`;

const SubTitle = styled.h2`
  margin: 200px 0 100px 0;
  font-size: ${({ theme }) => theme.typography.sizes.h2};
`;
