import React from 'react'

export default function Dashboard() {
  return (
    <div>
      <h2 className='mb-5'>Dashboard</h2>
      <div className='dashboard-box'>
        <div className='total-members'>
          <h3>Individual Students</h3>
          <h1>300</h1>
        </div>
        {/* <div className='total-members'>
          <h3>Trainers</h3>
          <h1>50</h1>
        </div> */}
        <div className='total-members'>
          <h3>Trainer Students</h3>
          <h1>200</h1>
        </div>
      </div>
    </div>
  )
}
