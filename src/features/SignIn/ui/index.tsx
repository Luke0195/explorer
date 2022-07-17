import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { IoPersonSharp } from 'react-icons/io5'

import { Toggle, Button } from '../../../components'
import { Credencials } from '../protocols'

import getSchema from '../validators/schema'
import SignContext from '../context'

import * as S from './styles'
import * as Styled from '../components/Input/styled'
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

  const {
    register,
    getValues,
    handleSubmit,
    formState: { dirtyFields },
  } = form

  const registerFields = () => {
    const keys: (keyof Credencials)[] = ['username']
    keys.forEach((key) => {
      const value = getValues()
      if (value === undefined) {
        register(key)
      }
    })
  }

  const onSubmit = (data: any) => {
    console.log(data)
  }
  useEffect(() => {
    registerFields()
  }, [form.formState])

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

          <S.Form onSubmit={handleSubmit(onSubmit)}>
            <S.FormWrapper>
              <IoPersonSharp size={20} />
              <Styled.Input
                placeholder='Informe o nome do usuário'
                {...register('username')}
              />
            </S.FormWrapper>
            <Button
              type='submit'
              disabled={Object.keys(dirtyFields).length === 0}
            >
              Entrar
            </Button>
          </S.Form>
        </S.Main>
      </S.Container>
    </SignContext.Provider>
  )
}

export default SignInUi
