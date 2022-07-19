import React, { useState, useEffect } from 'react'

import Header from '../components/Header'
import Loading from '../../../components/Loading'
import DashboardContext from '../context/index'

import {getUserData as request } from '../services'
import {DataInterface as UserInterface} from '../protocols'


import * as S from './styles'
const DashboardUi = () => {
  // estado responsável por armazenar as informações do usuário
  const [userName, setUserName] = useState<string>(() =>{
    const storagerUser = localStorage.getItem('@githubExplorer:user');
    if(storagerUser){
      return storagerUser
    }
    return ''
  })

  // estado responsável por armazenar as informações do usuário
  const [user, setUser] = useState<UserInterface>({} as UserInterface)
  // estado responsável por controlar o loading
  const [loading, setLoading] = useState<boolean>(false);

  const handleLoadData = async () =>{
     setLoading(true)
     try{
      const { data } = await request(userName);
      setUser(data)
     }catch(error){
      console.log(error);
     }finally{
      setLoading(false)
     }
  }

  useEffect(() =>{
    handleLoadData()
  },[])

  return (
    <DashboardContext.Provider value={{ user }}>
      <S.Container>
        <Loading isLoading={loading}/>
        <Header />
      </S.Container>
    </DashboardContext.Provider>
  )
}

export default DashboardUi
