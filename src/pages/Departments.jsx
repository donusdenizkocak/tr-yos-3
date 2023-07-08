import React from 'react'
import DepartmentsForm from '../components/departmentsComponents/DepartmentsForm'

import DeparmentsCard from '../components/departmentsComponents/DeparmentsCard'


const Departments = () => {
  return (
    <div className='flex'>
        <div>
            <DepartmentsForm/>
        </div>
        <div>
            <DeparmentsCard/>
        </div> 
        
    </div>
  )
}

export default Departments