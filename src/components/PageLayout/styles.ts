import styled from 'styled-components'
import Link from 'next/link'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${p => p.theme.pallete.background.main};
  color: ${p => p.theme.pallete.background.contrast};
`

export const AppBar = styled.div`
  width: 100%;
  background-color: ${p => p.theme.pallete.primary.main};
  color: ${p => p.theme.pallete.primary.contrast};
  position: sticky;
  top: 0;
  padding: 10px 40px 0;

  h1 {
    font-size: 48px;
  }
`

export const Tabs = styled.div`
  display: flex;
  flex-direction: row;
`

interface iTab {
  active?: boolean
}
export const Tab = styled.div<iTab>`
  padding: 10px 30px;
  background-color: transparent;
  border: none;
  border-bottom: 3px solid
    ${p => (p.active ? p.theme.pallete.secondary.main : 'transparent')};
  color: inherit;
  font-size: 18px;
  cursor: pointer;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
`
