import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb'
import DefaultLayout from '@/components/Layouts/DefaultLayout'
import StudentAdmissionForm from '@/components/StudentAdmission/StudentAdmissionForm'
import StudentRegistrationForm from '@/components/StudentRegistrationForm/StudentRegistrationForm'
import React from 'react'

type Props = {}

const Page = (props: Props) => {
  return (
    <DefaultLayout>
    <Breadcrumb pageName="Student Registration" />
    <StudentAdmissionForm/>
    
  </DefaultLayout>
  )
}

export default Page