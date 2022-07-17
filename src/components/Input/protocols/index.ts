import { InputHTMLAttributes } from 'react'
import { IconBaseProps } from 'react-icons'

// Contém todas as interfaces que serão usadas no contexto de input
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  icon?: React.ComponentType<IconBaseProps>
}
