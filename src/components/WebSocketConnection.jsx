//IMPORTS
import { useEffect, useContext } from "react";
import { useCookies } from "react-cookie";

//CONTEXTS
import { PublicationsDataContext } from "./contexts/PublicationsContext";
import { IsLoggedContext } from "./contexts/IsLoggedContext";
import { UserDataContext } from "./contexts/UserDataContext";

//CONTROLLERS
import { wsUrl, logout } from "./controllers/httpRequests";

const WebSocketConnection = () => {
	const { setPublicaciones } = useContext(PublicationsDataContext);
	const { updateIsLogged } = useContext(IsLoggedContext);
	const { setUserData } = useContext(UserDataContext);
	const [cookies, setCookie, removeCookie] = useCookies(["isLogged"]);

	useEffect(() => {
		// CADA VEZ QUE SE ABRE LA PAGINA SE CONECTA AL WEBSOCKET
		// LA CONEXION SE HACE DOS VECES Y CON CADA ENVIO DE DATOS SE ACTUALIZA EL STATE DEL CONTEXT
		// POR LO QUE SE VUELVE A "CREAR" LA CONEXION CONTINUAMENTE
		// ARREGLARLO...
		const ws = new WebSocket(wsUrl);
		ws.onmessage = async event => {
			const data = JSON.parse(event.data);
			//console.log(data);
			if (data.type === "publicaciones") {
				setPublicaciones(data.publicaciones);
			} else if (data.type === "session") {
				try {
					removeCookie("isLogged");
					updateIsLogged(false);
					setUserData({});
					await logout();
				} catch (error) {
					console.log(error);
				}
			}
		};
	});

	return <></>;
};

export default WebSocketConnection;
