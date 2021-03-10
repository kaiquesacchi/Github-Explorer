import styled from 'styled-components'
import Link from 'next/link'

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: ${p => p.theme.pallete.background.main};
  color: ${p => p.theme.pallete.background.contrast};
`

export const AppBar = styled.div`
  z-index: 99;
  width: 100%;
  background-color: ${p => p.theme.pallete.primary.main};
  color: ${p => p.theme.pallete.primary.contrast};
  position: sticky;
  top: 0;
  padding: 10px 40px 0;
  @media screen and (max-width: ${p => p.theme.breakpoints.sm}) {
    padding: 10px 10px 0;
  }

  h1 {
    font-size: 48px;
    @media screen and (max-width: ${p => p.theme.breakpoints.md}) {
      font-size: 30px;
    }
  }
`

export const Tabs = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: ${p => p.theme.breakpoints.sm}) {
    justify-content: space-between;
  }
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
  @media screen and (max-width: ${p => p.theme.breakpoints.md}) {
    padding: 10px;
  }
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  @media screen and (max-width: ${p => p.theme.breakpoints.sm}) {
    padding: 20px 10px;
  }
`
