//CSS
import Button from "../Button";
import Input from "../Input";
import css from "./PostPublication.module.css";

//IMPORTS
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//CONTROLLERS
import {url} from "../controllers/variables"

const PostPublication = () => {
	//OTHERS
	const navigateTo = useNavigate();

	//LOGIN VARIABLE
	const [description, setDescription] = useState("");

	//MESSAGES
	const [errorMessage, setErrorMessage] = useState("");

	const addPublication = async () => {
		try {
			const respuesta = await fetch(`${url}/user/publication`, {
				method: "POST",
				credentials: "include",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					description,
				}),
			});
			if (respuesta.status === 200) {
				navigateTo("/");
			} else {
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
					labelName='Descripción'
					forName='description'
					placeholderText='Descripción de tu post!'
					onChangeHandler={e => setDescription(e.target.value)}
					isText='true'
				/>
				<Button buttonClass={css.submitButton} buttonName='PUBLICAR' clickHandler={addPublication} />
			</article>
			<p className={css.errorMessage}>{errorMessage}</p>
		</section>
	);
};

export default PostPublication;
