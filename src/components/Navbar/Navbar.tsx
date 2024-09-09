// components/Navbar.js
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from '../Button'

const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-white p-4 flex justify-between items-center">
      {/* Logo on the left */}
      <div className="flex justify-center items-center gap-6">
        <Image src="/education.svg" width={50} alt="logo" height={20} />
        <p className="text-xl font-semibold">ERP PGPL</p>
      </div>
      {/* Help and Support button on the right */}
      <Link href="/contact" passHref>
        <Button variant="primary" size="md" className="uppercase font-bold">
          Help and Support
        </Button>
      </Link>
    </nav>
  )
}

export default Navbar
