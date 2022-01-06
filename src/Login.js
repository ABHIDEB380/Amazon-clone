
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useHistory} from 'react-router-dom'
import { auth } from './firebase';
import './Login.css'
import { createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth";



function Login() {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const history = useHistory();


    //old school style
    
    // const register = e => {
    //     e.preventDefault();

    //     createUserWithEmailAndPassword(email, password)
    //     .then((auth) => {
    //         if(auth) {
    //             history.push('/')
    //         }
        
    //     }
    //     )

    //     .catch(error=> alert(error.massage))
    // }

            // New school style




    
    // const signIn = e =>{
    //         e.preventDefault()

    //         auth.signInWithEmailAndPassword(email, password)
    //             .then((auth) => {
    //                 console.log(auth);

    //             })
    //             .catch(error => alert(error.message))

    // }
    
    const signIn = e => {
        e.preventDefault();

                signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    if(auth) {
                                    history.push('/')
                                }
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    console.log(errorCode);
                    const errorMessage = error.message;
                    console.log(errorMessage);
                });
        

    }

    return (
        <div className="login">
            <Link to = '/'>
                <img
                className='login_logo'
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
            </Link>
            <div className="login_container">
            <h1>Sign In</h1>
            <form action=" submit" >

                <h5>E-mail</h5>
                <input type="email" value= {email} onChange=
                {e=> setEmail(e.target.value)}
                />
                <h5>Password</h5>
                <input type="password" value={password} onChange=
                {e=> setPassword(e.target.value)}/>


                <button className='login_signin' onClick={signIn} >Log in</button>


                <p> By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <Link to ="/Registration">
                <button className='login_register'  >Create Account</button>
                </Link>
               
            </form>

            </div>
        </div>

       
    )
}

export default Login
