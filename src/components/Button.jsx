import css from "./Button.module.css";

const Button = ({ buttonName, buttonClass, clickHandler }) => {
	return (
		<>
			<p className={`${css.default} ${buttonClass}`} onClick={clickHandler}>
				{buttonName}
			</p>
		</>
	);
};

export default Button;
