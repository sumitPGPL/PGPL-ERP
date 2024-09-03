import React from 'react'
import StaffPage from '@/components/StaffPage/StaffPage'

export default function page({params}) {
  return (
    <div>
      <StaffPage id={params.id}  />
    </div>
  )
}