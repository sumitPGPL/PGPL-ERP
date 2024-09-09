import { twMerge } from 'tailwind-merge'
import { ButtonBase, ButtonVarients, Sizes } from './style'
import { ButtonProps } from './types'

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  size = 'sm',
  isLoading = false,
  className,
  ...rest
}) => {
  return (
    <button
      className={twMerge(
        // ButtonBase,
        ButtonVarients[variant],
        Sizes[size],
        isLoading && 'pointer-events-none',
        className
      )}
      {...rest}
    >
      {children}
    </button>
  )
}
