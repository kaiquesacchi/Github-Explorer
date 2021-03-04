import styled from 'styled-components'

export const SearchBox = styled.div`
  width: 100%;
  position: relative;
`

export const SearchInput = styled.input`
  background-color: ${p => p.theme.pallete.input.main};
  color: ${p => p.theme.pallete.input.contrast};

  width: 100%;
  height: 60px;

  font-size: 18px;
  padding: 0 80px 0 40px;

  border-radius: 30px;
  border: none;
`

export const SearchButton = styled.button`
  font-size: 20px;
  background-color: transparent;
  position: absolute;
  right: 0;
  width: 80px;
  height: 60px;
  border-radius: 30px;
  border: none;
  cursor: pointer;
`
