import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { yupResolver } from '@hookform/resolvers/yup'
import { IoPersonSharp } from 'react-icons/io5'

import { Toggle, Button, Loading } from '../../../components'
import { Credencials } from '../protocols'

import getSchema from '../validators/schema'
import SignContext from '../context'

import * as S from './styles'
import * as Styled from '../components/Input/styled'
import logo from '../../../assets/icons/logo.svg'
import gitHubLogo from '../../../assets/icons/githublogo.png'

import { verifyIfUserExists as request } from '../services'
import { notEmptyStringOrDefault } from '../../../utils/Formatters'

const setValueOptions = {
  shouldDirty: true,
  shouldValidate: true,
}

const SignInUi = (): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(false)

  const navigate = useNavigate()

  const form = useForm<Credencials>({
    mode: 'all',
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
    setValue,
    formState: { dirtyFields, isValid },
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

  const onSubmit = async ({ username: user }: Credencials) => {
    setLoading(true)
    try {
      const response = await request(user)
      const { login, name } = response
      localStorage.setItem('@githubExplorer:user', login)
      toast.success(`Bem vindo ${notEmptyStringOrDefault(name)}!`)
      navigate('/dashboard')
    } catch (error) {
      toast.error(`Usuário Invalido!`)
      setValue('username', '')
    } finally {
      setLoading(false)
    }
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
        <Loading isLoading={loading} />
        <S.Header>
          <img src={logo} alt='logo do github explorer' />
          <Toggle />
        </S.Header>

        <S.Main>
          <img src={gitHubLogo} alt='logo do github' />
          <h2> Explore repositórios no GitHub</h2>

          <S.Form onSubmit={handleSubmit(onSubmit)}>
            <S.FormWrapper isValid={isValid}>
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
