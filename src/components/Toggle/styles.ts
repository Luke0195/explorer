import styled from 'styled-components'

export const Container = styled.div`
  width: 150px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  .ui.toggle.checkbox .box:before,
  .ui.toggle.checkbox label:before {
    display: block !important;
    position: absolute !important;
    content: '' !important;
    z-index: 1 !important;
    -webkit-transform: none !important;
    transform: none !important;
    border: none !important;
    top: 0 !important;
    background: #c8c8c8 !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    width: 3.5rem !important;
    height: 1.5rem !important;
    border-radius: 500rem !important;
  }
  .ui.toggle.checkbox input:checked ~ .box:before,
  .ui.toggle.checkbox input:checked ~ label:before {
    background-color: #1a1a1d !important;
  }
`
