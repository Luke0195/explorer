import React, { useState } from 'react';
import { Input } from 'semantic-ui-react'
import * as S from '../../ui/styles'
import logo from '../../../../assets/icons/githublogo.png'
const Main = () => {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) =>{
    e.preventDefault()
  }
  return(
    <S.MainContainer>
        <S.MainForm onSubmit={handleSubmit}>
          <header>
            <h2> Git Hub Explorer </h2>
            <img src={logo} alt="logo"/>
          </header>
            <Input
              value={search}
              icon={{
                'name': search.length <= 0 ? 'search' : 'x',
                 link:true,
                 onClick: () =>{
                  if(search.length > 0) setSearch('')
                 }
              }}
              placeholder="Informe o seu usuário/repositório"
              loading={loading}
              onChange={(e) => setSearch(e.target.value)}/>
        </S.MainForm>
    </S.MainContainer>
  )
}


export default Main;
