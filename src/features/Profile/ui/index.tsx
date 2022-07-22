import React  from 'react';
import { useNavigate } from 'react-router-dom'
import { FiArrowLeft, FiUserCheck } from 'react-icons/fi'
import { AiOutlineUser } from 'react-icons/ai'
import { RiGitRepositoryCommitsLine } from 'react-icons/ri'
import { toast } from 'react-toastify'

import { getUserInfo } from '../services'
import { Data } from '../protocols'
import Loading  from '../../../components/Loading'

import * as S from './styles'
import { notEmptyStringOrDefault } from '../../../utils/Formatters';


const ProfileUi = () =>{
  const navigate = useNavigate()

  const [userName, setUserName] = React.useState<string>(() =>{
    const storagedUser = localStorage.getItem('@githubExplorer:user')
    if(storagedUser){
      return storagedUser;
    }
    return ''
  })
  const [userData, setUserData] = React.useState<Data>({} as Data);
  const [loading, setLoading] = React.useState<boolean>(false)

  const handleLoadData = async() =>{
    try{
      const data = await getUserInfo(userName);
      setUserData(data)
      console.log('UserData', data)

    }catch(error){
      toast.error('Não possível ')
    }

  }

  React.useEffect(() =>{
    handleLoadData()
  },[])

  return(
    <S.Container>
      <Loading isLoading={loading}/>
      <S.Content>
        <S.Header>
            <FiArrowLeft size={18} onClick={() => navigate('/dashboard')}/>
            <span> Voltar </span>
        </S.Header>
        <S.Wrapper>

          <S.Main>
            <div>
              <img src={userData.avatar_url} alt="user profile image"/>
              <strong> {notEmptyStringOrDefault(userData.name)}</strong>
              <p> {notEmptyStringOrDefault(userData.bio)}</p>
            </div>
          </S.Main>
          <S.Card>
            <div>
                <RiGitRepositoryCommitsLine size={28}/>
                <strong> {userData.public_repos}</strong>
            </div>
            <div>
                <FiUserCheck size={28}/>
                <strong> {userData.followers}</strong>
            </div>
            <div>
                <AiOutlineUser size={28}/>
                <strong> {userData.following}</strong>
            </div>
          </S.Card>
        </S.Wrapper>
      </S.Content>
    </S.Container>
  )
}

export default ProfileUi;
