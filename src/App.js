import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";
import * as s from "./styles/globalStyles";
import styled from "styled-components";
import Web3 from "web3";
import 'rsuite/styles/index.less';
import "rsuite/dist/rsuite.min.css";
import { Panel, PanelGroup } from 'rsuite';
import { Carousel } from 'rsuite';
import { Notification, toaster } from 'rsuite';
import { Loader } from 'rsuite';
import { Badge } from 'rsuite';

const truncate = (input, len) =>
  input.length > len ? `${input.substring(0, len)}...` : input;

export const StyledButton = styled.button`
  font-family: 'coder';
  padding: 10px;
  font-size: 1rem;
  border-radius: 6px;
  border: none;
  background-color: black;
  padding: 10px;
  letter-spacing: 2px;
  font-weight: bold;
  color: white;
  width: 270px;
  height: 50px;
  cursor: pointer;
  box-shadow: 0px 6px 0px -2px black;
  -webkit-box-shadow: 0px 6px 0px -2px black;
  -moz-box-shadow: 0px 6px 0px -2px black;
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
  :hover {
    color: silver;
  }
  @media (max-width: 565px) {
    width: 200px;
    height: 50px;
    font-size: 0.75rem;
  }
`;

export const CTNButton = styled.button`
  font-family: 'coder';
  padding: 10px;
  font-size: 1rem;
  border-radius: 6px;
  border: none;
  background-color: black;
  padding: 10px;
  letter-spacing: 2px;
  font-weight: bold;
  color: white;
  width: 270px;
  height: 50px;
  cursor: pointer;
  box-shadow: 0px 6px 0px -2px black;
  -webkit-box-shadow: 0px 6px 0px -2px black;
  -moz-box-shadow: 0px 6px 0px -2px black;
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
  :hover {
    color: silver;
  }
  @media (max-width: 565px) {
    width: 200px;
    height: 50px;
    font-size: 0.75rem;
  }
`;

export const Maxbtn = styled.button`
  font-family: 'coder';
  font-size: 0.75rem;
  border-radius: 10px;
  background-color: #F48C2C;
  font-weight: bold;
  color: white;
  width: 80px;
  height: 30px;
  cursor: pointer;
  letter-spacing: 2px;
  :hover {
    color: black;
  }
  @media (max-width: 565px) {
    width: 200px;
    height: 50px;
    font-size: 0.75rem;
  }
`;

export const StyledRoundButton = styled.button`
  padding: 10px;
  border-radius: 10px;
  border: none;
  background-color: transparent;
  padding: 10px;
  font-weight: bold;
  font-size: 30px;
  color: white;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
  :hover {
    color: silver;
  }
`;

export const LogoDiv = styled.div`
display: flex;
align-items: center;
justify-content: center;
align-content: center;
gap: 10%;
width: 300px;
`;

export const ResponsiveWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: stretched;
  align-items: center;
  margin: auto;
  width: 70%;
  border: 2px solid white;
  border-radius: 40px;
  background: linear-gradient(90deg, rgba(135,142,20,1) 10%, rgba(0,125,223,1) 93%);
    @media (min-width: 767px) {
    flex-direction: row;
  }
`;

export const ResponsiveWrapperHeader = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-height: 80px;
  padding: 10px;
  background-color : #252525;
  @media (min-width: 767px) {
    flex-direction: row;
  }
  @media (max-width: 565px) {
    max-height: 220px;
  }
`;

export const StyledLogo = styled.img`
  display: inline;
  width: 200px;
  @media (max-width: 767px) {
    width: 150px;
  }
  transition: width 0.5s;
  transition: height 0.5s;
`;

export const StyledImg = styled.img`
  width: 450px;
  border-radius: 5px;
  @media (min-width: 900px) {
    width: 450px;
  }
  @media (min-width: 1000px) {
    width: 450px;
  }
  transition: width 0.5s;
  @media (max-width: 565px) {
    width: 200px;
  }
`;

export const Styledroad = styled.img`
  width: 100%;
  border-radius: 5px;
  transition: width 0.5s;
`;

export const StyledImgSmall = styled.img`
  width: 220px;
  height: 220px;
  border-radius: 5px;
  @media (min-width: 900px) {
    width: 220px;
    height: 220px;
  }
  @media (min-width: 1000px) {
    width: 220px;
    height: 220px;
  }
  transition: width 0.5s;
  @media (max-width: 565px) {
    width: 200px;
  }
`;

export const StyledLink = styled.a`
  color: var(--secondary);
  text-decoration: none;
`;

