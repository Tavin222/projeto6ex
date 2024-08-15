import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.fundoCard};
  color: ${cores.rosa};
  margin-top: 32px;
  position: relative;
`
export const Nota = styled.div`
  border: 1px solid ${cores.rosa};
`

export const Titulo = styled.h3`
  font-weight: 700;
  font-size: 18px;
  display: inline-block;
  margin-top: 8px;
  margin-bottom: 8px;
  margin-left: 8px;

  span {
    margin-left: 214px;
    justify-content: center;
    align-items: center;

    img {
      margin-left: 8px;
    }
  }
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
  margin-left: 8px;
  margin-right: 8px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const Imagem = styled.img`
  width: 100%;
`

export const Botao = styled.button`
  align-items: center;
  display: inline-block;
  border: none;
  margin-bottom: 8px;
  margin-left: 8px;
  margin-right: 8px;
  max-width: 82px;
  height: 26px;
  background-color: ${cores.rosa};
  color: ${cores.branca};
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
`
