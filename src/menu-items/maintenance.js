// third-party

// assets
import {
	IconDashboard,
	IconDeviceAnalytics,
	IconBallFootball,
	IconSoccerField,
	IconTicket,
	IconRocket
} from '@tabler/icons';

// constant
const icons = {
	IconDashboard,
	IconDeviceAnalytics,
	IconBallFootball,
	IconSoccerField,
	IconTicket,
	IconRocket
};

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const maintenance = {
	id: 'Mantenimiento',
	title: 'mantenimiento',
	type: 'group',
	children: [
		{
			id: 'producto',
			title: 'Producto',
			type: 'item',
			url: '/mantenimiento/producto',
			icon: icons.IconSoccerField,
			breadcrumbs: false
		},
		{
			id: 'usuario',
			title: 'Usuario',
			type: 'item',
			url: '/mantenimiento/usuario',
			icon: icons.IconSoccerField,
			breadcrumbs: false
		}
	]
};

export default maintenance;
