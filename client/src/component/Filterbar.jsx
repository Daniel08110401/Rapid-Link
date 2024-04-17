import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components for the filter bar
const FilterBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #e1e1e1;
  margin-top: 20px;
`;

const FilterSection = styled.section`
  display: flex;
  align-items: center;
`;

const FilterLabel = styled.label`
  font-size: 14px;
  margin: 0 15px 0 5px;
  color: #000;
`;

const FilterInput = styled.input`
  border: 1px solid #e1e1e1;
  padding: 5px 10px;
  margin-right: 10px;
`;

const Dropdown = styled.select`
  padding: 5px 10px;
  margin-right: 10px;
  border: 1px solid #e1e1e1;
`;

const SearchInput = styled.input`
  flex-grow: 1;
  padding: 5px 10px;
  border: 1px solid #e1e1e1;
  margin-right: 10px;
`;

const SubmitButton = styled.button`
  background-color: #004080;
  color: white;
  padding: 5px 15px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0055a5;
  }
`;

const Filterbar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = () => {
    
  };

  return (
    <FilterBarContainer>
      <FilterSection>
        <FilterLabel>Company</FilterLabel>
        <Dropdown>
          <option value="">All</option>
          <option value="Corporate">Corporate</option>
          <option value="StartUps">StartUps</option>
        </Dropdown>
        <FilterLabel>Job Categories</FilterLabel>
        <Dropdown>
          <option value="">All</option>
          <option value="IT/Software">IT/Software</option>
          <option value="Marketing">Marketing</option>
        </Dropdown>
        <FilterLabel>Location</FilterLabel>
        <Dropdown>
          <option value="">All</option>
          <option value="Seoul">Seoul</option>
          <option value="Busan">Busan</option>
        </Dropdown>
      </FilterSection>
      <FilterSection>
        <SearchInput
          type="text"
          placeholder="Find your perfect job"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <SubmitButton onClick={handleSubmit}>Search</SubmitButton>
      </FilterSection>
    </FilterBarContainer>
  );
};

export default Filterbar;