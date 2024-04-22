import React, { useState } from 'react';
import {
  NavBar,
  Logo,
  Menu,
  MenuItem,
  SearchBarContainer,
  SearchBar,
  SearchIcon
} from '../style/NavbarGlassStyles';

const NavbarGlass: React.FC = () => {
  const [searchExpanded, setSearchExpanded] = useState<boolean>(false);

  const handleSearchIconClick = (): void => {
    setSearchExpanded(!searchExpanded);
  };

  return (
    <NavBar>
      <Logo>Rapid Link</Logo>
      <Menu>
        <SearchBarContainer>
          <SearchBar expanded={searchExpanded} />
          <SearchIcon onClick={handleSearchIconClick}>🔍</SearchIcon>
        </SearchBarContainer>
        <MenuItem>Community</MenuItem>
        <MenuItem>Jobs</MenuItem>
        <MenuItem>Internship Calendar</MenuItem>
        <MenuItem>Companies</MenuItem>
        <MenuItem>Salaries</MenuItem>
      </Menu>
    </NavBar>
  );
};

export default NavbarGlass;
