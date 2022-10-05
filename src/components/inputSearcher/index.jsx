import { useEffect } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import styled from "styled-components";

const Input = styled.input`
  height: 47px;
  width: 414px;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.12),
      rgba(255, 255, 255, 0.12)
    ),
    #121212;
  border-radius: 8px;
`;

const InputWrapper = styled.div`
  width: 1312.98px;
  display: flex;
  justify-content: flex-start;
`;

// Usage
export default function InputSearcher({
  searchTerm,
  setIsSearching,
  launches,
  setSearchTerm,
  filteredLaunches,
  setFilteredLaunches,
}) {
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  useEffect(() => {
    if (debouncedSearchTerm) {
      setFilteredLaunches(searchCharacters(launches, debouncedSearchTerm));
    }
  }, [debouncedSearchTerm]);
  return (
    <InputWrapper>
      <Input
        placeholder="Search all launches..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </InputWrapper>
  );
}

function searchCharacters(launches, search) {
  return launches.filter((launch) =>
    launch.mission_name.toUpperCase().includes(search.toUpperCase())
  );
}
// Hook
