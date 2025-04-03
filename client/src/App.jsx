import React from 'react'
import './App.css'
import axios from 'axios'


const App = () => {
  // const url = 'http://localhost:5400/test'
  const url = "https://carowears-server-virid.vercel.app/"
  const getInfo = ()=>{
    axios.get(url)
    .then((res)=>{
      console.log(res.data);
    })
    .catch((err)=>{
      console.log(err);
      
    })
  }
  return (
    <>
    <button onClick={getInfo}>Get info</button></>
  )
}

export default App