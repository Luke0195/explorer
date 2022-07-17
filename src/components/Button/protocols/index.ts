import { ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type: 'submit' | 'reset' | 'button' | undefined
  children: React.ReactNode
}
