import styled from "styled-components";

// Used for wrapping a page component
export const Screen = styled.div`
  background-color: #fff;
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: cover;
  background-position: center;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

// Used for providing space between components
export const SpacerXSmall = styled.div`
  height: 8px;
  width: 8px;
`;

// Used for providing space between components
export const SpacerSmall = styled.div`
  height: 16px;
  width: 16px;
`;

// Used for providing space between components
export const SpacerMedium = styled.div`
  height: 24px;
  width: 24px;
`;

// Used for providing space between components
export const SpacerLarge = styled.div`
  height: 32px;
  width: 32px;
`;

// Used for providing a wrapper around a component
export const Container = styled.div`
  display: flex;
  flex: ${({ flex }) => (flex ? flex : 0)};
  flex-direction: ${({ fd }) => (fd ? fd : "column")};
  justify-content: ${({ jc }) => (jc ? jc : "flex-start")};
  align-items: ${({ ai }) => (ai ? ai : "flex-start")};
  background-color: ${({ test }) => (test ? "pink" : "none")};
  width: 100%;
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: cover;
  background-position: center;
`;

export const AmountContainer = styled.div`
  display: flex;
  flex: ${({ flex }) => (flex ? flex : 0)};
  flex-direction: center;
  justify-content: center;
  align-items: center;
  //border: 2px solid #A673EF;
  border-radius: 10px;
  //box-shadow: 0px 0px 3px 0px #A673EF;
`;


export const TextTitle = styled.p`
  font-family: 'Upheaval';
  color: var(--primary-text);
  font-size: 60px;
  font-weight: 400;
  letter-spacing: 8px;
  line-height: 1.6;
  text-align: center;
  @media (max-width: 565px) {
    font-size: 25px;
    text-align: center;
    letter-spacing: 2px;
  }
`;

export const TextSub = styled.p`
  font-family: 'Upheaval';
  color: var(--primary-text);
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 8px;
  line-height: 1.6;
  @media (max-width: 565px) {
    font-size: 20px;
    letter-spacing: 2px;
  }
`;

export const TextTotal = styled.p`
  font-family: 'Upheaval';
  color: var(--primary-text);
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 2px;
  line-height: 1.6;
  @media (max-width: 565px) {
    font-size: 0.75rem;
    letter-spacing: 2px;
  }
`;

export const TextPrice = styled.p`
  font-family: 'Upheaval';
  color: white;
  font-size: 3rem;
  font-weight: bold;
  letter-spacing: 8px;
  line-height: 1.6;
  border: 2px solid midnightblue;
  width: 400px;
  background: #9DC5F0;
  text-align: center;
  @media (max-width: 565px) {
    font-size: 20px;
    letter-spacing: 2px;
    width: 200px;
  }
`;

export const TextSubTitle = styled.p`
  font-family: 'Renomono';
  color: var(--primary-text);
  font-size: 20px;
  font-weight: 400;
  line-height: 1.6;
  @media (max-width: 565px) {
    font-size: 0.75rem;
    letter-spacing: 2px;
    text-align: center;
  }
`;

export const TextDescription = styled.p`
  color: var(--primary-text);
  font-size: 60px;
  line-height: 1.6;
`;

export const TEXTamount = styled.p`
  color: var(--primary-text);
  font-size: 30px;
  line-height: 1.6;
  @media (max-width: 565px) {
    font-size: 20px;
    line-height: 0;
  }
`;

export const StyledClickable = styled.div`
  :active {
    opacity: 0.6;
  }
`;

export const StyledHR = styled.hr`
  border: 2px solid white;  
  background-color: white;
  border-radius: 2px;
  width: 450px;
  @media (max-width: 565px) {
    width: 350px;
  }
`;

export const StyledLink = styled.a`
  color: var(--primary-text);
  text-decoration: none;
  margin-right: 5rem;
  cursor: pointer;
  :hover {
    color: #FF8938;
  }
  @media (max-width: 565px) {
    margin-right: 0.75rem;
    margin-top: 1rem;
  }
`;

export const Icons = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    :hover {
      transform: scale(1.5);
      transition: transform 0.5s;
    }
`;

export const HeaderDiv = styled.div`
display: flex;
align-items: center;
margin-right: 3.5rem;
@media (max-width: 565px) {
  margin-right: 0;
  margin-top: 10px;
  margin-bottom: 20px;
  flex-direction: column;
}
`;

export const socialDiv = styled.div`
display: flex;
align-items: center;
@media (max-width: 565px) {
  margin-right: 0;
  margin-top: 20px;
  flex-direction: row;
}
`;

export const Headerlinks = styled.div`
    display: flex;
    align-items: center;
    @media (max-width: 565px) {
      margin-top: 10px;
      margin-bottom: 10px;
    }
`;

export const SecContainer = styled.div`
  display: flex;
  flex: ${({ flex }) => (flex ? flex : 0)};
  flex-direction: ${({ fd }) => (fd ? fd : "column")};
  justify-content: center;;
  align-items: center;
  background-color: ${({ test }) => (test ? "pink" : "none")};
  width: 100%;
  margin-top: 5%;
`;

export const TextP = styled.p`
text-align: center;
font-size: 1rem;
letter-spacing: 1px;
line-height: 2;
width: 70%;
`;

export const ExploreBTN = styled.button`
  font-family: 'coder';
  padding: 10px;
  font-size: 1rem;
  border-radius: 40px;
  border: none;
  background: linear-gradient(86.57deg, #D8AE43 6.92%, rgba(255, 92, 0, 0.79) 100.73%);
  padding: 10px;
  letter-spacing: 2px;
  font-weight: bold;
  color: white;
  width: 270px;
  height: 50px;
  cursor: pointer;
  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
  :hover {
    color: black;
  }
  @media (max-width: 565px) {
    width: 200px;
    height: 50px;
    font-size: 0.75rem;
  }
`;

export const imgContainer = styled.div`
  display: flex;
  background: #171717;
  border-radius: 40px;
  width: max-content;
  margin-top: 5%;
  align-items: center;
    justify-content: center;
    @media (max-width: 565px) {
      width: 100%;
    }
`;

export const workContainer = styled.div`
  display: flex;
  margin-top: 5%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 5%;
  @media (max-width: 565px) {
    flex-direction: column;
  }
`;

export const Box = styled.div`
height: 120px;
width: 250px;
border-radius: 20px;
background: #171717;
padding: 10px;
@media (max-width: 565px) {
  margin-top: 10px;
}
:hover {
  transform: scale(1.2);
}

`;

export const innerbox = styled.div`
    flex-direction: row;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    padding: 10px;
`;

export const innerIcons = styled.img`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    margin-right: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export const TextPBOX = styled.p`
text-align: left;
width: 125px;
font-size: 1rem;
`;

export const Textbox = styled.p`
text-align: left;
font-size: 0.75rem;
`;

export const CBOX = styled.div`
width: 30%;
@media (max-width: 565px) {
  width: 80%;
}
`;