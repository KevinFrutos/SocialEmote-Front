//IMPORTS
import { useEffect, useContext } from "react";

//CONTEXTS
import { PublicationsDataContext } from "./contexts/PublicationsContext";

//CONTROLLERS
import { wsUrl } from "./controllers/httpRequests";

const WebSocketConnection = () => {
	const { setPublicaciones } = useContext(PublicationsDataContext);

	useEffect(() => {
		// CADA VEZ QUE SE ABRE LA PAGINA SE CONECTA AL WEBSOCKET
		// LA CONEXION SE HACE DOS VECES Y CON CADA ENVIO DE DATOS SE ACTUALIZA EL STATE DEL CONTEXT
		// POR LO QUE SE VUELVE A "CREAR" LA CONEXION CONTINUAMENTE
		// ARREGLARLO...
		const ws = new WebSocket(wsUrl);
		ws.onmessage = event => {
			const data = JSON.parse(event.data);
			//console.log(data);
			if (data.type === "publicaciones") {
				setPublicaciones(data.publicaciones);
			}
		};
	});

	return <></>;
};

export default WebSocketConnection;
