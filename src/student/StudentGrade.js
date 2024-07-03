import React from 'react'
import { Table } from 'react-bootstrap'

export default function StudentGrade() {
    
  return (
    <div>
      <h2>Student Grade</h2>
      <p>You applied exam grade</p>
      <Table className='mt-5'>
        <tr>
          <th>Grade</th>
          <td>7</td>
        </tr>
        </Table>
    </div>
  )
}
