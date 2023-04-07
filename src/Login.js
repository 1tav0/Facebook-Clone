import React from 'react';
import Button from '@mui/material/Button';
import './Login.css';
import { auth, provider } from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {
    //to pull info from the stateprovider
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        //sign in...
        //afer setting up firebase backend()
        auth
            .signInWithPopup(provider) //once it comes back
            .then((result) => {
                dispatch({ //when we get back the user like a gun dispatch allows us to use shoot different actions
                    type: actionTypes.SET_USER, //we passed the type we have defined in actionTypes
                    user: result.user, //whatever we got back as our user is now our user data 
                    //now we have pushed the data into our app this is very powerful
                })
                console.log(result);
            })
            .catch((error) => alert(error.message)); //alerts on the screen

    }
    return (
        <div className='login'>
            <div className='login__logo'>
                <img src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" alt="" />
                <img src="https://p.kindpng.com/picc/s/177-1773403_facebook-logo-words-png-transparent-png.png" alt="" />
            </div>
            <Button type='submit' onClick={signIn}>
                Sign In
            </Button>
        </div>
    );
}

export default Login