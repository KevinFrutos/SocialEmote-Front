//CSS
import css from "./Login.module.css";

//IMPORTS
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

//CONTEXTS
import { IsLoggedContext } from "../contexts/IsLoggedContext";

//COMPONENTS
import Input from "../Input";
import Button from "../Button";

const Login = () => {
	//OTHERS
	const { updateIsLogged } = useContext(IsLoggedContext);
	const navigateTo = useNavigate();

	//LOGIN VARIABLES
	const [user, setUser] = useState("");
	const [passwd, setPasswd] = useState("");

	//MESSAGES
	const [errorMessage, setErrorMessage] = useState("");

	const login = async () => {
		try {
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
				updateIsLogged(true);
				navigateTo("/");
			} else {
				updateIsLogged(false);
				setErrorMessage("Ha habido un problema, intentelo de nuevo mas tarde.");
			}
		} catch (error) {
			console.log(error);
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
				<p className={css.errorMessage}>{errorMessage}</p>
			</article>
			<article className={css.articleContainer}>
				<p className={css.textAside}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet perspiciatis, possimus aliquid cupiditate
					reprehenderit ab voluptas quod officia? Alias aliquid consectetur autem voluptas illum, iure fugiat beatae,
					dicta necessitatibus iusto voluptatem praesentium ullam recusandae error reprehenderit repellat! Aspernatur
					maiores ipsum minima repudiandae, aperiam beatae quis cum dolore enim odit quae!
				</p>
			</article>
		</section>
	);
};

export default Login;
