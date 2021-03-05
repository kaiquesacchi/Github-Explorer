import styled from 'styled-components'

export const BasicInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;

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
  margin-right: 50px;
`
export const SecondaryInfo = styled.div`
  width: 100%;
  padding-top: 40px;
  h2 {
    font-weight: 300;
    margin-bottom: 10px;
  }
  p {
    font-weight: 300;
  }
`

export const Followers = styled.p`
  margin-top: 50px;
  font-weight: 300;
`
