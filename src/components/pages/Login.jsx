//CSS
import css from "./Login.module.css";

//IMPORTS
import { useState } from "react";

//COMPONENTS
import Input from "../Input";
import Button from "../Button";

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
				<Input
					labelName='Usuario'
					forName='user'
					placeholderText='Usuario'
					onChangeHandler={e => setUser(e.target.value)}
				/>
				<Input
					labelName='Contraseña'
					forName='passwd'
					placeholderText='Contraseña'
					onChangeHandler={e => setPasswd(e.target.value)}
					isPassword='true'
				/>
				<Button buttonClass={css.submitButton} buttonName='LOGIN' clickHandler={login} />
			</article>
			<p className={css.successMessage}>{successMessage}</p>
			<p className={css.errorMessage}>{errorMessage}</p>
		</section>
	);
};

export default Login;
