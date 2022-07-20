import React, { useContext } from 'react'

import { IoSunny, IoMoonOutline } from 'react-icons/io5'
import { Checkbox } from 'semantic-ui-react'
import { ThemeContext } from '../../context/theme/context'

import * as S from './styles'

const Toggle = () => {
  const { onChangeTheme, theme } = useContext(ThemeContext)

  return (
    <S.Container>
      <IoSunny size={20} color='#ede42f' />
      <Checkbox
        toggle
        checked={theme === 'light' ? false : true}
        onChange={onChangeTheme} />
      <IoMoonOutline size={20} color='#ccc' />
    </S.Container>
  )
}

export default Toggle
