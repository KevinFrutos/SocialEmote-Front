//CSS
import css from "./Input.module.css";

const Input = ({ labelName, forName, placeholderText, onChangeHandler, isPassword }) => {
	return (
		<>
			<label className={css.labelInput} htmlFor={forName}>{labelName}</label>
			{isPassword === "true" ? (
				<input type='password' className={css.inputClass} name={forName} onChange={onChangeHandler} placeholder={placeholderText} />
			) : (
				<input type='text' className={css.inputClass} name={forName} onChange={onChangeHandler} placeholder={placeholderText} />
			)}
		</>
	);
};

export default Input;
