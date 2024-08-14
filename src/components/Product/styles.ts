import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.branca};
  color: ${cores.rosa};
  padding: 8px;
  margin-top: 32px;
  border: 1px solid ${cores.rosa};
  position: relative;
`
export const Nota = styled.div`
  margin-right: 150px;
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 16px;
  display: inline-block;
  margin-top: 16px;
  margin-bottom: 8px;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
