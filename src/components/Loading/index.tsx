import React from 'react'

import { LoadingProps } from './protocols'

import * as S from './styles'

const Loading = (props: LoadingProps) => {
  const { isLoading } = props
  if (!isLoading) return <></>
  return (
    <S.Container>
      <S.Content>
        <div>
          <S.Ball />
          <S.Ball />
          <S.Ball />
        </div>
        <span> Carregando...</span>
      </S.Content>
    </S.Container>
  )
}

export default Loading
