//CSS
import css from "./Login.module.css";

//IMPORTS
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

//CONTEXTS
import { IsLoggedContext } from "../contexts/IsLoggedContext";

//COMPONENTS
import Input from "../Input";
import Button from "../Button";

//CONTROLLERS
import { login } from "../controllers/httpRequests";

const Login = () => {
	const [cookies, setCookie] = useCookies();
	//OTHERS
	const { updateIsLogged } = useContext(IsLoggedContext);
	const navigateTo = useNavigate();

	//LOGIN VARIABLES
	const [user, setUser] = useState("");
	const [passwd, setPasswd] = useState("");

	//MESSAGES
	const [errorMessage, setErrorMessage] = useState("");

	const loginHandler = async () => {
		try {
			const respuesta = await login(user, passwd);

			if (respuesta === 200) {
				setCookie("isLogged", true, {
					path: "/",
					sameSite: "none",
					secure: true,
					maxAge: 24 * 60 * 60 * 1000,
				});
				updateIsLogged(true);
				navigateTo("/");
			} else {
				updateIsLogged(false);
				setErrorMessage("Ha habido un problema, intentelo de nuevo mas tarde.");
			}
		} catch (error) {
			console.log(error);
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
						labelName='Contraseña'
						forName='passwd'
						placeholderText='Contraseña'
						onChangeHandler={e => setPasswd(e.target.value)}
						isPassword='true'
					/>
					<Button buttonClass={css.submitButton} buttonName='LOGIN' clickHandler={loginHandler} />
					<p className={css.errorMessage}>{errorMessage}</p>
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

export default Login;
