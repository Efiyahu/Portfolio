import * as React from 'react';
import styled from 'styled-components';

type Props = {
  title: string;
  text: string;
  height?: string;
  width?: string;
};

const Card = ({ title, text, height = '200px', width = '200px' }: Props) => {
  const [showBackground, setShowBackground] = React.useState<boolean>(true);

  React.useEffect(() => {
    console.log(showBackground);
  });
  return (
    <Container
      onMouseEnter={() => setShowBackground(false)}
      onMouseLeave={() => setShowBackground(true)}
      height={height}
      width={width}
      fold={!showBackground}
    >
      {!showBackground && (
        <>
          <Title>{title}</Title>
          <Text>{text}</Text>
        </>
      )}
    </Container>
  );
};

const Container = styled.div<{ width: string; height: string; fold: boolean }>`
  border-radius: 8px;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  box-shadow: rgba(0, 0, 0, 0.15) 0px 7px 29px 0px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;

  :hover {
    transform: scale(1.1);
  }
`;

const Title = styled.h3`
  font-size: ${({ theme }) => theme.typography.sizes.h3};
  line-height: 100%;
  padding: 10px;
`;

const Text = styled.p`
  font-size: 0.875rem;
  padding: 10px;
`;

export default Card;
