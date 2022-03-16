import css from "./Button.module.css";

const Button = ({ buttonName, buttonClass, clickHandler }) => {
	return (
		<>
			<span className={`${css.default} ${buttonClass}`} onClick={clickHandler}>
				{buttonName}
			</span>
		</>
	);
};

export default Button;
