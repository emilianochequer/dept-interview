import { useState } from "react";
import styled from "styled-components";
import { useAppContext } from "../../App";
import { Navigate, useNavigate } from "react-router-dom";
import myImage from "./images/fi_chevron-left.png";

const LaunchDetailWrapper = styled.div``;

const HeaderDetail = styled.div`
  border: 1px solid #000;
  background-image: url(${(props) => props.imgSrc});
  height: 555px;
  border-radius: 0px;
  background-repeat: no-repeat;
  min-height: 555px;
  background-size: cover;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 148px;
`;

const TitleLaunch = styled.label`
  font-weight: 700;
  font-size: 48px;
  line-height: 56px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.87);
`;

const DescriptionLaunch = styled.label`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.87);
  padding-bottom: 30px;
`;

const DateLaunch = styled.label`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: rgba(255, 255, 255, 0.87);
`;

const DataWrapper = styled.div`
  height: 206px;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.05),
      rgba(255, 255, 255, 0.05)
    ),
    #121212;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Quantity = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 56px;
  line-height: 48px;
  text-align: center;
  letter-spacing: 0.04em;
  color: rgba(255, 255, 255, 0.87);
`;
const QuantityDetail = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.87);
`;
const Separator = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.27);
  height: 91px;
  width: 0px;
  border-radius: 0px;
  margin: 0 106px;
`;

const InformationWrapper = styled.div`
  height: 286px;
  background: #121212;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const TitleInformation = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 40px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.87);
`;
const DescriptionInformation = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 32px;
  text-align: center;
  color: rgba(255, 255, 255, 0.87);
`;

const DetailWrapper = styled.div`
  background: #121212;
  height: 766px;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 20px;
`;
const TitleDetailOverview = styled.div`
  width: 415px;
`;
const DescriptionDetailRocket = styled.img.attrs((props) => ({
  src: `${props.imgRocketSrc}`,
}))`
  width: 415px;
