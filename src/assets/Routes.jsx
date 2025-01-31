import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import React from 'react'
import WebcamToggle from '../Webcam'

export default function Routes() {
  return (
    <Router>
        <Routes>
          <Route path='/webcam' element={<WebcamToggle/>}/>
        </Routes>
    </Router>
  )
}
