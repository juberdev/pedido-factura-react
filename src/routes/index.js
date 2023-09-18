import { useRoutes } from 'react-router-dom';

// routes
import LoginRoutes from './LoginRoutes';
import MaintenanceRoutes from './MaintenanceRoutes';
import { useContext } from 'react';
import JWTContext from 'contexts/JWTContext';
import StoreRoutes from './StoreRoutes';
// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
	const state = useContext(JWTContext);

	const routes = [LoginRoutes];
	console.log(state.user, 'prueba de rutas');

	if (state.user != null) {
		switch (state.user.rol_id) {
			case 1:
				routes.push(MaintenanceRoutes, StoreRoutes);
				break;

			case 3:
				routes.push(StoreRoutes);

				break;
			case 2:
				routes.push(StoreRoutes);

				// Agregar rutas específicas para el rol 2 si es necesario
				break;
			default:
				break;
		}
	}
	console.log(routes);
	return useRoutes(routes);
}
