import React from 'react'
import './App.css'
import Weatherfetch from './Weatherfetch'

function App() {
  return (<>

    <div className='App font'>Weather<span>Hub</span></div>
    <div className="container">

    <Weatherfetch />  
    </div>
  </>
  )
}

export default App