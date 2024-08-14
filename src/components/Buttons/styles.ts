import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../styles'

export const ButtonContainer = styled.div`
  color: ${cores.branca};
  background-color: ${cores.rosa};
  font-weight: bold;
  font-size: 14px;
  padding: 4px 6px;
`
export const ButtonLink = styled(Link)`
  color: ${cores.rosa};
  background-color: ${cores.branca};
  font-weight: bold;
  font-size: 14px;
  padding: 4px 84px;
  text-decoration: none;
`
