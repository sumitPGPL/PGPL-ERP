import { DetailedHTMLProps, InputHTMLAttributes } from 'react'

export type InputFieldProps<Element = HTMLInputElement> = {
  type?: string
  value?: string
  name?: string
  label?: string
  placeholder?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
  disabled?: boolean
  autoFocus?: boolean
  className?: string
  disable?: boolean
  error?: string
  ref?: any
  iconPlacemennt?: 'left' | 'middle' | 'right'
} & Omit<
  DetailedHTMLProps<InputHTMLAttributes<Element>, Element>,
  'type' | 'onChange' | 'value' | 'onBlur'
>