export const WalletBox = styled.div`
  text-decoration: none;
  border-radius: 10px;
  border: 2px solid white;
  background-color: transparent;
  //padding: 10px;
  font-weight: bold;
  font-size: 15px;
  width: 180px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 0px -2px white;
  -webkit-box-shadow: 0px 4px 0px -2px white;
  -moz-box-shadow: 0px 4px 0px -2px white;
  @media (max-width: 565px) {
    margin-top: 20px;
  
`;

function App() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [walletAddress, setAddress] = useState("Not Connected");
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(``);
  const [tokens, settokens] = useState(1);
  const [brd, setbrd] = useState("2px solid #FFFFFF");
  const [bxsh, setbxsh] = useState("0px 0px 3px 0px #FFFFFF");
  const [DOT, setDOT] = useState("red");
  const [type, setType] = React.useState('info');
  const [placement, setPlacement] = React.useState('topStart');
  const errmessage = (
    <Notification type={'error'} header={'error'} closable>
     Sorry, something went wrong please try again later.
    </Notification>
  );
  const txmessage = (
    <Notification type={'success'} header={'success'} closable>
     Congrats, Mint Was successfull.
    </Notification>
  );
  const mntmessage = (
    <Notification type={'info'} header={'success'} closable>
     <Loader/> Minting in Progress....
    </Notification>
  );
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    DISPLAY_COST: 0,
    WL_Display: 0,
    GAS_LIMIT: 0,
    MAX_PER_TX: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    Telegram: "",
    Discord: "",
    Twitter: "",
    SHOW_BACKGROUND: false,
  });

  const claimNFTs = () => {
    let cost = CONFIG.DISPLAY_COST * tokens;
    let price = Web3.utils.toWei(cost.toString(), 'ether');
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalGasLimit = String(gasLimit);
    console.log("Cost: ", price);
    console.log("Gas limit: ", totalGasLimit);
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNft(true);
    setbrd("2px solid yellow");
    setbxsh("0px 0px 3px 0px yellow");
    toaster.push(mntmessage, { placement })
    blockchain.smartContract.methods
      .mint(tokens)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: price,
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry, something went wrong please try again later.");
        setClaimingNft(false);
        toaster.push(errmessage, { placement })
        setbrd("2px solid red");
        setbxsh("0px 0px 3px 0px red");
      })
      .then((receipt) => {
        console.log(receipt);
        setFeedback(
          `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
        );
        toaster.push(txmessage, { placement })
        setbrd("2px solid green");
        setbxsh("0px 0px 3px 0px green");
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  const decrementtokens = () => {
    let newtokens = tokens - 1;
    if (newtokens < 1) {
      newtokens = 1;
    }
    settokens(newtokens);
  };

  const incrementtokens = () => {
    let newtokens = tokens + 1;
    if (newtokens > CONFIG.MAX_PER_TX) {
      newtokens = CONFIG.MAX_PER_TX;
    }
    settokens(newtokens);
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
      setAddress(blockchain.account.substring(0,4) + "..." + blockchain.account.substring(38,42));
      setDOT("green");
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
  }, []);

  useEffect(() => {
    getData();
  }, [blockchain.account]);

  return (
    <s.Screen>
      <s.Container
        flex={1}
        // ai={"center"}
        style={{backgroundColor: "var(--primary)" }}
        image={CONFIG.SHOW_BACKGROUND ? "/config/images/bg.png" : null}
      >
        <ResponsiveWrapperHeader>

          <LogoDiv>
          <a href="#" target={"_blank"}>
            <StyledLogo alt={"logo"} src={"/config/images/logo.png"} />
          </a>
          </LogoDiv>

          <s.Headerlinks>
            <s.StyledLink href="#story">
              Story
            </s.StyledLink >
            <s.StyledLink href="#sneak">
               Sneak Peaks
              </s.StyledLink>
              <s.StyledLink href="#faq">
               FAQ
              </s.StyledLink>
          </s.Headerlinks>



          <s.HeaderDiv>
          <s.socialDiv>
          <a href={CONFIG.Telegram} target={"_blank"}>
          <s.Icons src="/config/images/telegram.svg" alt="telegram" />
          </a>
            <a href={CONFIG.Twitter} target={"_blank"}>
          <s.Icons src="/config/images/twitter.svg" alt="twitter" />
          </a>
          <a href={CONFIG.Discord} target={"_blank"}>
          <s.Icons src="/config/images/discord.svg" alt="discord" />
          </a>
          <a href={CONFIG.MARKETPLACE_LINK} target={"_blank"}>
          <s.Icons src="/config/images/opensea.svg" alt="opensea" />
          </a>
          </s.socialDiv>
          <WalletBox>
            {blockchain.account !== "" ? (
            <>
            <s.TextSubTitle style={{fontSize: "1rem", color: "white"}}>
            <Badge color={DOT}/> {walletAddress}
              </s.TextSubTitle>
            </>
            ) : null }
          </WalletBox>
          </s.HeaderDiv>

        </ResponsiveWrapperHeader>
        <s.SpacerLarge/>

        <s.Container flex={1} jc={"center"} ai={"center"}>
          <s.TextTitle>
            Mint Your {CONFIG.NFT_NAME}
          </s.TextTitle>

        </s.Container>
    
        <s.SpacerSmall />
        <ResponsiveWrapper flex={1} style={{ padding: 24 }} test>
        <StyledImg src={"/config/images/11.jpg"} alt="image" />
        <s.SpacerSmall/>
            <s.Container flex={1} jc={"center"} ai={"center"} >


           {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
              <>
                <s.TextSub
                  style={{ textAlign: "center", color: "var(--accent-text)", fontFamily: "coder" }}
                >
                  The sale has ended.
                </s.TextSub>
                <s.TextDescription
                  style={{ textAlign: "center", color: "var(--accent-text)", fontFamily: "coder" }}
                >
                  You can still find {CONFIG.NFT_NAME} on
                </s.TextDescription>
                <s.SpacerSmall />
                <StyledLink target={"_blank"} href={CONFIG.MARKETPLACE_LINK}>
                  {CONFIG.MARKETPLACE}
                </StyledLink>
              </>
            ) : (
              <>
                <s.TextSub
                  style={{ textAlign: "center", color: "var(--accent-text)", fontFamily: "coder"  }}
                >
                  {data.totalSupply} | {CONFIG.MAX_SUPPLY}
                </s.TextSub>
                <s.SpacerSmall />
                <s.TextTotal style={{background: "white" , borderRadius: 5, padding: 8, color: "black"}}>
                      Price&emsp;&emsp;&emsp;&emsp;&emsp;{CONFIG.DISPLAY_COST}{" "}{CONFIG.NETWORK.SYMBOL}
                    </s.TextTotal>
                <s.SpacerMedium/>
                {blockchain.account === "" ||
                blockchain.smartContract === null ? (
                  <>
                  <s.Container ai={"center"} jc={"center"}>
                    <s.SpacerSmall />
                    <CTNButton
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(connect());
                        getData();
                      }}
                    >
                      CONNECT Wallet
                      <img style={{width: 30, paddingLeft: 10 }} src={"/config/images/mm.svg"} />
                    </CTNButton>
                    {blockchain.errorMsg !== "" ? (
                      <>
                        <s.SpacerSmall />
                        <s.TextDescription
                          style={{
                            textAlign: "center",
                            color: "var(--accent-text)",
                            fontFamily: "coder",
                            fontSize: 20
                          }}
                        >
                          {blockchain.errorMsg}
                        </s.TextDescription>
                      </>
                    ) : null}
                  </s.Container>
                  </>
                ) : (
                  <>
                    <s.AmountContainer style={{
                      border: brd,
                      boxShadow: bxsh,
                    }}>
                      <StyledRoundButton
                        style={{ lineHeight: 0.4 }}
                        disabled={claimingNft ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          decrementtokens();
                        }}
                      >
                        -
                      </StyledRoundButton>
                      <s.TEXTamount>
                        &ensp;&ensp;&ensp;&ensp;{tokens}&ensp;&ensp;&ensp;&ensp;
                      </s.TEXTamount>
                      <s.SpacerMedium />
                      <StyledRoundButton
                        disabled={claimingNft ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          incrementtokens();
                        }}
                      >
                        +
                      </StyledRoundButton>
                    </s.AmountContainer>
                    <s.SpacerSmall />
                    <Maxbtn
                        onClick={(e) => {
                          e.preventDefault();
                          settokens(CONFIG.MAX_PER_TX);
                        }}
                        >
                      SetMax
                    </Maxbtn>
                    <s.SpacerSmall />
                    <s.SpacerSmall />
                    <s.TextTotal style={{color: "black"}}>
                      Total&emsp;&emsp;&emsp;&emsp;&emsp;{(CONFIG.DISPLAY_COST * tokens).toString().substring(0, 6)}{" "}{CONFIG.NETWORK.SYMBOL}
                    </s.TextTotal>
                    <s.SpacerSmall />
                    <s.SpacerXSmall />
                    <s.Container ai={"center"} jc={"center"} fd={"column"}>
                            <StyledButton
                            disabled={claimingNft ? 1 : 0}
                            onClick={(e) => {
                              e.preventDefault();
                              claimNFTs();
                              getData();
                            }}
                          >
                            {claimingNft ? <Loader speed="fast" content="Minting..." /> : "MINT"} 
                          </StyledButton>
                    </s.Container>
                    <s.SpacerXSmall/>
                    <s.TextSubTitle style={{fontSize: 15}}>
                    Max {CONFIG.MAX_PER_TX} Per Tx
                    </s.TextSubTitle>
                    <s.SpacerXSmall/>
                    <s.TextSubTitle style={{textAlign: "center", fontSize: "1rem"}}>
                    {feedback}
                    </s.TextSubTitle>
              </>
            )}
            </>
            )}
            <s.SpacerMedium />
            </s.Container>
          <s.SpacerLarge />
        </ResponsiveWrapper>


        <s.SpacerLarge />
        <s.SecContainer id="story">
        <s.TextTitle>
            STORY
            </s.TextTitle>
            <s.SpacerLarge/>
            <s.TextP>

lorem ipsum
<br></br><br></br>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
<br></br><br></br>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.            
</s.TextP>
            </s.SecContainer>

            <s.SecContainer id="sneak">
            <s.TextTitle>
            Sneak Peaks
            </s.TextTitle>
            <s.SpacerLarge/>
            <s.CBOX>
            <Carousel autoplay className="custom-slider">
    <img src="/config/images/1.jpg" />
    <img src="/config/images/2.jpg" />
    <img src="/config/images/3.jpg" />
    <img src="/config/images/4.jpg" />
    <img src="/config/images/5.jpg" />
  </Carousel>
  </s.CBOX>
              </s.SecContainer>

              <s.SecContainer id="faq">
            <s.TextTitle>
            FAQ
            </s.TextTitle>
            <s.SpacerLarge/>
            <PanelGroup style={{width: "80%", borderColor: "#A9D0D2"}} accordion bordered>
    <Panel header="what is an nft?" defaultExpanded>
    <s.TextP style={{textAlign: "left"}}>
          lorem ipsum dalar valar malar havan huarasf afaxvas fafs
          </s.TextP>
    </Panel>
    <Panel header="how can i mint">
    <s.TextP style={{textAlign: "left"}}>
    lorem ipsum dalar valar malar havan huarasf afaxvas fafs
          </s.TextP>
    </Panel>
    <Panel header="what is hashlips">
    <s.TextP style={{textAlign: "left"}}>
    lorem ipsum dalar valar malar havan huarasf afaxvas fafs
          </s.TextP>
    </Panel>
    <Panel header="what is hashlips">
    <s.TextP style={{textAlign: "left"}}>
    lorem ipsum dalar valar malar havan huarasf afaxvas fafs
          </s.TextP>
    </Panel>
    <Panel header="what is hashlips">
    <s.TextP style={{textAlign: "left"}}>
    lorem ipsum dalar valar malar havan huarasf afaxvas fafs
          </s.TextP>
    </Panel>
    <Panel header="what is hashlips">
    <s.TextP style={{textAlign: "left"}}>
    lorem ipsum dalar valar malar havan huarasf afaxvas fafs
          </s.TextP>
    </Panel>
  </PanelGroup>
            </s.SecContainer>



            <s.SecContainer id="">
                <s.socialDiv>
          <a href={CONFIG.Telegram} target={"_blank"}>
          <s.Icons src="/config/images/telegram.svg" alt="telegram" />
          </a>
            <a href={CONFIG.Twitter} target={"_blank"}>
          <s.Icons src="/config/images/twitter.svg" alt="twitter" />
          </a>
          <a href={CONFIG.Discord} target={"_blank"}>
          <s.Icons src="/config/images/discord.svg" alt="discord" />
          </a>
          <a href={CONFIG.MARKETPLACE_LINK} target={"_blank"}>
          <s.Icons src="/config/images/opensea.svg" alt="opensea" />
          </a>
          </s.socialDiv>
          <s.SpacerLarge/>
          <s.TextP>
          Copyright © 2022 {CONFIG.NFT_NAME}
          </s.TextP>
            </s.SecContainer>




        <s.SpacerMedium />
      </s.Container>
    </s.Screen>
  );
}

export default App;
