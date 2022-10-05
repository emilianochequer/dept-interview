import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const CardContainer = styled.div`
  height: 286px;
  width: 413px;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.05),
      rgba(255, 255, 255, 0.05)
    ),
    #121212;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImagenLaunch = styled.img`
  height: 157px;
  width: 413px;
  border-radius: 8px;
  min-height: 157px;
  &:hover {
    cursor: pointer;
  }
`;

const TitleLaunch = styled.h1`
  font-family: "D-DIN";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 32px;
  /* or 160% */

  /* White */

  color: rgba(255, 255, 255, 0.87);
`;

const DescriptionLaunch = styled.label`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: rgba(255, 255, 255, 0.87);
  text-align: initial;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 100%;
`;

const DateLaunch = styled.label`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;

  color: rgba(255, 255, 255, 0.37);
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;
  height: 128.3px;
  padding: 0 20px;
  justify-content: space-around;
`;

const SpanFavorite = styled.span`
  font-size: 1em;
  color: rgba(255, 255, 255, 0.87);
  &:hover {
    cursor: pointer;
  }
`;

const FavoriteContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const LaunchCard = ({
  flightNumber,
  title,
  imgSrc,
  description,
  date,
  setFavorites,
  favorites,
  launch,
  setSelectedLaunch,
}) => {
  const navigate = useNavigate();

  const handleSelectClick = () => {
    setSelectedLaunch(launch);
    navigate("/detail");
  };
  return (
    <CardContainer>
      <ImagenLaunch onClick={handleSelectClick} src={imgSrc} />
      <InfoContainer>
        <TitleLaunch>{title}</TitleLaunch>
        {description && <DescriptionLaunch>{description}</DescriptionLaunch>}
        <FavoriteContainer>
          <DateLaunch>{date}</DateLaunch>
          {favorites?.find((fav) => fav.flight_number === flightNumber) ? (
            <SpanFavorite
              onClick={() => {
                const index = favorites.findIndex(
                  (fav) => fav.flight_number === flightNumber
                );
                const favCopy = [...favorites];
                if (index > -1) {
                  favCopy.splice(index, 1);
                }
                setFavorites(favCopy);
              }}
            >
              ★
            </SpanFavorite>
          ) : (
            <SpanFavorite
              onClick={() => {
                const favCopy = [...favorites, launch];
                setFavorites(favCopy);
              }}
            >
              ☆
            </SpanFavorite>
          )}
        </FavoriteContainer>
      </InfoContainer>
    </CardContainer>
  );
};
