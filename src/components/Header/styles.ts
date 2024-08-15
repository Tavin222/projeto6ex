import styled from 'styled-components'
import { cores } from '../../styles'

export const BackImg = styled.div`
  height: 384px;
  width: 1000px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const HeaderBar = styled.header`
  color: ${cores.rosa};
  align-items: center;
  display: block;
  justify-content: center;
  img {
    padding-left: 900px;
    padding-top: 64px;
  }
`

export const Text = styled.p`
  width: 100%;
  height: 84px;
  line-height: 42px;
  font-size: 36px;
  font-weight: bold;
  padding-top: 160px;
  margin-left: 680px;
  padding-bottom: 100px;

  p {
    margin-left: 60px;
  }
`
