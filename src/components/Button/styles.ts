import styled from 'styled-components'

export const Button = styled.button`
  margin-top: 8px;
  width: 100%;
  max-width: 325px;
  height: 2.65rem;
  border-radius: 4px;
  background-color: ${(props) => props.theme.green};
  color: #fff;
  font-weight: bold;
  border: 0;

  &:disabled {
    background: #e0e1e2 0% 0% no-repeat padding-box;
    color: #c8c8c8;
  }
`
