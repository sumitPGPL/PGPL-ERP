import React from 'react'
import {StaffDetails} from '../../StaffPage/StaffPage.tsx'

export default function page({params}) {
  return (
    <div>
      <StaffDetails id={params.id}  />
    </div>
  )
}