import { useEffect } from "react";
import { useAppContext } from "../../App";
import styled, { css } from "styled-components";

const PrevPage = styled.div`
  cursor: pointer;
  color: rgba(255, 255, 255, 0.87);
`;
const NumberPagination = styled.div`
  cursor: pointer;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.87);

  ${(props) =>
    props.pageNumber === props.page &&
    css`
      background: rgba(255, 255, 255, 0.87);
      color: #2c2c2e;
    `}
`;
const NextPage = styled.div`
  cursor: pointer;
  color: rgba(255, 255, 255, 0.87);
`;

const PaginationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
`;

export const Pagionation = ({ pagination, setPagination }) => {
  const numberOfPages = Math.ceil(pagination.total / pagination.limit);

  const navigateToPage = (pageNumber) => {
    setPagination({
      ...pagination,
      page: pageNumber,
      start: (pageNumber - 1) * pagination.limit,
      perPage: pageNumber * pagination.limit,
    });
  };

  useEffect(() => {
    navigateToPage(1);
  }, []);

  return (
    <PaginationWrapper>
      {pagination.page > 1 && (
        <PrevPage onClick={() => navigateToPage(pagination.page - 1)}>
          ◀︎
        </PrevPage>
      )}
      {[...Array(100)].slice(0, numberOfPages).map((x, i) => (
        <NumberPagination
          pageNumber={pagination.page}
          page={i + 1}
          onClick={() => navigateToPage(i + 1)}
        >
          {i + 1}
        </NumberPagination>
      ))}

      {pagination.page !== numberOfPages && (
        <NextPage onClick={() => navigateToPage(pagination.page + 1)}>
          ▶︎
        </NextPage>
      )}
    </PaginationWrapper>
  );
};
