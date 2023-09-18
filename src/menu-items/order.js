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

const order = {
	id: 'Orders',
	title: 'Orders',
	type: 'group',
	children: [
		{
			id: 'order',
			title: 'order',
			type: 'item',
			url: '/store/order',
			icon: icons.IconSoccerField,
			breadcrumbs: false
		}
	]
};

export default order;
