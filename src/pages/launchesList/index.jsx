import { useEffect } from "react";
import { useAppContext } from "../../App";
import styled from "styled-components";
import { LaunchesList } from "../../components/launchList";
import { Pagionation } from "../../components/pagination";
import InputSearcher from "../../components/inputSearcher";
import { Header } from "../../components/header";

const ListWrapper = styled.div`
  background: #121212;
  display: flex;
  justify-content: start;
  flex-direction: column;
  padding-top: 32px;
  padding-bottom: 64px;
  align-items: center;
  min-height: 100vh;
`;

const PaginationWrapper = styled.div`
  width: 1312.98px;
  position: relative;
  display: flex;
  justify-content: flex-end;
`;

export const LaunchesListPage = () => {
  const {
    launches,
    favorites,
    setFavorites,
    pagination,
    setLaunches,
    setSearchTerm,
    searchTerm,
    filteredLaunches,
    setFilteredLaunches,
    setPagination,
  } = useAppContext();

  useEffect(() => {
    if (searchTerm.length) {
      setPagination((prevState) => ({
        ...prevState,
        total: filteredLaunches.length,
      }));
    } else {
      setPagination((prevState) => ({
        ...prevState,
        total: launches.length,
      }));
    }
  }, [searchTerm]);

  return (
    <>
      <ListWrapper>
        <InputSearcher
          setLaunches={setLaunches}
          setSearchTerm={setSearchTerm}
          launches={launches}
          searchTerm={searchTerm}
          filteredLaunches={filteredLaunches}
          setFilteredLaunches={setFilteredLaunches}
        />
        <LaunchesList
          launches={launches}
          favorites={favorites}
          setFavorites={setFavorites}
          pagination={pagination}
          setLaunches={setLaunches}
          filteredLaunches={filteredLaunches}
          searchTerm={searchTerm}
        />
        <PaginationWrapper>
          <Pagionation pagination={pagination} setPagination={setPagination} />
        </PaginationWrapper>
      </ListWrapper>
    </>
  );
};
