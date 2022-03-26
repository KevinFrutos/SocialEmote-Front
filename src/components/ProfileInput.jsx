//CSS
import css from "./ProfileInput.module.css";

const ProfileInput = ({ labelName, forName, placeholderText, onChangeHandler, refIndex, isPassword }) => {
	return (
		<>
			{isPassword ? (
				<li>
					<label htmlFor={forName}>{labelName}: </label>
					<input
						type='password'
                        ref={refIndex}
						name={forName}
						className={css.defaultValores}
						onChange={onChangeHandler}
						placeholder={placeholderText}
					/>
				</li>
			) : (
				<li>
					<label htmlFor={forName}>{labelName}: </label>
					<input
						type='text'
                        ref={refIndex}
						name={forName}
						className={css.defaultValores}
						onChange={onChangeHandler}
						placeholder={placeholderText}
					/>
				</li>
			)}
		</>
	);
};

export default ProfileInput;
