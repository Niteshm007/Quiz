import React, { useRef } from 'react'

export default function Start({setUser}) {

    const inputRef = useRef()

    const handleClick = () => {
        inputRef.current.value && setUser(inputRef.current.value)
    }

  return (
    <>
    <div className='Start' >
        <h1 align='center'>Welcome To My Quiz App</h1>
        <div className='start-data'>
      <input type="text"
      placeholder='Enter Your Name'
      className='start-ip' ref={inputRef}/>
      <button className='start-btn'onClick={handleClick}>Start</button>
      </div>
    </div>
    </>
  )
}
