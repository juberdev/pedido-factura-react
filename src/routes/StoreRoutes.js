import { lazy } from 'react';

// project imports
import GuestGuard from 'utils/route-guard/GuestGuard';
import MinimalLayout from 'layout/MinimalLayout';
import NavMotion from 'layout/NavMotion';
import Loadable from 'ui-component/Loadable';

const Orders = Loadable(lazy(() => import('views/orders')));

// ==============================|| AUTH ROUTING ||============================== //

const StoreRoutes = {
	path: '/',
	element: (
		<NavMotion>
			<GuestGuard>
				<MinimalLayout />
			</GuestGuard>
		</NavMotion>
	),
	children: [
		{
			path: '/order',
			element: <Orders />
		}
	]
};

export default StoreRoutes;
