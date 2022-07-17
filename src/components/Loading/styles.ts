import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  width: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  span {
    margin-top: 1rem;
    font-size: 1rem;
    color: #fff;
    text-transform: uppercase;
  }
`

const bounce = keyframes`
  from{
    transform: scaleX(1.25);
  }
  to{
    transform: translateY(-50px) scaleX(1);
  }
`
export const Ball = styled.div`
  width: 20px;
  height: 20px;
  background-color: #fff;
  border-radius: 50%;
  animation: ${bounce} 0.5s alternate infinite;

  &:nth-child(2) {
    animation-delay: 0.15s;
  }
  &:nth-child(3) {
    animation-delay: 0.31s;
  }
`
