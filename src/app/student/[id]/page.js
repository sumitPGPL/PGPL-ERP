import React from 'react'
import StudentPage from '@/components/StudentPage/StudentPage'

export default function page({params}) {
  return (
    <div>
      <StudentPage id={params.id}  />
    </div>
  )
}