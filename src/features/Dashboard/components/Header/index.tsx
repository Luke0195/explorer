import React, { useState, useContext } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Dropdown } from 'semantic-ui-react'
import Toggle from '../../../../components/Toggle'

import * as S from './styles'
import gitexplorLogo from '../../../../assets/icons/logo.svg'
import DashboardContext from '../../context'
const Header = () => {
  const navigate = useNavigate()
  const [userName, setUserName] = useState(() => {
    const storagedUser = localStorage.getItem('@githubExplorer:user')
    if (storagedUser) {
      return storagedUser
    }
    return ''
  })

  const defaultImage = 'https://i.stack.imgur.com/l60Hf.png'
  const { user } = useContext(DashboardContext)
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
            src={user.avatar_url || defaultImage}
            alt='Image de perfil do usuário'
          />
          <Dropdown text={user.name || `Usuário sem nome`}>
            <Dropdown.Menu>
              <Dropdown.Item text='Meu Perfil' onClick={() => <Navigate to="/profile"/>} />
              <Dropdown.Item text='Sair' onClick={handleSignOut} />
            </Dropdown.Menu>
          </Dropdown>
        </S.Profile>
      </S.Divider>
    </S.Container>
  )
}

export default Header
