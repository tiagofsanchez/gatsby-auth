import React from "react"
import Layout from "../components/layout"
import { Router } from "@reach/router"
import { login, isAuthenticated, getProfile } from "../services/auth0"
import { Link } from "gatsby"

const Home = ({ user }) => (
  <Layout>
    <h1>This is going to be a protected route with auth0</h1>
    <p>Hi there, {user.name ? user.name : "friend"}</p>
    <Link to="/account/settings">Settings</Link>{" "}
    <Link to="/account/billing">Billing</Link>{" "}
  </Layout>
)

const Billing = () => (
  <Layout>
    <h1>This is going to be a protected route with auth0</h1>
    <h1>Billing</h1>
    <Link to="/account">back to account</Link>
  </Layout>
)
const Settings = () => (
  <Layout>
    <h1>This is going to be a protected route with auth0</h1>
    <h1>SETTINGS</h1>
    <Link to="/account">back to account</Link>
  </Layout>
)

const Account = () => {
  if (!isAuthenticated()) {
    login()
    return (
      <Layout>
        <p>Redirecting to login... </p>
      </Layout>
    )
  }
  const user = getProfile()
  return (
    <Router>
      <Home path="/account" user={user} />
      <Settings path="/account/settings" />
      <Billing path="/account/billing" />
    </Router>
  )
}

export default Account
