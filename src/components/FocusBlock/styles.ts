import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${p => p.theme.pallete.focusBlock.main};
  color: ${p => p.theme.pallete.focusBlock.contrast};

  border-radius: 10px;
  box-shadow: 0px 3px 5px 0px #00000020;
`
