import React from 'react'
import { Table } from 'react-bootstrap'

export default function StudentDashboard() {
  return (
    <div>
      <h2>Student Details</h2>
      <Table className='mt-5'>
        <tr>
          <th>Name</th>
          <td>Prasath</td>
        </tr>
        <tr>
          <th>Parent's Name</th>
          <td>Father</td>
        </tr>
        <tr>
          <th>Gmail</th>
          <td>prasath@gmail.com</td>
        </tr>
        <tr>
          <th>Phone Number</th>
          <td>9123456789</td>
        </tr>
        <tr>
          <th>WhatsApp Number</th>
          <td>9123456789</td>
        </tr>
        <tr>
          <th>Address</th>
          <td>Puducherry</td>
        </tr>
      </Table>
    </div>
  )
}
