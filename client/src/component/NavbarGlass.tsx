import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import UserMenu from '../component/UserMenu';
import {
  NavBar,
  Logo,
  LeftMenu,
  RightMenu,
  CenterMenu,
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
      <LeftMenu>
        
        <RouterLink to={`/`} style={{ textDecoration: "none", color: "inherit" }}>
          <Logo>Rapid Link</Logo>
        </RouterLink>
      </LeftMenu>
      <CenterMenu>
        <MenuItem>Community</MenuItem>
        <MenuItem>Jobs</MenuItem>
        <MenuItem>Internship Calendar</MenuItem>
        <MenuItem>Companies</MenuItem>
        <MenuItem>Salaries</MenuItem>
      </CenterMenu>
      <RightMenu>
        <SearchBarContainer>
          <SearchBar expanded={searchExpanded} />
          <SearchIcon onClick={handleSearchIconClick}>🔍</SearchIcon>
        </SearchBarContainer>
          {/* <RouterLink to={`/login`} style={{ textDecoration: "none", color: "inherit" }}>
            <MenuItem>
              Sign In
            </MenuItem>
          </RouterLink> */}
          <UserMenu />
      </RightMenu>
    </NavBar>
  );
};

export default NavbarGlass;
