'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  saveToLocalStorage,
  getFromLocalStorage,
} from '@/app/utils/localStorage'
import { User } from '@/components/types/user'
import Image from 'next/image'
import Loader from '@/components/Loader/Loader' // Import your Loader component
import Link from 'next/link'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from '../Navbar/Navbar'
import { InputField } from '@/components/InputField/Inputfield' // Adjust the import path as necessary
import { Button } from '@/components/Button/Button' // Adjust the import path as necessary
import { DropdownButton } from '@/components/Button/DropdownButton' // Adjust the import path as necessary

const Register = () => {
  const [username, setUsername] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [cpassword, setcPassword] = useState<string>('')
  const [role, setRole] = useState<string>('student')
  const [loading, setLoading] = useState<boolean>(false) // Add loading state
  const [showModal, setShowModal] = useState<boolean>(false) // Add modal state
  const router = useRouter()

  const isFieldEmpty = (value: string) => {
    const emptyRegex = /^\s*$/
    return emptyRegex.test(value)
  }

  const handleRegister = () => {
    if (isFieldEmpty(username)) {
      toast.error('Username cannot be empty!')
      return
    }

    if (isFieldEmpty(email)) {
      toast.error('Email cannot be empty!')
      return
    }

    if (isFieldEmpty(password)) {
      toast.error('Password cannot be empty!')
      return
    }

    if (password !== cpassword) {
      toast.error('Passwords do not match!')
      return
    }

    setLoading(true) // Start loading
    setTimeout(() => {
      // Simulate an API call delay
      const users: User[] = getFromLocalStorage('users') || []
      const newUser: User = { username, email, password, role }
      users.push(newUser)
      saveToLocalStorage('users', users)

      setLoading(false) // End loading
      setShowModal(true) // Show modal
      toast.success('Registration Successful!')
    }, 3000) // Simulated delay
  }

  const handleRoleSelect = (selectedRole: string) => {
    setRole(selectedRole)
  }

  const handleCloseModal = () => {
    setShowModal(false)
    router.push('/login')
  }

  return (
    <>
      <Navbar />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="flex h-screen">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Loader />
          </div>
        )}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded shadow-lg w-1/3">
              <h2 className="text-2xl font-bold mb-4">
                Registration Successful!
              </h2>
              <p className="mb-4">
                Your account has been created successfully. You can now login.
              </p>
              <Button
                onClick={handleCloseModal}
                variant="primary"
                className="bg-blue-400 text-white px-4 py-2 rounded"
              >
                Go to Login
              </Button>
            </div>
          </div>
        )}
        <div className="w-2/3 flex justify-center items-center">
          <Image
            src="/login1.png"
            alt="Sign In"
            className="w-9/12 object-cover"
            width={1200}
            height={1200}
          />
        </div>
        <div className="w-1/3 flex justify-center items-center">
          <div className="p-8 bg-blue-500 shadow-2xl shadow-blue-500/70 w-3/4 rounded-xl">
            <h2 className="text-2xl mb-4 font-bold text-white">Sign Up</h2>
            <InputField
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="block mb-4 p-2 border-b-2 rounded w-full outline-none mt-3 bg-blue-100 text-black"
            />
            <InputField
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block mb-4 p-2 border-b-2 rounded w-full outline-none mt-3 bg-blue-100 text-black"
            />
            <InputField
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block mb-4 p-2 border-b-2 rounded w-full outline-none mt-3 bg-blue-100 text-black"
            />
            <InputField
              type="password"
              placeholder="Confirm Password"
              value={cpassword}
              onChange={(e) => setcPassword(e.target.value)}
              className="block mb-4 p-2 border-b-2 rounded w-full outline-none mt-3 bg-blue-100 text-black"
            />
            <DropdownButton
              onClick={() => {}}
              label={role.charAt(0).toUpperCase() + role.slice(1)}
              options={['student', 'faculty', 'admin']}
              onSelect={handleRoleSelect}
              className="w-full mb-4"
            />
            <Button
              onClick={handleRegister}
              variant="primary"
              className="p-2 mt-5 bg-gray-200 rounded w-full hover:bg-blue-400 transition-all duration-700 text-blue-500 hover:text-white"
            >
              Register
            </Button>

            <div className="mt-4 rounded-full bg-blue-300 mx-auto w-9/12 p-3 text-center">
              <Link href="/login" className="duration-700 text-md">
                Have an account?{' '}
                <span className="font-semibold text-blue-800 hover:text-blue-900">
                  Login
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
