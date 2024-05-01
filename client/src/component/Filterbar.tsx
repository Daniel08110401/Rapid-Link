import React, { useState } from 'react';
import {
  FilterBarContainer,
  FilterSection,
  FilterLabel,
  Dropdown,
  SearchInput,
  SubmitButton
} from '../style/FilterBarStyles';

interface FilterBarProps {
  onCategoryChange: (category: string) => void;
  onLocationChange: (location: string) => void;
  onSearch: (term: string) => void;
};


const Filterbar: React.FC<FilterBarProps> = ({onCategoryChange, onLocationChange, onSearch}) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (): void => {
    // Implementation for what happens when you submit the form
    console.log(`Searching for: ${searchTerm}`);
    onSearch(searchTerm);
  };

  return (
    <FilterBarContainer>
      <FilterSection>
        <FilterLabel>Job Categories</FilterLabel>
        <Dropdown onChange={(e) => onCategoryChange(e.target.value)}>
          <option value="">All</option>
          <option value="IT/Software">IT/Software</option>
          <option value="Marketing">Marketing</option>
          <option value="Business">Business</option>
        </Dropdown>
        <FilterLabel>Location</FilterLabel>
        <Dropdown onChange={(e) => onLocationChange(e.target.value)}>
          <option value="">All</option>
          <option value="Seoul">Seoul</option>
          <option value="Busan">Busan</option>
          <option value="New York">New York</option>
          <option value="LA">LA</option>
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