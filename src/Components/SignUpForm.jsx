import React, { useState } from "react";
import "../Styles/signUpform.css";
import firebase from "../Firebase/firebase";
import "firebase/firestore";
import { useHistory, Redirect } from "react-router-dom";
import loginBack from "../Static/Images/login-back.png";
import ReCaptchaComponent from "./ReCaptcha";
import { useToasts } from "react-toast-notifications";
import openModal from '../Components/ModalFunction';
import ModalPrivacy from '../Components/ModalPrivacy';

const initialInputs = {
	email: '',
	password: '',

}

export const SignUpForm = () => {
	const auth = firebase.auth();
	const db = firebase.firestore();
	const history = useHistory();

	const [name, setName] = useState("");
	const [rfc, setRfc] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState(initialInputs);
	const [password, setPassword] = useState(initialInputs);
	const [passwordConfirmed, setPasswordConfirmed] = useState('');
	const [privacy, setPrivacy] = useState("");

	const [idPreSign, setIdPreSign] = useState('');
	const status = 'initial';
	const cv = 'none';
	const interviews = [];



	const info = async () => {
		if (password !== passwordConfirmed) {
			addToast(
				"Las contraseñas no coinciden",
				{
					autoDismiss: true,
					placement: "top-right",
					appearance: "warning",
				}
			);
		} else {
			if (isVerified && name && email && password && passwordConfirmed && privacy && phone && rfc) {
				console.log('holi')
				db.collection('preSignUp').doc(email).get()
					.then((res) => {
						return res.data()
					})
					.then((res) => {
						console.log(res, email, password);
						auth.createUserWithEmailAndPassword(email, password)
							.then( () => {
								console.log('registrado')
								db.collection("candidates").doc().set({ name, rfc, phone, email, 'recruiter': res.recruiter, status, cv, interviews, 'vacant': res.vacant })
								db.collection("users").doc(email).set({ name, email, 'permission': 'applicant' });
								db.collection('preSignUp').doc(email).delete();
								history.push('/')
								// <Redirect to="/" />;
							})
							.catch(() => {
								console.log('no registrado :c')
							})
					})
					.catch((err) => {
						console.log(err, 'no se encontró usuario')
					})
			} else {
				addToast(
					"Ingresa tu correo y contraseña, y muéstranos que no eres un robot",
					{
						autoDismiss: true,
						placement: "top-right",
						appearance: "warning",
					}
				);
			}
		}

	}

	const [isVerified, setIsVerified] = useState(false);
	const { addToast } = useToasts();


	const privacyModal = () => {
		openModal(ModalPrivacy);
	}

	return (
		<div className="signUp-container">
			<img className="signUpbackImg" src={loginBack} alt="signUpbackImg" />

			<form className="signUp-form-container"  action="POST"data-netlify="true" onSubmit={(e) => {
				e.preventDefault()
				info()
				console.log('hola')
			}}>
				<p>Registro de Postulantes</p>

				<div id="signUp-form-container-w">
					<div className="formLR">
						<div className="labelInputSgngUp">
							<label className="namee" for="signUpName">
								Nombre
            </label>
							<input
								type="text"
								id="signUpName"
								name="nombre"
								placeholder="Nombre Completo"
								onChange={(e) => setName(e.target.value)}
							/>
						</div>
						<div className="labelInputSgngUp">
							<label for="RFC">RFC</label>
							<input
								type="text"
								id="signUpRFC"
								rfc=""
								placeholder="RFC"
								onChange={(e) => setRfc(e.target.value)}
							/>
						</div>
						<div className="labelInputSgngUp">
							<label for="Telefono">Telefono</label>
							<input
								type="text"
								id="signUpnumber"
								phone=""
								placeholder= "Teléfono (10 dígitos)"
								onChange={(e) => setPhone(e.target.value)}
							/>
						</div>
					</div>

					<div className="formLR">
						<div className="labelInputSgngUp">
							<label for="loginUser">Correo electrónico</label>
							<input
								type="email"
								id="singUpUser"
								email=""
								//value={email.email}
								placeholder= "Crea una contraseña"
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div className="labelInputSgngUp">
							<label for="loginPsw">Contraseña</label>
							<input
								type="password"
								id="loginPsw"
								password=""
								//value={password.password}
								placeholder= "Crea una contraseña"
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
						<div className="labelInputSgngUp">
							<label for="loginPswConfirmed">Confirma tu Contraseña</label>
							<input
								type="password"
								passwordConfirmed=""
								id="loginPswConfirmed"
								placeholder= "Confirma tu contraseña"
								onChange={(e) => setPasswordConfirmed(e.target.value)}
							/>
						</div>
						{/* if (loginPsw.value !=== loginPswConfirmed.value) {
                            <label> No coinciden las contraseñas</label>
                        }
                        */}
					</div>
				</div>
				<div className="AvisoDePrivacidad">
					<input
						type="checkbox"
						className="checkbox-politics"
						id="politics"
						value="true"
						privacy=""
						onChange={(e) => setPrivacy(e.target.value)}
					/>
					<label for="politics" className="politics">
						Acepto el Aviso Legal sobre Protección de Datos Personales y los{" "}
						<a
							target="_blanck"
							// href="https://www.montepiedad.com.mx/legales-aviso-de-privacidad-empleo"
							className="a-politics"
							onClick={privacyModal}
						>
							<span>Términos y Condiciones </span>
						</a>{" "}
            de este concurso.
          </label>
				</div>


				<ReCaptchaComponent
					isVerified={isVerified}
					setIsVerified={setIsVerified}
				/>

				<input
					type="submit"
					className={
						isVerified && name && email && password && passwordConfirmed && privacy && phone && rfc ? "btn-enabled" : "btn-disabled"
					}
					id="loginBtn"
					value="INGRESAR"
				/>
				<div className="AvisoDePrivacidad"></div>
			</form>
		</div>
	);
};



export default SignUpForm;
