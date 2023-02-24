import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from "../Assets/loadlinkedin.png"
import { UserAuth } from './Context/AuthContext'

function Login() {
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")
  const [error , setError] = useState("")

  const {logIn} = UserAuth()
  const navigate = useNavigate()

const handleSignUp = () => {
  navigate("/")
}

const handleSignIn = async(e) => {
  e.preventDefault()

  if (!email && !password){
    alert("Email and password is required")
  }

  try {
    await logIn( email, password)
    navigate("/account")
  } catch (error) {
    setError(error.message)
  }
}
  return (
    <div className="register">
      <img src={logo} alt="" className='img_logo'/>
      <form action="">
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email'/>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password'/>
        <button type='submit' onClick={handleSignIn}>Sign In</button>
      </form>
      {error && <p style={{color: 'red', fontSize: "10px"}}>{error}</p>}
      <div className="signin">
        <p>Not a member?</p>
        <p style={{cursor: "pointer"}} onClick={handleSignUp}>sign up</p>
      </div>
    </div>
  )
}

export default Login