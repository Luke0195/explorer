import styled from 'styled-components'

export const Container = styled.div`
 width:100%;
 height:100%;
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
