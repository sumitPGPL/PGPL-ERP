'use client'

import { useState, ChangeEvent } from 'react'
import { useRouter } from 'next/navigation'
import {
  getFromLocalStorage,
  saveToLocalStorage,
} from '@/app/utils/localStorage'
import Image from 'next/image'
import { User } from '@/components/types/user'
import Loader from '@/components/Loader/Loader'
import Link from 'next/link'
import { toast, ToastContainer } from 'react-toastify'
import Navbar from '../Navbar/Navbar'
import { InputField } from '@/components/InputField/Inputfield' // Adjust the import path as necessary
import { Button } from '@/components/Button/Button' // Adjust the import path as necessary

const SignIn = () => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [showModal, setShowModal] = useState<boolean>(false)
  const router = useRouter()

  const handleSignIn = () => {
    setLoading(true)
    setTimeout(() => {
      const users: User[] = getFromLocalStorage('users') || []
      const user = users.find(
        (user) => user.username === username && user.password === password
      )

      if (user) {
        saveToLocalStorage('currentUser', user)
        setShowModal(true)
        toast.success('Login Successful!')
      } else {
        toast.error('Invalid credentials')
      }
      setLoading(false)
    }, 3000)
  }

  const handleGoogleSuccess = (response: any) => {
    const { profileObj } = response
    const users: User[] = getFromLocalStorage('users') || []
    let user = users.find((user) => user.username === profileObj.email)

    if (!user) {
      user = {
        username: profileObj.email,
        password: '',
        role: 'students',
        email: '',
      }
      users.push(user)
      saveToLocalStorage('users', users)
    }

    saveToLocalStorage('currentUser', user)
    setShowModal(true)
  }



  const handleCloseModal = () => {
    setShowModal(false)
    router.push('/')
  }

  return (
    <>
      <Navbar />
    
        <div className="flex h-screen">
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Loader />
            </div>
          )}
          {showModal && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
              <div className="bg-white p-8 rounded shadow-lg w-1/3">
                <h2 className="text-2xl font-bold mb-4">Login Successful!</h2>
                <p className="mb-4">
                  You have logged in successfully. You will be redirected to
                  your dashboard.
                </p>
                <Button
                  onClick={handleCloseModal}
                  variant="primary"
                  className="bg-blue-300 text-white px-4 py-2 rounded"
                >
                  Go to Dashboard
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
              <h2 className="text-2xl mb-4 font-bold text-white">Sign In</h2>
              <InputField
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setUsername(e.target.value)
                }
                className="block mb-4 p-2 border-b-2 rounded w-full outline-none mt-3 bg-blue-100 text-black"
              />
              <InputField
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
                className="block mb-4 p-2 border-b-2 rounded w-full outline-none mt-3 bg-blue-100 text-black"
              />
              <div className="flex gap-6 mt-5 justify-between px-2 transition-all">
                <Link
                  href="#"
                  className="hover:text-gray-50 text-white duration-700"
                >
                  Forgot password?
                </Link>
              </div>
              <Button
                onClick={handleSignIn}
                variant="primary"
                className="p-2 mt-5 bg-gray-200 rounded w-full hover:bg-blue-400 transition-all duration-700 text-blue-500 hover:text-white font-bold"
              >
                Sign In
              </Button>
        

              <div className="mt-4 rounded-full bg-blue-300 mx-auto w-9/12 p-3 text-center">
                <Link href="/register" className="duration-700 text-md">
                  Not a Member?{' '}
                  <span className="font-semibold text-blue-800 hover:text-blue-900 text-md">
                    Sign Up
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
   
    </>
  )
}

export default SignIn
