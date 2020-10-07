import React from 'react'
import "./App.css"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Layout from './components/layout'
import Home from "./container/Home"
import Login from "./container/Login"
import Signup from "./container/Signup"

function App() {
    return (
        <Router>
            <Layout>
                <Route path="/" exact component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
            </Layout>
        </Router>
    )
}

export default App
