import styled from "styled-components";

const LaunchDetailWrapper = styled.div``;

const HeaderDetail = styled.div`
  border: 1px solid #000;
  background-image: url(${(props) => props.imgSrc});
  width: 2000px;
  height: 2000px;
`;

const TitleLaunch = styled.h1`
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
`;

const DateLaunch = styled.label`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: rgba(255, 255, 255, 0.87);
`;

const DataWrapper = styled.div``;
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
`;

const InformationWrapper = styled.div``;
const TitleInformation = styled.div``;
const DescriptionInformation = styled.div``;

const DetailWrapper = styled.div``;
const TitleDetailOverview = styled.div``;
const DescriptionDetailRocket = styled.div``;

export const LaunchDetailPage = ({
  flightNumber,
  title,
  imgSrc,
  description,
  date,
  setFavorites,
  favorites,
  launch,
}) => {
  return (
    <LaunchDetailWrapper>
      <HeaderDetail imgSrc={imgSrc}>
        <DateLaunch>{date}</DateLaunch>
        <TitleLaunch>{title}</TitleLaunch>
        <DescriptionLaunch>{description}</DescriptionLaunch>
      </HeaderDetail>
      <DataWrapper>
        <Quantity></Quantity>
        <QuantityDetail></QuantityDetail>
        <Separator />
        <Quantity></Quantity>
        <QuantityDetail></QuantityDetail>
        <Separator />
        <Quantity></Quantity>
        <QuantityDetail></QuantityDetail>
      </DataWrapper>
      <InformationWrapper>
        <TitleInformation>About Launched</TitleInformation>
        <DescriptionInformation>{description}</DescriptionInformation>
      </InformationWrapper>
      <DetailWrapper>
        <TitleDetailOverview>About Launched</TitleDetailOverview>
        <DescriptionDetailRocket>{description}</DescriptionDetailRocket>
      </DetailWrapper>
    </LaunchDetailWrapper>
  );
};
