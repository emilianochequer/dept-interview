import { LaunchCard } from "../launchCard";
import styled from "styled-components";

const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: 413px 413px 413px;
  column-gap: 37px;
  row-gap: 33px;
`;

const Total = styled.div`
  color: white;
  width: 1312.98px;
  display: flex;
  margin-bottom: 15px;
  color: rgba(255, 255, 255, 0.47);
  margin-top: 30px;
`;

export const LaunchesList = ({
  launches,
  favorites,
  setFavorites,
  pagination,
  searchTerm,
  filteredLaunches,
}) => {
  return (
    <>
      <Total>
        Total (
        {searchTerm.length
          ? filteredLaunches?.slice(pagination.start, pagination.perPage).length
          : launches?.slice(pagination.start, pagination.perPage).length}
        )
      </Total>
      <ListWrapper>
        {searchTerm.length
          ? filteredLaunches
              ?.slice(pagination.start, pagination.perPage)
              .map((launch) => (
                <LaunchCard
                  launch={launch}
                  flightNumber={launch.flight_number}
                  title={launch.mission_name}
                  imgSrc={launch.mission_patch}
                  description={launch.details}
                  date={new Date(launch.launch_date_unix).toLocaleString(
                    "en-US",
                    {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    }
                  )}
                  favorites={favorites}
                  setFavorites={setFavorites}
                />
              ))
          : launches
              ?.slice(pagination.start, pagination.perPage)
              .map((launch) => (
                <LaunchCard
                  launch={launch}
                  flightNumber={launch.flight_number}
                  title={launch.mission_name}
                  imgSrc={launch.mission_patch}
                  description={launch.details}
                  date={new Date(launch.launch_date_unix).toLocaleString(
                    "en-US",
                    {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    }
                  )}
                  favorites={favorites}
                  setFavorites={setFavorites}
                />
              ))}
      </ListWrapper>
    </>
  );
};
