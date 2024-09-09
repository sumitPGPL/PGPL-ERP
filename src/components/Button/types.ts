import React from 'react'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'error'
  onClick?: (e: any) => void
  label?: string
  // Additional common props
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  className?: string
  style?: React.CSSProperties
  ariaLabel?: string
  ariaPressed?: boolean | 'mixed'
  isLoading?: boolean
  children?: React.ReactNode
  iconPlacement?: 'left' | 'middle' | 'left'
  size?: 'sm' | 'md' | 'lg'
  // Add more specific props as needed
}
