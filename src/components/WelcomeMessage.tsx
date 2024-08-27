import React, { FC } from 'react'

type WelcomeMessageProp = {
    isLoggedIn : boolean,
    user? : {
        name : string,
        type : "admin" | "moderator" | "guest";
    }
}

const WelcomeMessage:FC<WelcomeMessageProp> = ({isLoggedIn,user}) => {
    if(user && user.type !== 'admin'){
        return <h1>No access</h1>
    }
  return (
    <div>
        {isLoggedIn ? <h1>Welcome Back</h1> : <h1>Welcome, guest</h1>}
        {user && <h1>Hello, {user.name}</h1>}
    </div>
  )
}

export default WelcomeMessage