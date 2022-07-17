import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  padding: 2rem;
  border-bottom: 1px solid ${(props) => props.theme.border};
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Divider = styled.div`
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Profile = styled.div`
  width: 250px;
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-left: 1rem;
  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }

  .ui.dropdown {
    margin-left: 1rem;
  }
  .ui.dropdown > .text {
    font-size: 1rem;
    margin-left: 0.5rem;
    color: ${(props) => props.theme.text};
  }
  .ui.dropdown > .dropdown.icon:before {
    color: ${(props) => props.theme.text};
  }
`
