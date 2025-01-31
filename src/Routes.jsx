import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import React from 'react'
import WebcamToggle from './Webcam2'
import Webcam1 from './Webcam1'

export default function AppRoutes() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Webcam1/>}/>
          <Route path='/webcam' element={<WebcamToggle/>}/>
        </Routes>
    </Router>
  )
}
