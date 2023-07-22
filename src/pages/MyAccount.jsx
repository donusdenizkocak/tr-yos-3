import React from 'react'
import Dashboard from '../components/myAccountComponents/Dashboard'
import Profil from '../components/myAccountComponents/Profil'

const MyAccount = () => {
  return (
    <div className='flex justify-center items-center gap-9'>
      <Profil/>
      <Dashboard/>
    </div>
  )
}

export default MyAccount
