// pages/index.tsx
import Link from 'next/link'

const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-8 bg-white rounded shadow-md">
        <h1 className="text-3xl mb-8">Welcome to the Authentication App</h1>
        <div className="space-x-4">
          <Link href="/register">
            <div className="p-2 bg-blue-500 text-white rounded">Register</div>
          </Link>
          <Link href="/login">
            <div className="p-2 bg-green-500 text-white rounded">Sign In</div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
