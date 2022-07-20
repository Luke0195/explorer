import React, { useState, useContext  } from 'react';
import { toast } from 'react-toastify'
import { Input } from 'semantic-ui-react'
import { FiChevronRight } from 'react-icons/fi'
import { RepositoryData } from '../../protocols'
import { getRepository as request } from '../../services'
import * as S from '../../ui/styles'

import logo from '../../../../assets/icons/githublogo.png'

import DashboardContext from '../../context';

const Main = () => {
  const { loading, setLoading } = useContext(DashboardContext)
  const [repository, setRepository] = useState<string>('');
  const [error, setError] = useState<boolean>(false)
  const [data, setData] = useState<RepositoryData[]>(() =>{
    const persistedRepository = localStorage.getItem('@githubexplorer:repository');
    if(persistedRepository){
      return JSON.parse(persistedRepository)
    }
    return []
  })

  React.useEffect(() =>{
    localStorage.setItem('@githubexplorer:repository', JSON.stringify(data));
  },[data])


  const handleAddRepository = async (e:React.FormEvent) =>{
   e.preventDefault()
   setLoading(true)
   try{
    const { data: respositoryData } = await request(repository);
    setData([...data, respositoryData])
    setRepository('')

   }catch(error){
    toast.error('Repositório não encontrado!')
    setError(true)
   }finally{
    setLoading(false)
   }
  }


  return(
    <S.MainContainer>
        <S.MainForm onSubmit={handleAddRepository}>
          <header>
            <h2> Git Hub Explorer </h2>
            <img src={logo} alt="logo"/>
          </header>
            <Input
              value={repository}
              icon={{
                'name': repository.length <= 0 ? 'search' : 'x',
                 link:true,
                 onClick: () =>{
                  if(repository.length > 0) setRepository('')
                  if(repository.length > 0 && error) setError(false)
                 }
              }}
              placeholder="Informe o seu usuário/repositório"
              loading={loading}
              onChange={(e) => setRepository(e.target.value)}
              error={error}
              />
              {error && <p> Repositório não encontrado </p>}
        </S.MainForm>
        <S.MainContent>
        {data.map((item, index) =>(
            <React.Fragment key={index}>
              <S.MainCard>
                <img src={item.owner.avatar_url} alt="user profile"/>
                <div>
                  <strong> {item.full_name}</strong>
                  <p> {item.description} </p>
                </div>
                <FiChevronRight size={18}/>
              </S.MainCard>

            </React.Fragment>
          ))}
        </S.MainContent>

    </S.MainContainer>
  )
}


export default Main;
