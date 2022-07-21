import styled from 'styled-components';


export const Container = styled.div`
width:100%;
height: 100%;


`


export const Content = styled.div`
 padding: 2rem;
 width:100%;
 max-width: 75rem;
 margin: auto;

`
export const Header = styled.div`

  display:flex;
  align-items:center;
  svg{
    cursor:pointer;
    color:${(props) => props.theme.text};
  }
  span{
    margin-left: 0.5rem;
    font-size: 1rem;
    color:${(props) => props.theme.text};
  }
`
export const Main = styled.div`
 margin-top: 1rem;

 h1{
  color:${(props) => props.theme.text};
  text-align:center;
 }
`
