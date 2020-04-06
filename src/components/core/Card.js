import React from 'react';
import styled from 'styled-components';
import { FcH1, DivCentered } from '../Styled/text';

const DivCard = styled.div`
  display: flex;
  background: grey;
  border-radius: 4px;
  max-width: 170px;

  > div {
    width: 170px;
    height: 240px;
    margin: 8px;
    padding: 9px;
  }
  .card-back {
    display: none;
  }
  &:hover {
    .card-back {
      display: block;
    }
    .card-front {
      display: none;
    }
  }
`;

const LogoContainer = styled(DivCentered)`
  margin: 16px 0px;
  width: 100%;
`;

const DivLogo = styled.img`
  background-color: white;
  border-radius: 100%;
  height: 100px;
  width: 100px;
`;


const Card = () => {
  return (
    <DivCard>
      <div className="card-front">
        <LogoContainer>
          <DivLogo src="https://lh3.googleusercontent.com/proxy/nEWY1vD_bslRh4bQKFRxaCfuQL0bzJLZ8bji31l3_ldRvJLZhfwmUVKViVxb0o_hKHSQ3dlXxC9Ht48IdhIq67Y-wafkv0y8AwtUtcXKP9pp8w" />
        </LogoContainer>
        <FcH1>
          Toros
        </FcH1>
        <FcH1>Manizales</FcH1>
      </div>
      <div className="card-back">
        <div>
          lorem impsum
        </div>
      </div>
    </DivCard>
  );
}

export default Card;