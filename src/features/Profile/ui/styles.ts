import styled from 'styled-components';


export const Container = styled.div`
width:100%;
height: 100%;
position:relative;


`


export const Content = styled.div`
 padding: 2rem;
 flex:1;
 height:100%;
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


 display:flex;
 flex-direction:column;
 align-items:center;
 justify-content:center ;

 img{
  width: 150px;
  height:150px;
  border-radius:  50%;
 }

 div{
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  width:100%;
  max-width: 21.875rem;
  color:${(props) => props.theme.text};

  strong{
    font-size: 1.8rem;
    margin: 0.5rem 0;
    color:${(props) => props.theme.text};
  }

  p{
    width:100%;
    font-size: 1.1rem;
    text-align:center;
    margin-top: 0.5rem;
    color:${(props) => props.theme.text};
  }
 }
`

export const Card = styled.div`
 margin-top: 1rem;
 width:100%;
 max-width: 21.875rem;
 display:flex;
 justify-content: space-evenly ;
 align-items:center;

div{
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content:center;
  cursor:pointer;

  strong{
    margin-top: 0.8rem;
    color:${(props) => props.theme.text};
  }

  svg{
    color:${(props) => props.theme.text};
  }
 }
`
export const Wrapper = styled.div`
 width:100%;
 height:100%;
 display:flex;
 flex-direction:column;
 align-items:center;
 justify-content:center ;
 flex:1;

`
