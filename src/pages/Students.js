import React, { useState } from 'react'
import { Button, ButtonGroup, Form, InputGroup, Table } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa'

export default function Students() {
  const totalStudents = [
    {
      id:1,
      name:"Prasath",
      address:"Pondicherry",
    },
    {
      id:2,
      name:"Madhan",
      address:"Pondicherry"
    },
    {
      id:2,
      name:"Vinoth",
      address:"Pondicherry"
    },
  ]
  const [search,setSearch] = useState('');
  return (
    <div className='student_section'>
      <h2 className='mb-5'>Individual Student</h2>
      <InputGroup className='search-input mb-5'>
        <InputGroup.Text><FaSearch /></InputGroup.Text>
        <Form.Control 
        placeholder='Search...'
        onChange={(e)=>{setSearch(e.target.value)}}
        className='shadow-none'
          />
      </InputGroup>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>ADDRESS</th>
            <th>OPERATIONS</th>
          </tr>
        </thead>
        <tbody>
          {totalStudents.filter((item) => {
            return search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search) ||
            item.address.toLowerCase().includes(search);
          }).map((item,index) =>
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.address}</td>
              <td>
                <ButtonGroup>
                  <Button variant="outline-success shadow-none" className='edit py-2 px-3'>EDIT</Button>
                  <Button variant="outline-danger shadow-none" className='delete'>DELETE</Button>
                </ButtonGroup>
              </td>
            </tr>
         )}
          
        </tbody>
      </Table>
    </div>
  )
}
