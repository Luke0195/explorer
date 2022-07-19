import styled from 'styled-components'
import theme from '../../../assets/theme'

export const Container = styled.div`
 width:100%;
 height:100%;
 position:relative;
`

// Main component Styles

export const MainContainer = styled.div`
 flex:1;
 height:calc(100% - 90px);
 padding: 2rem 0;
 width:100%;
 max-width:1200px;
 margin: auto;
`


export const MainForm = styled.form`
width:100%;
margin: auto;
display:flex;
flex-direction:column;
align-items:center;

 header{
  display:flex;
  align-items:center;

  height:42px;

  h2{
    font-size:2rem;
    margin:0;
    padding:0;
    color:${(props) => props.theme.text};
  }
    img{
      width:25px;
      height:25px;
      margin-left:1rem;
  }

}

p{
    color:#9f3a38;
    width:100%;
    height:42px;
    background:#e0b4b4;
    display:flex;
    align-items:center;
    justify-content:center;
    max-width:600px;
    border-radius:4px;
    margin-top: 8px;
}
.ui.input{
  width:100%;
  max-width: 600px;
  height:42px;
  margin-top: 1rem;
  font-family: 'Lato' !important;
}

.ui.icon.input>i.icon:before{
  color: #c8c8c8;
}

.ui.icon.input>input {
    border-color: #c8c8c8;
    //padding-right: 2.67142857em!important;
}
`

export const MainContent = styled.div`
 width: 100%;
 max-width:600px;
 margin: 20px auto;
`
export const MainCard = styled.div`
 width:100%;
 background:#fff;
 display:flex;
 flex-direction:row;
 align-items: center ;
 padding: 1rem;
 border-radius:4px;
 cursor:pointer;
 transition: all 1s ease-out;


 &:hover{
  transform: translateX(40px);
 }

 & + div{
  margin: 1rem 0;
 }
 img{
  width:30px;
  height:30px;
  border-radius: 50%;
 }

 div{
  flex:1;
  margin-left: 1rem;

  strong{
    font-size: 1.3rem;
  }

  p{
    color: #ccc;
    font-size: 1rem;
    margin-top:0.3rem;
  }
 }
`
