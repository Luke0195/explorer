import React from 'react';
import { useNavigate } from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'
import * as S from './styles'

const ProfileUi = () =>{
  const navigate = useNavigate()
  return(
    <S.Container>
      <S.Content>
        <S.Header>
            <FiArrowLeft size={18} onClick={() => navigate('/dashboard')}/>
            <span> Voltar </span>
        </S.Header>

          <S.Main>
             <h1> User Info </h1>
          </S.Main>
      </S.Content>
    </S.Container>
  )
}

export default ProfileUi;
