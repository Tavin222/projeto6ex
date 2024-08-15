import styled from 'styled-components'
import { cores } from '../../styles'
import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.rosa};
  color: ${cores.branca};
  font-size: 14px;
  font-weight: bold;
  padding: 6px 10px;
  justify-content: space-between;
  align-items: center;
`