`;
const DataQuantityWrapper = styled.div``;

const TitleDetail = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 40px;
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.87);
`;
const DataDetailWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 0px;
`;
const DataDetailSeparator = styled.div`
  background: linear-gradient(0deg, #121212, #121212);
  border-bottom: 1px solid #ffffff38;
`;
const DataDetailTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  /* identical to box height, or 129% */

  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;

  color: #ffffffde;
`;
const DataDetailParameters = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: right;
  letter-spacing: 0.05em;
  color: #ffffff91;
`;
const DataDetailFirst = styled.div`
  color: rgba(255, 255, 255, 0.87);
`;
const DataDetailSecond = styled.div`
  color: #ffffff91;
`;
const SatageDescription = styled.div`
  color: #ffffffde;
`;
const Carrousel = styled.div``;
const DotWrappers = styled.div``;
const OverviewDot = styled.span`
  color: #ffffffc4;
  height: 12px;
  width: 12px;
  margin: 0 5px;
  cursor: pointer;
`;
const TopButtonsWrapper = styled.div`
  position: absolute;
  top: 25px;
`;
const BackButton = styled.img.attrs({
  src: `${myImage}`,
})`
  cursor: pointer;
`;
const SpanFavorite = styled.span`
  font-size: 4em;
  color: rgba(255, 255, 255, 0.87);
  left: 902%;
  position: relative;
  &:hover {
    cursor: pointer;
  }
`;
export const LaunchDetailPage = () => {
  const { selectedLaunch, favorites, setFavorites } = useAppContext();
  const [showData, setShowData] = useState("overview");
  const navigate = useNavigate();

  if (!selectedLaunch) {
    return <Navigate replace to="/" />;
  } else {
    const {
      mission_name,
      mission_patch,
      details,
      launch_date_unix,
      flight_number,
      patch,
      rocket: {
        rocket_name,
        first_stage,
        second_stage,
        payload_weights,
        mass,
        height,
        diameter,
      },
    } = selectedLaunch;
    const Overview = (
      <TitleDetailOverview>
        <TitleDetail>Overview</TitleDetail>
        <DataDetailWrapper>
          <DataDetailTitle>HEIGHT</DataDetailTitle>
          <DataDetailParameters>
            <DataDetailFirst>{height?.meters}m</DataDetailFirst>/
            <DataDetailSecond>{height?.feet}ft</DataDetailSecond>
          </DataDetailParameters>
        </DataDetailWrapper>
        <DataDetailSeparator />
        <DataDetailWrapper>
          <DataDetailTitle>DIAMETER</DataDetailTitle>
          <DataDetailParameters>
            <DataDetailFirst>{diameter.meters},</DataDetailFirst>/
            <DataDetailSecond>{diameter.feet}ft</DataDetailSecond>
          </DataDetailParameters>
        </DataDetailWrapper>
        <DataDetailSeparator />
        <DataDetailWrapper>
          <DataDetailTitle>MASS</DataDetailTitle>
          <DataDetailParameters>
            <DataDetailFirst>{mass.kg}kg</DataDetailFirst>/
            <DataDetailSecond>{mass.lb}lb</DataDetailSecond>
          </DataDetailParameters>
        </DataDetailWrapper>
        <DataDetailSeparator />
        {payload_weights.map((payload, i) => (
          <>
            <DataDetailWrapper>
              <DataDetailTitle>payload to {payload.id}</DataDetailTitle>
              <DataDetailParameters>
                <DataDetailFirst>{payload.kg}kg</DataDetailFirst>/
                <DataDetailSecond>{payload.lb}lb</DataDetailSecond>
              </DataDetailParameters>
            </DataDetailWrapper>
            {payload_weights.lenght - 1 === i && <DataDetailSeparator />}
          </>
        ))}
      </TitleDetailOverview>
    );

    const FirstStage = (
      <TitleDetailOverview>
        <TitleDetail>first stage</TitleDetail>
        {/*  Add description harcoded because the first stage data don't have description  */}
        <SatageDescription>
          The nine Merlin engines on the first stage are gradually throttled
          near the end of first-stage flight to limit launch vehicle
          acceleration as the rocket’s mass decreases with the burning of fuel.
          These engines are also used to reorient the first stage prior to
          reentry and to decelerate the vehicle for landing.
        </SatageDescription>
        <DataDetailWrapper>
          <DataDetailTitle>Number of engines</DataDetailTitle>
          <DataDetailParameters>
            <DataDetailFirst>{first_stage.engines}</DataDetailFirst>
          </DataDetailParameters>
        </DataDetailWrapper>
        <DataDetailSeparator />
        <DataDetailWrapper>
          <DataDetailTitle>THRUST AT SEA LEVEL</DataDetailTitle>
          <DataDetailParameters>
            <DataDetailFirst>
              {first_stage.thrust_sea_level.kN}kN
            </DataDetailFirst>
            /
            <DataDetailSecond>
              {first_stage.thrust_sea_level.lbf}lbf
            </DataDetailSecond>
          </DataDetailParameters>
        </DataDetailWrapper>
      </TitleDetailOverview>
    );

    const SecondStage = (
      <TitleDetailOverview>
        <TitleDetail>second stage</TitleDetail>
        {/*  Add description harcoded because the first stage data don't have description  */}
        <SatageDescription>
          The nine Merlin engines on the first stage are gradually throttled
          near the end of first-stage flight to limit launch vehicle
          acceleration as the rocket’s mass decreases with the burning of fuel.
          These engines are also used to reorient the first stage prior to
          reentry and to decelerate the vehicle for landing.
        </SatageDescription>
        <DataDetailWrapper>
          <DataDetailTitle>Number of engines</DataDetailTitle>
          <DataDetailParameters>
            <DataDetailFirst>{second_stage.engines}</DataDetailFirst>
          </DataDetailParameters>
        </DataDetailWrapper>
        <DataDetailSeparator />
        <DataDetailWrapper>
          <DataDetailTitle>burn time</DataDetailTitle>
          <DataDetailParameters>
            <DataDetailFirst>{second_stage.burn_time_sec} sec</DataDetailFirst>/
          </DataDetailParameters>
        </DataDetailWrapper>
        <DataDetailSeparator />
        <DataDetailWrapper>
          <DataDetailTitle>thrust</DataDetailTitle>
          <DataDetailParameters>
            <DataDetailFirst>{second_stage.thrust.kN}kN</DataDetailFirst>/
            <DataDetailSecond>{second_stage.thrust.lbf}lbf</DataDetailSecond>
          </DataDetailParameters>
        </DataDetailWrapper>
      </TitleDetailOverview>
    );
    return (
      <LaunchDetailWrapper>
        <HeaderDetail imgSrc={mission_patch}>
          <TopButtonsWrapper>
            <BackButton onClick={() => navigate("/")}></BackButton>
            {favorites?.find((fav) => fav.flight_number === flight_number) ? (
              <SpanFavorite
                onClick={() => {
                  const index = favorites.findIndex(
                    (fav) => fav.flight_number === flight_number
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
                  const favCopy = [...favorites, selectedLaunch];
                  setFavorites(favCopy);
                }}
              >
                ☆
              </SpanFavorite>
            )}
          </TopButtonsWrapper>
          <DateLaunch>
            {new Date(launch_date_unix * 1000).toLocaleString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </DateLaunch>
          <TitleLaunch>{mission_name}</TitleLaunch>
          <DescriptionLaunch>{details}</DescriptionLaunch>
        </HeaderDetail>
        <DataWrapper>
          <DataQuantityWrapper>
            <Quantity>122</Quantity>
            <QuantityDetail>Total launches</QuantityDetail>
          </DataQuantityWrapper>
          <Separator />
          <DataQuantityWrapper>
            <Quantity>88</Quantity>
            <QuantityDetail>Total launches</QuantityDetail>
          </DataQuantityWrapper>
          <Separator />
          <DataQuantityWrapper>
            <Quantity>225</Quantity>
            <QuantityDetail>Total launches</QuantityDetail>
          </DataQuantityWrapper>
        </DataWrapper>
        <InformationWrapper>
          <TitleInformation>About Launched</TitleInformation>
          <DescriptionInformation>{details}</DescriptionInformation>
        </InformationWrapper>
        <DetailWrapper>
          <div
            style={{ display: "flex", flexDirection: "column", rowGap: "32px" }}
          >
            {showData === "overview"
              ? Overview
              : showData === "firstStage"
              ? FirstStage
              : showData === "secondStage"
              ? SecondStage
              : Overview}
            <Carrousel>
              <DotWrappers>
                {showData === "overview" ? (
                  <OverviewDot onClick={() => setShowData("overview")}>
                    ●
                  </OverviewDot>
                ) : (
                  <OverviewDot onClick={() => setShowData("overview")}>
                    ○
                  </OverviewDot>
                )}
                {showData === "firstStage" ? (
                  <OverviewDot onClick={() => setShowData("firstStage")}>
                    ●
                  </OverviewDot>
                ) : (
                  <OverviewDot onClick={() => setShowData("firstStage")}>
                    ○
                  </OverviewDot>
                )}
                {showData === "secondStage" ? (
                  <OverviewDot onClick={() => setShowData("secondStage")}>
                    ●
                  </OverviewDot>
                ) : (
                  <OverviewDot onClick={() => setShowData("secondStage")}>
                    ○
                  </OverviewDot>
                )}
              </DotWrappers>
            </Carrousel>
          </div>
          <DescriptionDetailRocket imgRocketSrc={patch} />
        </DetailWrapper>
      </LaunchDetailWrapper>
    );
  }
};
