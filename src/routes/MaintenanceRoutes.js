import { lazy } from 'react';
// project imports
import MainLayout from 'layout/MainLayout';

import AuthGuard from 'utils/route-guard/AuthGuard';
import Loadable from 'ui-component/Loadable';

// widget routing
const Product = Loadable(lazy(() => import('views/maintainer/product')));
const User = Loadable(lazy(() => import('views/maintainer/user')));
const Dashboard = Loadable(lazy(() => import('views/maintainer/dashboard')));

// application routing
// const AppKanban = Loadable(lazy(() => import('views/application/kanban')));
// ==============================|| MAIN ROUTING ||============================== //
// * Importación de modulos
// const Acional = Loadable(lazy(() => import('modules/Mantenimiento/Adicional')));
// const CampoDeportivo = Loadable(lazy(() => import('modules/Mantenimiento/CampoDeportivo')));
// const Deporte = Loadable(lazy(() => import('modules/Mantenimiento/Deporte')));
// const TipoReserva = Loadable(lazy(() => import('modules/Mantenimiento/TipoReserva')));
// const Reserva = Loadable(lazy(() => import('modules/Mantenimiento/Reserva')));

const MaintenanceRoutes = {
	path: '/',
	element: (
		<AuthGuard>
			<MainLayout />
		</AuthGuard>
	),
	children: [
		{
			path: '/mantenimiento/producto',
			element: <Product />
		},
		{
			path: '/mantenimiento/dashboard',
			element: <Dashboard />
		},
		{
			path: '/mantenimiento/usuario',
			element: <User />
		}
	]
};

export default MaintenanceRoutes;
