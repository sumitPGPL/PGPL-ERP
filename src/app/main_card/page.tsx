import DefaultLayout from '@/components/Layouts/DefaultLayout'
import MainCard from '@/components/MainCard/MainCard'
import React from 'react'

export default function page() {
  return (
    <>
    <DefaultLayout>
        <div className=' grid grid-cols-4 gap-4'>

    <MainCard img='/icons/reset-password.png' heading='hello' counter={12} link='https://www.google.com'/>
    <MainCard img='/icons/reset-password.png' heading='hello' counter={12} link='https://www.google.com'/>
    <MainCard img='/icons/reset-password.png' heading='hello' counter={12} link='https://www.google.com'/>
    <MainCard img='/icons/reset-password.png' heading='hello' counter={12} link='https://www.google.com'/>
    <MainCard img='/icons/reset-password.png' heading='hello' counter={12} link='https://www.google.com'/>
    <MainCard img='/icons/reset-password.png' heading='hello' counter={12} link='https://www.google.com'/>
    <MainCard img='/icons/reset-password.png' heading='hello' counter={12} link='https://www.google.com'/>
    <MainCard img='/icons/reset-password.png' heading='hello' counter={12} link='https://www.google.com'/>
    <MainCard img='/icons/reset-password.png' heading='hello' counter={12} link='https://www.google.com'/>
    <MainCard img='/icons/reset-password.png' heading='hello' counter={12} link='https://www.google.com'/>
        </div>
    </DefaultLayout>
   
    </>
  )
}
