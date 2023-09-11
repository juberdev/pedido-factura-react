// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconDashboard, IconDeviceAnalytics } from '@tabler/icons';

// constant
const icons = {
	IconDashboard,
	IconDeviceAnalytics
};

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
	id: 'dashboard',
	title: <FormattedMessage id="dashboard" />,
	type: 'group',
	children: [
		{
			id: 'dashboard',
			title: <FormattedMessage id="dashboard" />,
			type: 'item',
			url: '/mantenimiento/dashboard',
			icon: icons.IconDashboard,
			breadcrumbs: false
		}
	]
};

export default dashboard;
