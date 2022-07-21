import React, { createContext, useCallback, useState } from 'react'

interface ThemeContextProps {
  theme: string
  onChangeTheme: () => void
}

interface ComponentsProps {
  children: React.ReactNode
}

const ThemeContext = createContext({} as ThemeContextProps)

const ThemeProviderContext = (props: ComponentsProps) => {
  const [theme, setTheme] = useState<string>(() =>{
    const persistedTheme = localStorage.getItem('@githubexplorer:theme');
    if(persistedTheme === 'light'){
      return  'light'
    }
    return 'dark'
  })

  React.useEffect(() =>{
    localStorage.setItem('@githubexplorer:theme', theme)
  },[theme])

  const handleOnChangeTheme = useCallback(() => {
    setTheme((prevState) => (prevState === 'light' ? 'dark' : 'light'))

  },[theme])

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
