import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { IoPersonSharp } from 'react-icons/io5'

import { Toggle, Input, Button } from '../../../components'
import { Credencials } from '../protocols'

import getSchema from '../validators/schema'
import SignContext from '../context'

import * as S from './styles'
import logo from '../../../assets/icons/logo.svg'
import gitHubLogo from '../../../assets/icons/githublogo.png'

const setValueOptions = {
  shouldDirty: true,
  shouldValidate: true,
}
const SignInUi = (): JSX.Element => {
  const form = useForm<Credencials>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: {
      username: '',
    },
    resolver: yupResolver(getSchema()),
  })

  return (
    <SignContext.Provider
      value={{
        form: { setValueOptions, ...form },
      }}
    >
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
              name='username'
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
    </SignContext.Provider>
  )
}

export default SignInUi
