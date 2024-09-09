import DefaultLayout from '@/components/Layouts/DefaultLayout'
import MainCard from '@/components/Dashboard/MainCard'
import React from 'react'

export default function page() {
  return (
    <>
    <DefaultLayout>
        <div className=' grid grid-cols-4 gap-4'>
<div className=' grid gap-4'>
  <h3 className=' text-xl ' >Imortant Form</h3>
    <MainCard img='/icons/reset-password.png' heading='Add Student' counter={12} link='/student_admissionsla'/>
    <MainCard img='/icons/reset-password.png' heading='Student list' counter={12} link='/studenttable'/>
    <MainCard img='/icons/reset-password.png' heading='hello' counter={12} link='https://www.google.com'/>
    <MainCard img='/icons/reset-password.png' heading='hello' counter={12} link='https://www.google.com'/>
    </div>
    <div className='grid gap-4'>
  <h3 className=' text-xl' > Registration</h3>
      
    <MainCard img='/icons/reset-password.png' heading='hello' counter={12} link='https://www.google.com'/>
    <MainCard img='/icons/reset-password.png' heading='hello' counter={12} link='https://www.google.com'/>
    <MainCard img='/icons/reset-password.png' heading='hello' counter={12} link='https://www.google.com'/>
    <MainCard img='/icons/reset-password.png' heading='hello' counter={12} link='https://www.google.com'/>
    
    </div>
    <div className='grid gap-4'>
    <h1 className=' text-xl'>Academic Form</h1>
    <MainCard img='/icons/reset-password.png' heading='hello' counter={12} link='https://www.google.com'/>
    <MainCard img='/icons/reset-password.png' heading='hello' counter={12} link='https://www.google.com'/>
    <MainCard img='/icons/reset-password.png' heading='hello' counter={12} link='https://www.google.com'/>
    <MainCard img='/icons/reset-password.png' heading='hello' counter={12} link='https://www.google.com'/>
    
    </div>
    <div className='grid gap-4'>
    <h1 className=' text-xl'>Main Panel</h1>
    <MainCard img='/icons/reset-password.png' heading='Registration' counter={12} link='https://www.google.com'/>
    <MainCard img='/icons/reset-password.png' heading='Registration List' counter={12} link='https://www.google.com'/>
    <MainCard img='/icons/reset-password.png' heading='Admission List' counter={12} link='https://www.google.com'/>
    <MainCard img='/icons/reset-password.png' heading='One Click' counter={12} link='https://www.google.com'/>
    
    </div>
        </div>
    </DefaultLayout>
   
    </>
  )
}
