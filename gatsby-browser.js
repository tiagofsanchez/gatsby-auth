import React, { useState, useEffect } from "react"
import { silentAuth } from "./src/services/auth0"

const SessionCheck = ({ children }) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    silentAuth(setLoading(false))
  }, [])

  return loading === false && <>{children}</>
}

export const wrapRootElement = ({ element }) => {
  return <SessionCheck>{element}</SessionCheck>
}
