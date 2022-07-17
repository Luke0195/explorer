import React from 'react'
import { IoPersonSharp } from 'react-icons/io5'
import { Toggle, Input, Button } from '../../../components'

import * as S from './styles'
import logo from '../../../assets/icons/logo.svg'
import gitHubLogo from '../../../assets/icons/githublogo.png'

const SignInUi = (): JSX.Element => {
  return (
    <S.Container>
      <S.Header>
        <img src={logo} alt='logo do github explorer' />

        <Toggle />
      </S.Header>

      <S.Main>
        <img src={gitHubLogo} alt='logo do github' />
        <h2> Explore repositórios no GitHub</h2>
        <S.Form>
          <Input
            name='userName'
            placeholder='Nome do usuário'
            icon={IoPersonSharp}
          />
          <Button type='button' disabled={true}>
            {' '}
            Entrar{' '}
          </Button>
        </S.Form>
      </S.Main>
    </S.Container>
  )
}

export default SignInUi
