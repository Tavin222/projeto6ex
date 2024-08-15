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
  position: relative;
  align-items: center;
  display: flex;
  justify-content: space-between;
  img {
    position: absolute;
    top: 40px;
    left: 450px;
  }
`

export const Text = styled.p`
  width: 100%;
  height: 84px;
  line-height: 42px;
  font-size: 36px;
  font-weight: bold;
  padding-top: 260px;
  margin-left: 240px;

  p {
    margin-left: 60px;
  }
`
