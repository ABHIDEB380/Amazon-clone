import React from 'react'
import { useState } from 'react'
import { useHistory} from 'react-router-dom'
import { auth } from './firebase';
import './Login.css'
import { createUserWithEmailAndPassword} from "firebase/auth";

function Registration() {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [name,setName] = useState('');
    const history = useHistory();

    
    const register = e =>{
        e.preventDefault()

        createUserWithEmailAndPassword( auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            console.log(errorCode);
            const errorMessage = error.message;
            console.log(errorMessage);
        })
    };


    return (

        <div>
            <div className="login_container">
            <h1>Register</h1>
            <form action=" submit" >
                <h5>Name</h5>
                <input type="name" value={name} onChange={e=>setName(e.target.value)}></input>

                <h5>E-mail</h5>
                <input type="email" value= {email} onChange=
                {e=> setEmail(e.target.value)}
                />
                <h5>Password</h5>
                <input type="password" value={password} onChange=
                {e=> setPassword(e.target.value)}/>


                <button className='login_signin' onClick={register} >Register</button>


                <p> By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>


                {/* <button className='login_register' onClick={} >Create Account</button> */}
               
            </form>
            </div>
            
        </div>
    )
}

export default Registration



