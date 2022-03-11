//CSS
import css from "./Register.module.css";

//IMPORTS
import { useState } from "react";

const register = () => {
	//USER VARIABLES
	const [user, setUser] = useState("");
	const [name, setName] = useState("");
	const [last_name, setLastname] = useState("");
	const [email, setEmail] = useState("");
	const [passwd, setPasswd] = useState("");

	//MESSAGES
	const [successMessage, setSuccessMessage] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const registrarse = async () => {
		const respuesta = await fetch("http://localhost:9000/user/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				user,
				name,
				last_name,
				email,
				passwd,
			}),
		});

		if (respuesta.status === 200) {
			setSuccessMessage("Su registro se ha completado con exito.");
		} else {
			setErrorMessage("Ha habido un problema en el registro, intentelo de nuevo mas tarde.");
		}
	};

	return (
		<section className={css.container}>
			<article className={css.articleContainer}>
				<label htmlFor='user'>Usuario</label>
				<input type='text' name='user' onChange={event => setUser(event.target.value)} placeholder='Usuario' />
				<label htmlFor='name'>Nombre</label>
				<input type='text' name='name' onChange={event => setName(event.target.value)} placeholder='Nombre' />
				<label htmlFor='lastName'>Apellido</label>
				<input type='text' name='lastName' onChange={event => setLastname(event.target.value)} placeholder='Apellido' />
				<label htmlFor='email'>Email</label>
				<input type='text' name='email' onChange={event => setEmail(event.target.value)} placeholder='Email' />
				<label htmlFor='passwd'>Contraseña</label>
				<input
					type='password'
					name='passwd'
					onChange={event => setPasswd(event.target.value)}
					placeholder='Contraseña'
				/>
				<button type='submit' onClick={() => registrarse()}>
					REGISTRATE
				</button>
			</article>
			<p className={css.successMessage}>{successMessage}</p>
			<p className={css.errorMessage}>{errorMessage}</p>
		</section>
	);
};

export default register;
