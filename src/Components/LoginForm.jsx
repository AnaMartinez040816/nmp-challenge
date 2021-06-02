import React, { useState, useEffect } from 'react'
import '../Styles/login.css'
import firebase from '../Firebase/firebase'
import 'firebase/firestore'
import { useHistory } from "react-router-dom";
import loginBack from '../Static/Images/login-back.png'
import ReCaptchaComponent from './ReCaptcha'
import { useToasts } from 'react-toast-notifications'


const LoginForm = () => {
	const history = useHistory();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isVerified, setIsVerified] = useState(false);
	const { addToast } = useToasts();
	
	const loginBtn = () => {
		if (isVerified && email && password) {
			firebase.auth().signInWithEmailAndPassword(email, password)
				.then(() => {
					history.push('/');
				})
				.catch(function (error) {
					console.log(error);
					addToast('Correo o contraseña incorrectos', {
						autoDismiss: true,
						placement: 'top-right',
						appearance: 'error'
					})
				});
		} else {
			addToast('Ingresa tu correo y contraseña, y muéstranos que no eres un robot', {
				autoDismiss: true,
				placement: 'top-right',
				appearance: 'warning'
			})
		}
	}

	return (
		<div className='login-container' action="POST" data-netlify="true">
			<img className='backImg' src={loginBack} alt='backImg' />
			<div className='login-form-container'>
				<p>
					Inicia sesión
        </p>

				<div>
					<label for='loginUser'>
						Correo electrónico
          </label>
					<input type='text'
						id='loginUser'
						name=''
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div>
					<label for='loginPsw'>
						Contraseña
          </label>
					<input type='password'
						id='loginPsw'
						name=''
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>

				<ReCaptchaComponent 
					isVerified={isVerified}
					setIsVerified={setIsVerified}
				/>

				<input type='button'
					className={isVerified && email && password ? 'btn-enabled' : 'btn-disabled'}
					id='loginBtn'
					value='INGRESAR'
					onClick={loginBtn}
				/>
			</div>
		</div>
	)
}

export default LoginForm
