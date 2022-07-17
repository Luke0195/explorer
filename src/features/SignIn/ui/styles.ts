import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const Header = styled.header`
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 6.25rem;
    height: 6.25rem;
  }
  h2 {
    width: 18.75rem;
    color: ${(props) => props.theme.text};
    text-align: center;
    font-weight: 700;
  }
`

export const Form = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 31.25rem;
  margin-top: 1rem;
  padding: 1rem 0.5rem;
  border-radius: 4px;
`
