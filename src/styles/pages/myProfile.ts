import styled from 'styled-components'

export const BasicInfo = styled.div`
  display: grid;
  width: 100%;

  @media screen and (min-width: 601px) {
    grid-template-columns: 160px 1fr;
    grid-column-gap: 40px;
    align-items: center;
  }
  @media screen and (max-width: 600px) {
    grid-template-rows: 160px 1fr;
    grid-row-gap: 40px;
  }

  div.info {
    h3 {
      font-weight: 300;
    }
    span {
      font-style: italic;
    }
    p {
      padding-top: 5px;
      font-weight: 300;
    }
  }
`

export const Avatar = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 80px;
  @media screen and (max-width: 600px) {
    justify-self: center;
  }
`
export const SecondaryInfo = styled.div`
  width: 100%;
  h2 {
    font-weight: 300;
    padding-bottom: 10px;
  }
  p {
    font-weight: 300;
  }
`

export const Followers = styled.p`
  padding-top: 50px;
  font-weight: 300;
`
