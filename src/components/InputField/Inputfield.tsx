import { InputFieldProps } from './type'
import { twMerge } from 'tailwind-merge'
import { BaseStyle, InputStyles } from './style'
export const InputField: React.FC<InputFieldProps> = ({
  name,
  value,
  label,
  onChange,
  className,
  error = '',
  ...rest
}) => {
  return (
    <>
      {label && (
        <label
          htmlFor="success"
          className="block mb-2 text-sm font-medium text-green-700
           dark:text-green-500"
        >
          {label}
        </label>
      )}
      <input
      
        value={value}
        onChange={onChange}
        className={twMerge(className, BaseStyle, error && InputStyles['error'])}
        {...rest}
      />
      {/* TODO: Icon on input tag */}
      {error && (
        <p className="mt-2 text-sm text-red-600 dark:text-red-500">
          <span className="font-medium">Oh, snapp!</span> Some error message.
        </p>
      )}
    </>
  )
}
InputField.displayName = 'InputField'
