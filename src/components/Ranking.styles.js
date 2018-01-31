  import styled from 'styled-components';
import { neutrals, spacings } from '../theme';

// TODO: This component needs some more styles
export const StyledRanking = styled.ol`
  max-width: 613px;
  margin: 0 auto;
  padding: 0;
  border-radius: 4px;
  box-shadow:0 1px 3px #DAE2E6;
  background-color: ${neutrals.lightest};

  > li {
    display: flex;
    align-items:center;
    counter-increment: item;
    height:84px;

    ::before {
      content: counter(item);
      font-size:13px;
      color:#2C2D30;
      font-family:'lato';
      font-weight:600;
      padding: 0 16px 0 27px;
      margin: auto 0;
    }
  
    :nth-child(even) {
  background-color: #F7F9FB;
  }
  span:nth-child(1),
  span:nth-child(2),
  span:nth-child(3) {
    margin-right:37px;
  }

    :nth-child(1)::after,
    :nth-child(2)::after,
    :nth-child(3)::after {
      font-size: 16px;
      position: relative;
      right: 32px;
    }

    :nth-child(1)::after {
      content: '🥇';
    }

    :nth-child(2)::after {
      content: '🥈';
    }

    :nth-child(3)::after {
      content: '🥉';
    }
  }
`;

export const StyledPoints = styled.span`
  margin: auto 32px auto auto;
  font-weight:bold;
  font-size:13px;
  color: #2C2D30;
  font-family:'lato';
`;

export const StyledImg = styled.div`
  margin-right:24px;
  padding: 18px 0;
`;


export const StyledContainer = styled.div`
  margin: 0 auto;
  position: relative;
`;

export const StyledHeader = styled.header`
  top: 0;
  right: 0;
  left: 0;
  position: fixed;
  z-index: 1;
  background-color: rgba(245, 247, 250, 0.95);
  display: flex;
  padding: ${spacings.m}px;
  justify-content: space-between;
  font-size: 19px;
  line-height: 30px;
  margin-left: ${spacings.s}px;
  color: ${neutrals.darkest};

  > h1 {
    font-weight: 500;
    display: flex;
    margin-right: ${spacings.m}px;
  }
`;

export const StyledContent = styled.main`
  padding: 16px;
  background-color: rgb(245, 247 ,250);
  padding-top: 106px;
`;
