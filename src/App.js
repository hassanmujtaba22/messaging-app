import React from 'react'
import "./App.css"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Layout from './components/layout'
import Home from "./container/Home"
import Login from "./container/Login"
import Signup from "./container/Signup"
import PrivateRoute from './container/PrivateRoute'

function App() {
    return (
        <Router>
            <Layout>
                {/* Only login user can see this page */}
                <PrivateRoute path="/" exact component={Home} />
                
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
            </Layout>
        </Router>
    )
}

export default App
