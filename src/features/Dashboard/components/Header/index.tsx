import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Dropdown } from 'semantic-ui-react'
import Toggle from '../../../../components/Toggle'

import * as S from './styles'
import gitexplorLogo from '../../../../assets/icons/logo.svg'
const Header = () => {
  const navigate = useNavigate()
  const [userName, setUserName] = useState(() => {
    const storagedUser = localStorage.getItem('@githubExplorer:user')
    if (storagedUser) {
      return storagedUser
    }
    return ''
  })

  const handleSignOut = () => {
    toast.success('Volte Sempre!')
    localStorage.removeItem('@githubExplorer:user')
    navigate('/')
  }
  return (
    <S.Container>
      <img src={gitexplorLogo} alt='logo do git explorer' />
      <S.Divider>
        <Toggle />
        <S.Profile>
          <img
            src={'https://avatars.githubusercontent.com/u/55026379?v=4'}
            alt='Image de perfil do usuário'
          />
          <Dropdown text='Lucas Alves Dos Santos'>
            <Dropdown.Menu>
              <Dropdown.Item text='Sair' onClick={handleSignOut} />
            </Dropdown.Menu>
          </Dropdown>
        </S.Profile>
      </S.Divider>
    </S.Container>
  )
}

export default Header
