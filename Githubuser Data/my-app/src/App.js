import React from 'react'
import Userdata from './Userdata'
import './Userdata.css'

function App() {
  return (
    <>
    <h1 style={{textAlign:'center',margin:'2rem'}}>Github <span style={{color:'red'}}>user</span> list </h1>
    <Userdata/>
    </>
  )
}

export default App