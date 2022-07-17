import React from 'react'

import { ButtonProps } from './protocols'
import * as S from './styles'

const Button = (props: ButtonProps): JSX.Element => {
  const { children, type, ...rest } = props
  return (
    <S.Button type={type} {...rest}>
      {children}
    </S.Button>
  )
}

export default Button
