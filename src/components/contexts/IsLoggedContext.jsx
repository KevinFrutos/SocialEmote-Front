import { useState, createContext } from "react";

export const IsLoggedContext = createContext();

const LoggedContext = ({ children }) => {
	const [isLogged, setIsLogged] = useState(false);

	const updateIsLogged = value => {
		setIsLogged(value);
	};

	return <IsLoggedContext.Provider value={{ isLogged, updateIsLogged }}>{children}</IsLoggedContext.Provider>;
};

export default LoggedContext;
