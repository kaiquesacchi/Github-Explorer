import styled from 'styled-components'

export const SearchBox = styled.div`
  width: 100%;
  position: relative;
  padding-bottom: 20px;
`

export const SearchInput = styled.input`
  background-color: ${p => p.theme.palette.input.main};
  color: ${p => p.theme.palette.input.contrast};

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

const ListItem = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 30px;
  :last-child {
    padding-bottom: 0;
  }
`

export const RepoItem = styled(ListItem)`
  div.left-side {
    flex: 1;
    h3 {
      display: inline;
      font-weight: 600;
    }
    span {
      font-style: italic;
    }
    p {
      padding-top: 5px;
      font-weight: 300;
    }
  }
  div.right-side {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 50px;
  }
`

export const UserItem = styled(ListItem)`
  width: 100%;
  img {
    width: 100px;
    height: 100px;
    border-radius: 50px;
    @media screen and (max-width: ${p => p.theme.breakpoints.sm}) {
      width: 80px;
      height: 80px;
      border-radius: 40px;
    }
  }
  h3 {
    display: inline;
    font-weight: 600;
  }
  span {
    font-style: italic;
  }
  p {
    padding-top: 5px;
    font-weight: 300;
  }
  div.info {
    padding: 10px 0 10px 30px;
  }
`
