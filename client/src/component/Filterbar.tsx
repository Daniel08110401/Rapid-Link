import React, { useState } from 'react';
import {
  FilterBarContainer,
  FilterSection,
  FilterLabel,
  Dropdown,
  SearchInput,
  SubmitButton
} from '../style/FilterBarStyles';

const Filterbar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (): void => {
    // Implementation for what happens when you submit the form
    console.log(`Searching for: ${searchTerm}`);
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