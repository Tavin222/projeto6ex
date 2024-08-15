import styled from 'styled-components'
import { cores } from '../../styles'

export const BackImg = styled.div`
  height: 384px;
  width: 1000px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

export const HeaderBar = styled.header`
  color: ${cores.rosa};
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  margin-left: 400px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1366px;
    width: 100%;
  }

  a {
    color: ${cores.rosa};
    text-decoration: none;
    font-weight: 900;
    font-size: 18px;
  }

  img {
    margin-right: 350px;
  }
`

export const Links = styled.ul`
  display: flex;
  text-decoration: none;
`

export const LinkItem = styled.li`
  text-decoration: none;
  display: flex;
`

export const LinkCar = styled.a`
  display: flex;
  text-decoration: none;
  margin-right: 270px;
`
