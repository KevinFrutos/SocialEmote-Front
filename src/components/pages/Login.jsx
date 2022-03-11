//CSS
import css from "./Login.module.css";

//IMPORTS
import { useState } from "react";

const Login = () => {
	//LOGIN VARIABLES
	const [user, setUser] = useState("");
	const [passwd, setPasswd] = useState("");

	//MESSAGES
	const [successMessage, setSuccessMessage] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const login = async () => {
		const respuesta = await fetch("http://localhost:9000/user/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "include",
			body: JSON.stringify({
				user,
				passwd,
			}),
		});

		if (respuesta.status === 200) {
			setSuccessMessage("Has iniciado sesión.");
		} else {
			setErrorMessage("Ha habido un problema, intentelo de nuevo mas tarde.");
		}
	};

	return (
		<section className={css.container}>
			<article className={css.articleContainer}>
				<label htmlFor='user'>Usuario</label>
				<input type='text' name='user' onChange={event => setUser(event.target.value)} placeholder='Usuario' />
				<label htmlFor='passwd'>Contraseña</label>
				<input
					type='password'
					name='passwd'
					onChange={event => setPasswd(event.target.value)}
					placeholder='Contraseña'
				/>
				<button type='submit' onClick={() => login()}>
					LOGIN
				</button>
			</article>
			<p className={css.successMessage}>{successMessage}</p>
			<p className={css.errorMessage}>{errorMessage}</p>
		</section>
	);
};

export default Login;
