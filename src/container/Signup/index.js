import React, { useState } from 'react'
import Card from "../../components/Card"
import "./style.css"
import { signup } from "../../actions"
import { useDispatch } from 'react-redux'

function Signup() {
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()
    
    const registerUser = (e) => {

        e.preventDefault();

        const user = { fname, lname, email, password }
        dispatch(signup(user))

    }

    return (
        <div className="signup">
            <Card>
                <h3>Sign Up</h3>
                <form onSubmit={registerUser}>
                    <input
                        name="fname"
                        type="text"
                        placeholder="First Name"
                        value={fname}
                        onChange={(e) => setFname(e.target.value)}
                    />

                    <input
                        name="lname"
                        type="text"
                        placeholder="Last Name"
                        value={lname}
                        onChange={(e) => setLname(e.target.value)}
                    />

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

                    <div className="btnsubmit">
                        <button type="submit">Submit</button>
                    </div>

                </form>
            </Card>
        </div>
    )
}

export default Signup
