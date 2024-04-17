import React, { useState } from 'react';
import styled from 'styled-components';

const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #FFFFFF; // Assuming a white background
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #black;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const MenuItem = styled.div`
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #00B383; // Highlight color on hover green : #00B383
    
  }
`;

const SearchBarContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const SearchBar = styled.input.attrs(props => ({
  type: 'text',
  placeholder: 'Find your perfect job'
}))`
  width: ${props => props.expanded ? '250px' : '0px'};
  height: 30px;
  padding: ${props => props.expanded ? '0 10px' : '0'};
  visibility: ${props => props.expanded ? 'visible' : 'hidden'};
  border: 1px solid #ccc;
  border-radius: 15px;
  transition: all 0.5s;
  margin-left: ${props => props.expanded ? '10px' : '0'};
  opacity: ${props => props.expanded ? '1' : '0'};
`;

const SearchIcon = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  transition: transform 0.3s;

  &:active {
    transform: scale(0.9);
  }
`;

const NavbarGlass = () => {
  const [searchExpanded, setSearchExpanded] = useState(false);

  return (
    <NavBar>
      <Logo>Rapid Link</Logo>
      <Menu>
        <SearchBarContainer>
          <SearchBar expanded={searchExpanded} />
          <SearchIcon onClick={() => setSearchExpanded(!searchExpanded)}>
            🔍
          </SearchIcon>
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