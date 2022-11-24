import React from 'react'
import CardProfile from '../../components/CardProfile'
import CardTotal from '../../components/CardTotal'

function Profile() {
  return (
    <div>
        <div className='bg-profile'></div>
        <div style={{paddingTop:'15rem'}}>
          <CardProfile />
          <CardTotal />
          <h1 className='pt-5'>Chart</h1>
          
        </div>

        
    </div>
  )
}

export default Profile