import styled from 'styled-components';

export const FilterBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #e1e1e1;
  margin-top: 20px;
`;

export const FilterSection = styled.section`
  display: flex;
  align-items: center;
`;

export const FilterLabel = styled.label`
  font-size: 14px;
  margin: 0 15px 0 5px;
  color: #000;
`;

export const FilterInput = styled.input`
  border: 1px solid #e1e1e1;
  padding: 5px 10px;
  margin-right: 10px;
`;

export const Dropdown = styled.select`
  padding: 5px 10px;
  margin-right: 10px;
  border: 1px solid #e1e1e1;
`;

export const SearchInput = styled.input`
  flex-grow: 1;
  padding: 5px 10px;
  border: 1px solid #e1e1e1;
  margin-right: 10px;
`;

export const SubmitButton = styled.button`
  background-color: #004080;
  color: white;
  padding: 5px 15px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0055a5;
  }
`;