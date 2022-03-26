//CSS
import css from "./Register.module.css";

//IMPORTS
import { useState } from "react";

//COMPONENTS
import Input from "../Input";
import Button from "../Button";

//CONTROLLERS
import { registrarse } from "../controllers/httpRequests";

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

	const registrarseHandler = async () => {
		const respuesta = await registrarse(user, name, last_name, email, passwd);

		if (respuesta === 200) {
			setSuccessMessage("Su registro se ha completado con exito.");
		} else {
			setErrorMessage("Ha habido un problema en el registro, intentelo de nuevo mas tarde.");
		}
	};

	return (
		<section>
			<article>
				<p className={`${css.textDefault} ${css.textBottom}`}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, vero? Sint omnis nesciunt, laboriosam quidem
					quibusdam, officia adipisci provident id dignissimos cupiditate amet aut pariatur facere voluptates at magni
					incidunt? Porro corporis minus incidunt voluptatum debitis quisquam! Itaque, quaerat illo nihil consequatur,
					animi ut non perferendis accusantium adipisci, magnam harum!
				</p>
			</article>
			<article className={css.container}>
				<aside className={css.asideContainer}>
					<Input
						labelName='Usuario'
						forName='user'
						placeholderText='Usuario'
						onChangeHandler={e => setUser(e.target.value)}
					/>
					<Input
						labelName='Nombre'
						forName='name'
						placeholderText='Nombre'
						onChangeHandler={e => setName(e.target.value)}
					/>
					<Input
						labelName='Apellido'
						forName='lastName'
						placeholderText='Apellido'
						onChangeHandler={e => setLastname(e.target.value)}
					/>
					<Input
						labelName='Email'
						forName='email'
						placeholderText='Email'
						onChangeHandler={e => setEmail(e.target.value)}
					/>
					<Input
						labelName='Contraseña'
						forName='passwd'
						placeholderText='Contraseña'
						onChangeHandler={e => setPasswd(e.target.value)}
						isPassword='true'
					/>
					<Button buttonClass={css.submitButton} buttonName='REGISTRATE' clickHandler={registrarseHandler} />
					<p className={css.successMessage}>{successMessage}</p>
					<p className={css.errorMessage}>{errorMessage}</p>
				</aside>
				<aside className={css.asideContainer}>
					<p className={css.textDefault}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet perspiciatis, possimus aliquid cupiditate
						reprehenderit ab voluptas quod officia? Alias aliquid consectetur autem voluptas illum, iure fugiat beatae,
						dicta necessitatibus iusto voluptatem praesentium ullam recusandae error reprehenderit repellat! Aspernatur
						maiores ipsum minima repudiandae, aperiam beatae quis cum dolore enim odit quae!
					</p>
				</aside>
			</article>
			<article>
				<p className={`${css.textDefault} ${css.textBottom}`}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, vero? Sint omnis nesciunt, laboriosam quidem
					quibusdam, officia adipisci provident id dignissimos cupiditate amet aut pariatur facere voluptates at magni
					incidunt? Porro corporis minus incidunt voluptatum debitis quisquam! Itaque, quaerat illo nihil consequatur,
					animi ut non perferendis accusantium adipisci, magnam harum!
				</p>
			</article>
		</section>
	);
};

export default register;
