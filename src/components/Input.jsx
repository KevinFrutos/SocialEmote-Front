//CSS
import css from "./Input.module.css";

//IMPORTS
import { useState } from "react";

const Input = ({labelName, forName, placeholderText}) => {
	const [name, setName] = useState("");

	return (
		<span>
			<label htmlFor={forName}>{labelName}</label>
			<input
				type='text'
				name={forName}
				onChange={event => setName(event.target.value)}
				placeholder={placeholderText}
			/>
		</span>
	);
};

export default Input;
