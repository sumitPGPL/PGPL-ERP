'use client'
import React, { useState } from 'react'
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import Image from 'next/image'

// Register Chart.js components
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const Dashboard: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState<string | null>(null)

  // Data for the attendance chart
  const attendanceData = {
    labels: ['Math', 'Science', 'English', 'History', 'Art'],
    datasets: [
      {
        label: 'Attendance (%)',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [95, 88, 52, 85, 90],
      },
    ],
  }

  // Options for the attendance chart
  const attendanceOptions = {
    maintainAspectRatio: false,
  }

  // Render the currently active component
  const renderComponent = () => {
    switch (activeComponent) {
      case 'leaveApplication':
        return (

          <div className="p-4 border-2   rounded-lg dark:border-gray-600 bg-white shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Leave Application
            </h3>
            <form className="mt-4">
              <input
                type="text"
                className="w-full p-2 mb-4 border rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Reason for Leave"
              />
              <input
                type="date"
                className="w-full p-2 mb-4 border rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Leave Date"
              />
              <button
                type="submit"
                className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition duration-200"
              >
                Submit
              </button>
            </form>
          </div>
        )
      case 'event':
        return (
          <div className="p-4 border-2 border-slate-800 rounded-lg dark:border-gray-600 bg-white shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Upcoming Event
            </h3>
            <p className="text-gray-700">Event: Science Fair</p>
            <p className="text-gray-700">Date: 15th Sep</p>
            <p className="text-gray-700">Location: School Auditorium</p>
          </div>
        )
      case 'askDoubts':
        return (
          
          <div className="p-4 border-2  border-slate-300 rounded-lg dark:border-gray-600 bg-white shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Ask Doubts
            </h3>
            <form className="mt-4">
              <textarea
                className="w-full p-2 border rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
                placeholder="Ask your doubts here..."
              ></textarea>
              <button
                type="submit"
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
              >
                Submit
              </button>
            </form>
          </div>
        )
      case 'schoolGallery':
        return (
          <div className="p-4 border-2 border-slate-300 rounded-lg dark:border-gray-600 bg-white shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              School Gallery
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://via.placeholder.com/150"
                alt="Gallery 1"
                className="rounded-lg hover:shadow-md transition duration-200"
              />
              <img
                src="https://via.placeholder.com/150"
                alt="Gallery 2"
                className="rounded-lg hover:shadow-md transition duration-200"
              />
              <img
                src="https://via.placeholder.com/150"
                alt="Gallery 3"
                className="rounded-lg hover:shadow-md transition duration-200"
              />
              <img
                src="https://via.placeholder.com/150"
                alt="Gallery 4"
                className="rounded-lg hover:shadow-md transition duration-200"
              />
            </div>
          </div>
        )
           case 'schoolHoliday':
        return (
          <div className='p-4 border-2 border-gray-300 rounded-lg dark:border-gray-600 bg-white shadow-lg'>
            <h3 className='text-xl font-semibold text-gray-800 mb-4'>
              School Holidays
            </h3>
            <div className='flex justify-center items-center'>
              <div className='bg-gradient-to-r from-purple-400 to-pink-500 text-white p-6 rounded-lg shadow-lg'>
                <p className='text-lg font-semibold'>Upcoming Holiday</p>
                <p className='text-xl font-bold'>Independence Day</p>
                <p className='text-md'>15th August</p>
              </div>
            </div>
          </div>
        )
      case 'changePassword':
        return (
          <div className='p-4 border-2 border-gray-300 rounded-lg dark:border-gray-600 bg-white shadow-lg'>
            <h3 className='text-xl font-semibold text-gray-800 mb-4'>
              Change Password
            </h3>
            <form className='mt-4'>
              <input
                type='password'
                className='w-full p-2 mb-4 border rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500'
                placeholder='Current Password'
              />
              <input
                type='password'
                className='w-full p-2 mb-4 border rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500'
                placeholder='New Password'
              />
              <input
                type='password'
                className='w-full p-2 mb-4 border rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500'
                placeholder='Confirm New Password'
              />
              <button
                type='submit'
                className='mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition duration-200'
              >
                Change Password
              </button>
            </form>
          </div>
        )
      case 'assignment':
        return (
          <div className='p-4 border-2 border-gray-300 rounded-lg dark:border-gray-600 bg-white shadow-lg'>
            <h3 className='text-xl font-semibold text-gray-800 mb-4'>
              Assignment
            </h3>
            <p className='text-gray-700'>Subject: Math</p>
            <p className='text-gray-700'>Due Date: 20th Aug</p>
            <button className='mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200'>
              Submit Assignment
            </button>
          </div>
        )
      case 'examResult':
        return (
          <div className='p-4 border-2 border-gray-300 rounded-lg dark:border-gray-600 bg-white shadow-lg'>
            <h3 className='text-xl font-semibold text-gray-800 mb-4'>
              Exam Results
            </h3>
            <p className='text-gray-700'>Math: 90%</p>
            <p className='text-gray-700'>Science: 85%</p>
            <p className='text-gray-700'>English: 88%</p>
            <p className='text-gray-700'>History: 80%</p>
            <p className='text-gray-700'>Art: 92%</p>
          </div>
        
        )
      default:
        return null
    }
  }

  return (
    <main className="p-4  h-auto   font-sans">
      {/* First Row: Attendance and Fees Due (50% each) */}
      <div className="flex mb-4 space-x-4">
        <div className="w-1/2 p-6 border-2 border-slate-300 rounded-lg dark:border-gray-600 bg-white shadow-md hover:shadow-lg transition duration-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Attendance
          </h3>
          <div className="h-64">
            <Bar data={attendanceData} options={attendanceOptions} />
          </div>
        </div>

        <div className="w-1/2 p-6 border-2 border-slate-300 rounded-lg dark:border-gray-600 bg-white text-center shadow-md hover:shadow-lg transition duration-200">
          <Image
            src="/icons/wallet.png"
            alt="img not found"
            width={100}
            height={70}
            className="m-auto"
          />
          <h3 className="text-xl font-semibold text-gray-800 mb-4 text-[30px]">
            Fees Due
          </h3>
          <p className="text-gray-700 text-2xl font-bold mb-4">
            <span className="text-[25px] font-bold">Total Fees :</span>{' '}
            2000/Rupees
          </p>
          <p className="text-gray-700 text-2xl">( Due Date : 31st Aug )</p>
          <button className="mt-4 px-4 py-2  bg-green-500 text-white rounded hover:bg-green-700 transition duration-200">
            Pay Now
          </button>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition ml-10 duration-200">
            Set Remainder
          </button>
        </div>
      </div>

      {/* Second Row: Expandable Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <div
          className="p-2 border-2 border-slate-300 rounded-lg dark:border-gray-600 bg-slate-800 text-white shadow-md hover:shadow-lg cursor-pointer transition duration-200"
          onClick={() => setActiveComponent('leaveApplication')}
        >
          <div className="flex gap-6 ">
            <div className=" flex justify-center items-center">
              <Image
                src="/icons/edit.png"
                alt="img not found"
                width={50}
                height={50}
              />
            </div>
            <div className="">
              <div className=" ">
                <h6 className="text-sm font-semibold ">Last Month</h6>
              </div>
              <h1 className="text-lg">07</h1>
              <h1 className="text-sm font-extralight">Leave Application</h1>
            </div>
          </div>
        </div>

        <div
          className="p-2 border-2 border-slate-300 rounded-lg dark:border-gray-600 bg-slate-800 text-white shadow-md hover:shadow-lg cursor-pointer transition duration-200"
          onClick={() => setActiveComponent('event')}
        >
          <div className="flex gap-6 ">
            <div className=" flex justify-center items-center">
              <Image
                src="/icons/calendars.png"
                alt="img not found"
                width={50}
                height={50}
              />
            </div>
            <div className="">
              <div className=" ">
                <h6 className="text-sm font-semibold ">Event</h6>
              </div>
              <h1 className="text-lg">09</h1>
              <h1 className="text-sm font-extralight">Click Here</h1>
            </div>
          </div>
        </div>

        <div
          className="p-2 border-2 border-slate-300 rounded-lg dark:border-gray-600 bg-slate-800 text-white shadow-md hover:shadow-lg cursor-pointer transition duration-200"
          onClick={() => setActiveComponent('askDoubts')}
        >
          <div className="flex gap-6 ">
            <div className=" flex justify-center items-center">
              <Image
                src="/icons/ask-for-help.png"
                alt="img not found"
                width={50}
                height={50}
              />
            </div>
            <div className="">
              <div className=" ">
                <h6 className="text-sm font-semibold ">Ask Doubt</h6>
              </div>
              <h1 className="text-lg">07</h1>
              <h1 className="text-sm font-extralight">Click Here</h1>
            </div>
          </div>
        </div>

        <div
          className="p-2 border-2 border-slate-300 rounded-lg dark:border-gray-600 bg-slate-800 text-white shadow-md hover:shadow-lg cursor-pointer transition duration-200"
          onClick={() => setActiveComponent('schoolGallery')}
        >
          <div className="flex gap-6 ">
            <div className=" flex justify-center items-center">
              <Image
                src="/icons/gallery.png"
                alt="img not found"
                width={50}
                height={50}
              />
            </div>
            <div className="">
              <div className=" ">
                <h6 className="text-sm font-semibold ">School Gallery</h6>
              </div>
              <h1 className="text-lg">97+</h1>
              <h1 className="text-sm font-extralight">Overview</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <div
          className="p-2 border-2 border-slate-300 rounded-lg dark:border-gray-600 bg-slate-800 text-white shadow-md hover:shadow-lg cursor-pointer transition duration-200"
          onClick={() => setActiveComponent('assignment')}
        >
          <div className="flex gap-6 ">
            <div className=" flex justify-center items-center">
              <Image
                src="/icons/homework.png"
                alt="img not found"
                width={50}
                height={50}
              />
            </div>
            <div className="">
              <div className=" ">
                <h6 className="text-sm font-semibold ">Assignment</h6>
              </div>
              <h1 className="text-lg">10</h1>
              <h1 className="text-sm font-extralight">All Subject</h1>
            </div>
          </div>
        </div>

        <div
          className="p-2 border-2 border-slate-300 rounded-lg dark:border-gray-600 bg-slate-800 text-white shadow-md hover:shadow-lg cursor-pointer transition duration-200"
          onClick={() => setActiveComponent('schoolHoliday')}
        >
          <div className="flex gap-6 ">
            <div className=" flex justify-center items-center">
              <Image
                src="/icons/calendars.png"
                alt="img not found"
                width={50}
                height={50}
              />
            </div>
            <div className="">
              <div className=" ">
                <h6 className="text-sm font-semibold ">School Holiday</h6>
              </div>
              <h1 className="text-lg">17</h1>
              <h1 className="text-sm font-extralight">click Here</h1>
            </div>
          </div>
        </div>

        <div
          className="p-2 border-2 border-slate-300 rounded-lg dark:border-gray-600 bg-slate-800 text-white shadow-md hover:shadow-lg cursor-pointer transition duration-200"
          onClick={() => setActiveComponent('examResult')}
        >
          <div className="flex gap-6 ">
            <div className=" flex justify-center items-center">
              <Image
                src="/icons/qualification.png"
                alt="img not found"
                width={50}
                height={50}
              />
            </div>
            <div className="">
              <div className=" ">
                <h6 className="text-sm font-semibold ">Exam Results</h6>
              </div>
              <h1 className="text-lg">07</h1>
              <h1 className="text-sm font-extralight">Click Here</h1>
            </div>
          </div>
        </div>

        <div
          className="p-2 border-2 border-slate-300 rounded-lg dark:border-gray-600 bg-slate-800 text-white shadow-md hover:shadow-lg cursor-pointer transition duration-200"
          onClick={() => setActiveComponent('changePassword')}
        >
          <div className="flex gap-6 ">
            <div className=" flex justify-center items-center">
              <Image
                src="/icons/reset-password.png"
                alt="img not found"
                width={50}
                height={50}
              />
            </div>
            <div className="">
              <div className=" ">
                <h6 className="text-sm font-semibold ">Change Password</h6>
              </div>
              <h1 className="text-lg">*******</h1>
              <h1 className="text-sm font-extralight">Click Here</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Second Row: Other Components as Buttons */}
      <div className="grid grid-cols-2 gap-4">
        {[
          { name: 'Leave Application', key: 'leaveApplication' },
          { name: 'Event', key: 'event' },
        ].map((component) => (
          <button
            key={component.key}
            onClick={() => setActiveComponent(component.key)}
            className="p-4 bg-slate-800 text-white rounded-lg shadow-lg hover:bg-slate-900 transition duration-200"
          >
            {component.name}
          </button>
        ))}
      </div>

      {/* Render Active Component */}
      <div className="mt-6">{renderComponent()}</div>
    </main>
  )
}

export default Dashboard