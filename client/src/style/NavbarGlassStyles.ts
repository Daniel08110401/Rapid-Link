import styled from 'styled-components';

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #FFFFFF;
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #000;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const MenuItem = styled.div`
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #00B383;
  }
`;

export const SearchBarContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

interface SearchBarProps {
  expanded: boolean;
}

export const SearchBar = styled.input.attrs<SearchBarProps>(({ expanded }) => ({
  type: 'text',
  placeholder: 'Find your perfect job'
}))<SearchBarProps>`
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

export const SearchIcon = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  transition: transform 0.3s;

  &:active {
    transform: scale(0.9);
  }
`;
