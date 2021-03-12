import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${p => p.theme.palette.focusBlock.main};
  color: ${p => p.theme.palette.focusBlock.contrast};

  border-radius: 10px;
  box-shadow: 0px 3px 5px 0px #00000020;

  padding: 50px;
  @media screen and (max-width: ${p => p.theme.breakpoints.xs}) {
    padding: 20px;
  }
`
