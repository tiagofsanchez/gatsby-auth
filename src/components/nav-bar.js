import React from "react"
import { Link, navigate } from "gatsby"
import { getUser, isLoggedIn, logout } from "../services/auth"
import { isAuthenticated, logoutAuth } from "../services/auth0"

export default function NavBar() {
  let greetingMessage = ""
  if (isLoggedIn()) {
    greetingMessage = `hello ${getUser().name}`
  } else {
    greetingMessage = `You are not logged in`
  }

  return (
    <div
      style={{
        display: "flex",
        flex: "1",
        justifyContent: "space-between",
        borderBottom: "1px solid #d1c1e0",
      }}
    >
      <span>{greetingMessage}</span>

      <nav>
        <Link to="/">Home</Link>
        {` `}
        <Link to="/app/profile">Profile</Link>
        {` `}
        <Link to="/account">Account</Link>
        {` `}
        {isAuthenticated() ? (
          <a
            href="#logout"
            onClick={e => {
              logoutAuth()
              e.preventDefault()
            }}
          >
            Logout account
          </a>
        ) : null}
        {` `}
        {isLoggedIn() ? (
          <a
            href="/"
            onClick={event => {
              event.preventDefault()
              logout(() => navigate(`/app/login`))
            }}
          >
            Logout Profile
          </a>
        ) : null}
      </nav>
    </div>
  )
}
