// src/pages/callback.js
import React from "react"
import { handleAuthentication } from "../services/auth0"

const Callback = () => {
  handleAuthentication()

  return <p>Loading...</p>
}

export default Callback