import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { FaBars } from 'react-icons/fa'
import { GiUpgrade } from 'react-icons/gi'
import { PiStudentBold } from 'react-icons/pi'
import { RxDashboard } from 'react-icons/rx'
import { SiTrainerroad } from 'react-icons/si'
import { NavLink } from 'react-router-dom'

export default function Sidebar({children}) {
    const [isOpen,setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path:'/',
            name:'Dashboard',
            icon:<RxDashboard />
        },
        
        {
            path:'/student',
            name:'Student',
            icon:<PiStudentBold />
        },
        {
            path:'/trainer',
            name:'Trainer',
            icon:<SiTrainerroad />
        }
    ]
    const studentItems = [
        {
            path:'/student-details',
            name:'Student Details',
            icon:<PiStudentBold />
        },
        {
            path:'/grade',
            name:'Gade',
            icon:<GiUpgrade />
        }
    ]

  return (
    <div>
      <Container fluid  className='flexbox p-0'>
        <div style={{width: isOpen ? "auto" : "50px"}} className="sidebar">
            <div className="top_section">
                <h2 style={{display: isOpen ? "block" : "none"}} className="logo">logo</h2>
                <div style={{marginLeft: isOpen ? "auto" : "0px"}} className="bars">
                    <FaBars onClick={toggle} />
                </div>
            </div>
            {
                menuItem.map((items,index) =>(
                    <NavLink to={items.path} key={index} className='link' activeclassName='active'>
                        <div className="icon">{items.icon}</div>
                        <div style={{display : isOpen ? "block" : "none"}} className="link_text">{items.name}</div>
                    </NavLink>
                ))
            }
            {
                studentItems.map((items,index) => (
                    <NavLink to={items.path} key={index} className='link' activeclassName='active'>
                        <div className="icon">{items.icon}</div>
                        <div style={{display : isOpen ? "block" : "none"}} className="link_text">{items.name}</div>
                    </NavLink>
                ))
            }
        </div>
        <main>{children}</main>
      </Container>
    </div>
  )
}
