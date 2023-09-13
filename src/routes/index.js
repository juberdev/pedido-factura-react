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
	console.log(state, ' con fe ');
	return useRoutes([LoginRoutes, MaintenanceRoutes, StoreRoutes]);
}
