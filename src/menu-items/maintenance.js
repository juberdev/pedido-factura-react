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
			id: 'deporte',
			title: 'Deportes',
			type: 'item',
			url: '/mantenimiento/deporte',
			icon: icons.IconBallFootball,
			breadcrumbs: false
		},
		{
			id: 'tipoReserva',
			title: 'Tipos de Reservas',
			type: 'item',
			url: '/mantenimiento/tipoReserva',
			icon: icons.IconTicket,
			breadcrumbs: false
		},
		{
			id: 'adicional',
			title: 'Adicionales',
			type: 'item',
			url: '/mantenimiento/adicional',
			icon: icons.IconRocket,
			breadcrumbs: false
		},
		{
			id: 'reserva',
			title: 'reserva',
			type: 'item',
			url: '/mantenimiento/reserva',
			icon: icons.IconRocket,
			breadcrumbs: false
		}
	]
};

export default maintenance;
