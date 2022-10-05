import { useEffect } from "react";
import { useAppContext } from "../../App";
import styled from "styled-components";
import { LaunchesList } from "../../components/launchList";
import { Pagionation } from "../../components/pagination";

const ListWrapper = styled.div`
  background: #121212;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-top: 32px;
  padding-bottom: 64px;
  align-items: center;
`;

const PaginationWrapper = styled.div`
  width: 1312.98px;
  position: relative;
  display: flex;
  justify-content: flex-end;
`;

export const LaunchesFavoritesPage = () => {
  const {
    favorites,
    setFavorites,
    pagination,
    setLaunches,
    searchTerm,
    filteredLaunches,
    setPagination,
  } = useAppContext();

  useEffect(() => {
    setPagination((prevState) => ({
      ...prevState,
      total: favorites.length,
    }));
  }, []);

  return (
    <ListWrapper>
      <LaunchesList
        launches={favorites}
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
  );
};
