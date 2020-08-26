import React, { useState } from "react"
import { navigate } from "gatsby"
import { handleLogin, isLoggedIn } from "../services/auth"

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  //NEED TO DELETE AT SOMEPOINT!!! 
  console.log(`name:${username} and password: ${password}`)

  const handleSubmit = event => {
    event.preventDefault()
    handleLogin({ username, password })
  }

  const handleChange = e => {
    if (e.target.name === "username") {
      setUsername(e.target.value)
    } else {
      setPassword(e.target.value)
    }
  }

  if (isLoggedIn()) {
    navigate(`/app/profile`)
  }

  return (
    <>
      <h1>Log in</h1>
      <form
        method="post"
        onSubmit={event => {
          handleSubmit(event)
          navigate(`/app/profile`)
        }}
      >
        <label>
          Username
          <input
            type="text"
            name="username"
            value={username}
            onChange={e => handleChange(e)}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={e => handleChange(e)}
          />
        </label>
        <input type="submit" value="Log In" />
      </form>
    </>
  )
}

export default Login
