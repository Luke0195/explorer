import React, { createContext, useState } from 'react'

interface ThemeContextProps {
  theme: string
  onChangeTheme: () => void
}

interface ComponentsProps {
  children: React.ReactNode
}

const ThemeContext = createContext({} as ThemeContextProps)

const ThemeProviderContext = (props: ComponentsProps) => {
  const [theme, setTheme] = useState<string>('light')

  const handleOnChangeTheme = () => {
    setTheme((prevState) => (prevState === 'light' ? 'dark' : 'light'))
  }
  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        onChangeTheme: handleOnChangeTheme,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  )
}

export { ThemeProviderContext, ThemeContext }
