//CSS
import css from "./Input.module.css";

const Input = ({ labelName, forName, placeholderText, onChangeHandler, isPassword, isText }) => {
	return (
		<>
			<label className={css.defaultLabel} htmlFor={forName}>
				{labelName}
			</label>
			{isPassword === "true" ? (
				<input
					type='password'
					className={css.defaultInput}
					name={forName}
					onChange={onChangeHandler}
					placeholder={placeholderText}
				/>
			) : isText === "true" ? (
				<textarea
					type='text'
					className={`${css.defaultInput} ${css.defaultTextArea}`}
					name={forName}
					onChange={onChangeHandler}
					placeholder={placeholderText}
					maxLength='256'
					cols='30'
					rows='10'></textarea>
			) : (
				<input
					type='text'
					className={css.defaultInput}
					name={forName}
					onChange={onChangeHandler}
					placeholder={placeholderText}
				/>
			)}
		</>
	);
};

export default Input;
