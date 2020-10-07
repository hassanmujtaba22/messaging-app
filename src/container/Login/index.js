import React, { useState } from 'react'
import Card from "../../components/Card"
import "./style.css"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    <div className="login">
      <Card>
        <h3>Login</h3>
        <form>
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div>
            <button>Login</button>
          </div>

        </form>
      </Card>
    </div>
  )
}

export default Login
