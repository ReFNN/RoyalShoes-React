import { useState } from "react";

import { GoogleLogo, FacebookLogo, UserCircle } from "@phosphor-icons/react";

import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../../services/firebase'

import './style.scss'

import InputField from './InputField'

export default function SignIn() {

    const [user, setUser] = useState({});

    function handleGoogleSignIn(){
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
        .then((result) => {
            setUser(result.user);
        })
        .catch((error) => {
            console.log(error);
        })
    }

  return (
    <div className="container">
        <div className="user">
            {user.photoURL && <img src={user.photoURL} alt="Foto do usuário" />}

            <strong>{user.displayName}</strong>
            <small>{user.email}</small>
        </div>

        <UserCircle size={96} />
        <h1>Acesse sua conta</h1>

        <InputField type='email'/>
        <InputField type='password'/>
        <button className='btn-submit'>
            ENTRAR
        </button>
        <button type="button" className='btn-submit' onClick={handleGoogleSignIn}>
            <GoogleLogo />
            ENTRAR COM GOOGLE
        </button>
        <button type="button" className='btn-submit' onClick={handleGoogleSignIn}>
        <FacebookLogo />
            ENTRAR COM FACEBOOK
        </button>
    </div>
    
  )
}
