import { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import * as theme from "./styles/theme";
import IllustrationWorking from "./assets/illustration-working.svg";
import BgShortenDesktop from "./assets/bg-shorten-desktop.svg";
import IconBrandRecognition from "./assets/icon-brand-recognition.svg";
import IconDetailedRecords from "./assets/icon-detailed-records.svg";
import IconFullyCustomizable from "./assets/icon-fully-customizable.svg";
import BgBoostDesktop from "./assets/bg-boost-desktop.svg";
import IconFacebook from "./assets/icon-facebook.svg";
import IconTwitter from "./assets/icon-twitter.svg";
import IconPinterest from "./assets/icon-pinterest.svg";
import IconInstagram from "./assets/icon-instagram.svg";

const Container = styled.div`
  width: 85%;
  margin: 0 auto;
  color: ${(props) => props.theme.colors.veryDarkViolet};
`;

const Button = styled.button`
  padding: 10px 20px;
  border: 0px;
  background-color: ${(props) => props.theme.colors.cyan};
  color: ${(props) => props.theme.colors.white};
  &:hover,
  &:active {
    opacity: 0.75;
  }
`;

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavbarLeft = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavbarBrandName = styled.h1`
  margin-right: 3vw;
`;

const NavbarNavLink = styled.a`
  margin-right: 1vw;
  color: ${(props) => props.theme.colors.veryDarkViolet};
  text-decoration: none;
  font-weight: 500;

  &:active {
    font-weight: 700;
  }
`;

const NavbarRight = styled.div`
  display: inline-block;
  margin-left: auto;
`;

const NavbarButton = styled(Button)`
  margin-right: 5px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.cyan};
  text-decoration: none;
  font-weight: 500;
`;

const NavbarUnfilledButton = styled(NavbarButton)`
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.darkViolet};
  transition: background-color 0.25s, color 0.25s;

  &:hover,
  &:active {
    background-color: ${(props) => props.theme.colors.cyan};
    color: ${(props) => props.theme.colors.white};
  }
`;

const HeroContainer = styled(Container)`
  width: 92.5%;
  display: flex;
  justify-content: space-between;
  margin: 2vh 0 0 auto;
`;

const HeroRight = styled.div`
  width: 50%;
  order: 2;
  overflow: hidden;
`;

const HeroLeft = styled.div`
  padding: 1vw 4vw 1vw 1vw;
  width: 50%;
  order: 1;
`;

const HeroTitleText = styled.h2`
  font-size: 4rem;
  margin-bottom: 0;
`;

const HeroSubtitleText = styled.p`
  font-size: 1.3rem;
  color: ${(props) => props.theme.colors.darkGray};
`;

const HeroButton = styled(Button)`
  border-radius: 20px;
  font-size: 1.2rem;
  font-weight: 600;
`;

const ShortenLinkOuterContainer = styled.div`
  background-image: linear-gradient(
    to bottom,
    ${(props) => props.theme.colors.white} 50%,
    ${(props) => props.theme.colors.lightGray} 50%,
    ${(props) => props.theme.colors.lightGray}
  );
`;

const ShortenLinkContainer = styled(Container)`
  display: flex;
  position: relative;
  margin-top: 10vh;
  background-color: ${(props) => props.theme.colors.darkViolet};
  background-image: url(${BgShortenDesktop});
  background-size: cover;
  border-radius: 10px;
`;

const ShortenLinkHiddenImage = styled.img`
  visibility: hidden;
`;

const ShortenLinkInnerContainer = styled.div`
  position: absolute;
  margin: auto auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
`;

const ShortenLinkInputText = styled.input`
  height: 10vh;
  width: 70%;
  border: 0;
  border-radius: 10px;
  margin-right: 2vw;
  font-size: 1.3rem;
  padding: 2px 10px;
`;

const ShortenLinkSubmitButton = styled(Button)`
  width: 20%;
  height: 10vh;
  font-size: 1.2rem;
  border-radius: 10px;

  &:hover,
  &:active {
    filter: brightness(1.3);
  }
`;

const ShortenLinkShortenedOuterContainer = styled.div`
  padding: 2vh;
  background-color: ${(props) => props.theme.colors.lightGray};
`;

const ShortenLinkPreviousShortenedLinks = styled.div``;

const ShortenLinkPreviousShortenedLink = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2vh;
  border-radius: 10px;
  margin-top: 1vh;
  background-color: ${(props) => props.theme.colors.white};
`;

const ShortenLinkPreviousShortenedLinkOriginal = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.veryDarkViolet};
`;

const ShortenLinkPreviousShortenedLinkShortened = styled.a`
  text-decoration: none;
  margin-right: 2vw;
  color: ${(props) => props.theme.colors.cyan};
`;

const ShortenLinkPreviousShortenedLinkButton = styled(Button)`
  border-radius: 5px;

  &:active {
    background-color: ${(props) => props.theme.colors.darkViolet};
  }
`;

const PreviousShortenedLinks = [];

const AdvancedStatisticsOuterContainer = styled.div`
  background-color: ${(props) => props.theme.colors.lightGray};
  z-index: 0;
`;

const AdvancedStatisticsContainer = styled(Container)`
  padding: 5vh;
`;

const AdvancedStatisticsTitleText = styled.h2`
  font-size: 2.5rem;
  text-align: center;
`;

const AdvancedStatisticsSubtitleText = styled.p`
  font-size: 1.3rem;
  text-align: center;
  color: ${(props) => props.theme.colors.gray};
`;

const AdvancedStatisticsBoxContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin: 10vh auto;
`;

const AdvancedStatisticsBox = styled.div`
  position: relative;
  padding: 15vh 5vh 5vh 5vh;
  width: 20%;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 10px;
  z-index: 2;
`;

const AdvancedStatisticsBoxConnector = styled.div`
  position: absolute;
  top: 50%;
  left: 1%;
  width: 95%;
  height: 1vh;
  z-index: 1;
  background-color: ${(props) => props.theme.colors.cyan};
`;

const AdvancedStatisticsBoxImageContainer = styled.div`
  padding: 8%;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(20%, -50%);
  border-radius: 50%;
  object-fit: contain;
  background-color: ${(props) => props.theme.colors.darkViolet};
`;

const AdvancedStatisticsBoxTitleText = styled.h2``;

const AdvancedStatisticsBoxDescriptionText = styled.p`
  font-size: 1.1rem;
  color: ${(props) => props.theme.colors.gray};
`;

const AdvancedStatistics = [
  {
    image: IconBrandRecognition,
    title: "Brand Recognition",
    description:
      "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
  },
  {
    image: IconDetailedRecords,
    title: "Detailed Records",
    description:
      "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
  },
  {
    image: IconFullyCustomizable,
    title: "Fully Customizable",
    description:
      "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
  },
];

const BoostLinksOuterContainer = styled.div`
  padding-top: 5vh;
  background-color: ${(props) => props.theme.colors.darkViolet};
  background-image: url(${BgBoostDesktop});
  text-align: center;
`;

const BoostLinksTitleText = styled.h2`
  margin: 0 auto 2vh;
  font-size: 3rem;
  color: ${(props) => props.theme.colors.white};
`;

const BoostLinksButton = styled(Button)`
  font-size: 1.2rem;
  margin: 10px auto 5vh auto;
  border-radius: 20px;
`;

const FooterOuterContainer = styled.div`
  background-color: ${(props) => props.theme.colors.veryDarkViolet};
  padding: 10vh 0 10vh 0;
`;

const FooterContainer = styled(Container)`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
`;

const FooterLogo = styled.div`
  width: 30%;
  color: ${(props) => props.theme.colors.white};
`;

const FooterLogoTitle = styled.h2`
  margin-top: 0;
  font-size: 2rem;
`;

const FooterList = styled.div`
  width: 16%;
  color: ${(props) => props.theme.colors.white};
`;

const FooterLists = [
  {
    group: "Features",
    items: ["Link Shortening", "Branded Links", "Analytics"],
  },
  { group: "Resources", items: ["Blog", "Developers", "Support"] },
  { group: "Company", items: ["About", "Our Team", "Careers", "Contact"] },
];

const FooterListItem = styled.a`
  display: inline-block;
  color: ${(props) => props.theme.colors.gray};
  text-decoration: none;
  margin-top: 1vh;

  &:hover {
    color: ${(props) => props.theme.colors.cyan};
  }
`;

const FooterSocialLink = styled.div`
  width: 20%;
  color: ${(props) => props.theme.colors.white};
`;

const FooterSocialItem = styled.img`
  display: inline-block;
  color: ${(props) => props.theme.colors.gray};
  text-decoration: none;
  margin-right: 2vh;
  &:hover {
    color: ${(props) => props.theme.colors.cyan};
  }
`;

const FooterSocialLinks = [
  { image: IconFacebook },
  { image: IconTwitter },
  { image: IconPinterest },
  { image: IconInstagram },
];

function copyToClipboard(data) {
  navigator.clipboard.writeText(data).then(
    function () {
      console.log("Content successfully copied");
    },
    function () {
      console.log("Content failed to copy");
    }
  );
}

function App() {
  const callFetch = (url) => {
    fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        PreviousShortenedLinks.push({
          original: data.result.full_short_link,
          shortened: data.result.original_link,
        });
      });
    console.log(PreviousShortenedLinks);
  };

  useEffect(() => {}, [PreviousShortenedLinks]);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Container>
          <Navbar>
            <NavbarLeft>
              <NavbarBrandName>Shortly</NavbarBrandName>
              <div>
                <NavbarNavLink href="/">Features</NavbarNavLink>
                <NavbarNavLink href="/">Pricing</NavbarNavLink>
                <NavbarNavLink href="/">Resources</NavbarNavLink>
              </div>
            </NavbarLeft>
            <NavbarRight>
              <NavbarUnfilledButton as="a" href="/">
                Login
              </NavbarUnfilledButton>
              <NavbarButton as="a" href="/">
                Sign&nbsp;Up
              </NavbarButton>
            </NavbarRight>
          </Navbar>
        </Container>
        <HeroContainer>
          <HeroRight>
            <img src={IllustrationWorking} />
          </HeroRight>
          <HeroLeft>
            <HeroTitleText>More than just shorter links</HeroTitleText>
            <HeroSubtitleText>
              Build your brand's recognition and get detailed insights on how
              your links are performing.
            </HeroSubtitleText>
            <HeroButton>Get Started</HeroButton>
          </HeroLeft>
        </HeroContainer>
        <ShortenLinkOuterContainer>
          <ShortenLinkContainer>
            <ShortenLinkHiddenImage src={BgShortenDesktop} />
            <ShortenLinkInnerContainer>
              <ShortenLinkInputText
                id="inputLink"
                type="text"
                placeholder="Shorten a link here..."
              />
              <ShortenLinkSubmitButton
                onClick={() =>
                  callFetch(document.getElementById("inputLink").value)
                }
              >
                Shorten It!
              </ShortenLinkSubmitButton>
            </ShortenLinkInnerContainer>
          </ShortenLinkContainer>
        </ShortenLinkOuterContainer>
        <ShortenLinkShortenedOuterContainer>
          {PreviousShortenedLinks.length > 0 ? (
            <ShortenLinkPreviousShortenedLinks>
              {PreviousShortenedLinks.map(({ original, shortened }) => {
                return (
                  <ShortenLinkPreviousShortenedLink>
                    <ShortenLinkPreviousShortenedLinkOriginal href={original}>
                      {original}
                    </ShortenLinkPreviousShortenedLinkOriginal>
                    <div>
                      <ShortenLinkPreviousShortenedLinkShortened
                        href={shortened}
                      >
                        {shortened}
                      </ShortenLinkPreviousShortenedLinkShortened>
                      <ShortenLinkPreviousShortenedLinkButton
                        onClick={() => copyToClipboard(shortened)}
                      >
                        Copy
                      </ShortenLinkPreviousShortenedLinkButton>
                    </div>
                  </ShortenLinkPreviousShortenedLink>
                );
              })}
            </ShortenLinkPreviousShortenedLinks>
          ) : null}
        </ShortenLinkShortenedOuterContainer>
        <AdvancedStatisticsOuterContainer>
          <AdvancedStatisticsContainer>
            <AdvancedStatisticsTitleText>
              Advanced Statistics
            </AdvancedStatisticsTitleText>
            <AdvancedStatisticsSubtitleText>
              Track how your links are performing across the web with our
              advanced statistics dashboard.
            </AdvancedStatisticsSubtitleText>
            <AdvancedStatisticsBoxContainer>
              <AdvancedStatisticsBoxConnector />
              {AdvancedStatistics.map(({ title, description, image }) => {
                return (
                  <AdvancedStatisticsBox>
                    <AdvancedStatisticsBoxImageContainer>
                      <img src={image} />
                    </AdvancedStatisticsBoxImageContainer>
                    <AdvancedStatisticsBoxTitleText>
                      {title}
                    </AdvancedStatisticsBoxTitleText>
                    <AdvancedStatisticsBoxDescriptionText>
                      {description}
                    </AdvancedStatisticsBoxDescriptionText>
                  </AdvancedStatisticsBox>
                );
              })}
            </AdvancedStatisticsBoxContainer>
          </AdvancedStatisticsContainer>
        </AdvancedStatisticsOuterContainer>
        <BoostLinksOuterContainer>
          <Container>
            <BoostLinksTitleText>Boost your links today</BoostLinksTitleText>
            <BoostLinksButton>Get Started</BoostLinksButton>
          </Container>
        </BoostLinksOuterContainer>
        <FooterOuterContainer>
          <FooterContainer>
            <FooterLogo>
              <FooterLogoTitle>Shortly</FooterLogoTitle>
            </FooterLogo>
            {FooterLists.map(({ group, items }) => {
              return (
                <FooterList>
                  {group}
                  <br />
                  {items.map((item) => {
                    return (
                      <>
                        <FooterListItem href="/">{item}</FooterListItem>
                        <br />
                      </>
                    );
                  })}
                </FooterList>
              );
            })}
            <FooterSocialLink>
              {FooterSocialLinks.map(({ image }) => {
                return <FooterSocialItem src={image} />;
              })}
            </FooterSocialLink>
          </FooterContainer>
        </FooterOuterContainer>
      </ThemeProvider>
    </div>
  );
}

export default App;
