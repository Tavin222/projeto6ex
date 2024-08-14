import styled from 'styled-components'
import { cores } from '../../styles'
import { Cipher } from 'crypto'

export const Container = styled.footer`
  background-color: ${cores.branca};
  padding: 32px 0;

  p {
    margin-top: 32px;
    text-align: center;
    display: flex;
    flex: wrap;
  }
`

export const Links = styled.ul`
  display: flex;
  margin-top: 16px;
  font-size: 14px;
`

export const Link = styled.img`
  text-decoration: none;
  height: 24px;
  margin-left: 8px;
  margin-right: 8px;
`
export const FooterSection = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`
