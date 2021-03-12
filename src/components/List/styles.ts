import styled from 'styled-components'

export const ListBody = styled.ul`
  list-style-type: none;
  width: 100%;
`

export const CollapsibleListItem = styled.li`
  width: 100%;
  padding-bottom: 30px;
`

export const CollapsibleTitleArea = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  align-items: center;
  cursor: pointer;
  svg {
    font-size: 30px;
    justify-self: center;
  }
`

export const CollapsibleContentArea = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  padding: 20px 0 0;
`

export const BlackBar = styled.div`
  height: 100%;
  width: 6px;
  background-color: ${p => p.theme.pallete.background.contrast};
  opacity: 15%;
  justify-self: center;
  border-radius: 3px;
`
