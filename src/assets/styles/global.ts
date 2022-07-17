import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

*{
  padding:0;
  margin:0;
  outline:0;
  box-sizing: border-box;
  font-family: 'Lato', Arial, Helvetica, sans-serif;
}

 html , body , #root{
  height:100%;
 }

body{
  background-color: ${(props) => props.theme.bg};
  transition:  background-color 1s ease-out;
}


 body, input,button{
  font-size: 1rem;
 }

 button{
  cursor:pointer;
 }

 a{
  text-decoration:none;
 }

 h1, h2, h3, h4, h5, h6{
  font-size:2rem;
 }

 ul{
  list-style: none;
 }
`
