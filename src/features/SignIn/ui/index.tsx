import React from 'react'
import { IoPersonSharp } from 'react-icons/io5'
import { Toggle, Input } from '../../../components'

import * as S from './styles'
import logo from '../../../assets/icons/logo.svg'

const SignInUi = (): JSX.Element => {
  return (
    <S.Container>
      <S.Header>
        <img src={logo} alt='logo do github explorer' />
        <Toggle />
      </S.Header>
      <S.Form>
        <Input
          name='userName'
          placeholder='Nome do usuário'
          icon={IoPersonSharp}
        />
      </S.Form>
    </S.Container>
  )
}

export default SignInUi
