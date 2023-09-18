import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';

import AuthGuard from 'utils/route-guard/AuthGuard';
import Loadable from 'ui-component/Loadable';

const Orders = Loadable(lazy(() => import('views/orders')));

// ==============================|| AUTH ROUTING ||============================== //

const StoreRoutes = {
	path: '/',
	element: (
		<AuthGuard>
			<MainLayout />
		</AuthGuard>
	),
	children: [
		{
			path: '/store/order',
			element: <Orders />
		}
	]
};

export default StoreRoutes;
