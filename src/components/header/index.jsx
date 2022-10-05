import styled from "styled-components";
import myImage from "./images/spacex.png";
import { Link } from "react-router-dom";

const WrapperHeader = styled.div`
  height: 157px;
  width: 1440px;
  background: linear-gradient(180deg, #121212 64.11%, #1e1e1e 100%);
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12),
    0px 5px 5px rgba(0, 0, 0, 0.2);
  width: 100%;
  padding-left: 30px;
  padding-top: 30px;
  position: relative;
  top: 0;
  text-align: center;
`;

const ImageWrapper = styled.div``;

const Title = styled.div`
  font-weight: 700;
  font-size: 36px;
  line-height: 48px;
  letter-spacing: 0.04em;
  color: rgba(255, 255, 255, 0.87);
  align-self: flex-end;
  display: flex;
  margin-left: 118px;
`;

const TabsWrapper = styled.div`
  position: absolute;
  bottom: 0px;
  margin-left: 118px;
`;

const Image = styled.img.attrs({
  src: `${myImage}`,
})``;

const NavbarLink = styled(Link)`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 32px;
  text-align: center;
  color: rgba(255, 255, 255, 0.87);
  text-decoration: none;
  margin-right: 10px;
`;

export const Header = () => {
  return (
    <WrapperHeader>
      <ImageWrapper>
        <Image />
      </ImageWrapper>
      <Title>Launches</Title>
      <TabsWrapper>
        <NavbarLink to="/">All</NavbarLink>
        <NavbarLink to="/favorites">Favorites</NavbarLink>
      </TabsWrapper>
    </WrapperHeader>
  );
};
