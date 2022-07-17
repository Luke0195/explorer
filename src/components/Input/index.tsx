import React from 'react'

import { InputProps } from './protocols'
import * as S from './styled'

const Input = (props: InputProps): JSX.Element => {
  const { name, icon: Icon, ...rest } = props
  return (
    <S.Container>
      {Icon && <Icon size={20} />}
      <input name={name} {...rest} />
    </S.Container>
  )
}

export default Input
