import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <div style={{display: "flex", justifyContent: "space-around"}}>
                <Link to={"/signup"}>Login</Link>
                <Link to={"/login"}>Signup</Link>
                <Link to={"/dashboard"}>Subscription</Link>
                <Link to={"/subscriptions"}>Dashboard</Link>
            </div>
        </>
    )
}

export default Home