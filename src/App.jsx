// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero.jsx";


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
    </>
  )
}

export default App
