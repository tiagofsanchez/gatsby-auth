import React from "react"
import Layout from "../components/layout"
import { Router } from "@reach/router"
import { Link } from "gatsby"

const Home = () => (
  <Layout>
    <h1>This is going to be a protected route with auth0</h1>
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

const Account = () => (
  <Router>
    <Home path="/account" />
    <Settings path="/account/settings" />
    <Billing path="/account/billing" />
  </Router>
)

export default Account
