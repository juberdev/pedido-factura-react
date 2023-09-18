import { useContext } from 'react';
import dashboard from './dashboard';
import maintenance from './maintenance';
import order from './order';
import JWTContext from 'contexts/JWTContext';

// ==============================|| MENU ITEMS ||============================== //

function MiMenu() {
	const state = useContext(JWTContext);

	const items = [order];
	switch (state.user.rol_id) {
		case 1:
			items.push(maintenance, order, dashboard);
			break;
		case 3:
			items.push(order);
			break;
		case 2:
			items.push(order);
			break;
		default:
			break;
	}

	return items;
}

export default MiMenu;
