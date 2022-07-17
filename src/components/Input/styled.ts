import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  border: 1px solid #ccc;
  background: #fff;
  max-width: 325px;
  display: flex;
  border-radius: 4px;
  align-items: center;
  margin-bottom: 0.5rem;

  input {
    height: 2.65rem;
    border: 0;
    flex: 1;
    margin-left: 0.5rem;
    padding: 0 0.5rem 0;
    border-radius: 4px;
  }

  svg {
    width: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-left: 0.4rem;
  }
`
