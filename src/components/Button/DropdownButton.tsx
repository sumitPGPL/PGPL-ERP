import React, { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { Button } from '@/components/Button/Button'

type DropdownButtonProps = {
  onClick: () => void
  label: string
  options: string[]
  onSelect: (value: string) => void
  className?: string
}

export const DropdownButton: React.FC<DropdownButtonProps> = ({
  onClick,
  label,
  options,
  onSelect,
  className,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false)

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen)
  }

  const handleOptionSelect = (value: string) => {
    onSelect(value)
    setDropdownOpen(false)
  }

  return (
    <div className="relative inline-block w-full">
      <Button
        onClick={handleDropdownToggle}
        variant="primary"
        className="p-2 mt-5 bg-blue-200 rounded w-full hover:text-white flex items-center"
      >
        {label}
        <svg
          className="w-2.5 h-2.5 ml-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </Button>

      <div
        className={twMerge(
          'z-10 bg-purple-200 divide-y divide-gray-100 rounded-lg shadow w-full',
          dropdownOpen ? 'block' : 'hidden'
        )}
      >
        <ul className="py-2 text-sm text-gray-700">
          {options.map((option) => (
            <li key={option}>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={() => handleOptionSelect(option)}
              >
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
