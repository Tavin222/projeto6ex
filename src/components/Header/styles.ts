import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  color: ${cores.rosa};
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 63px;
  text-decoration: none;
  margin-bottom: 66px;

  a {
    color: ${cores.rosa};
    text-decoration: none;
    font-weight: bold;
  }
`

export const Links = styled.ul`
  display: flex;
  text-decoration: none;
`

export const LinkItem = styled.li`
  text-decoration: none;
`

export const LinkCar = styled.a`
  display: flex;
  text-decoration: none;
`
