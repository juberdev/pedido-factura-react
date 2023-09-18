import { memo } from 'react';

// material-ui
import { Typography } from '@mui/material';

// project imports
import NavGroup from './NavGroup';
import menuItem from 'menu-items';
// import MiMenu from 'menu-items';

// ==============================|| SIDEBAR MENU LIST ||============================== //

const MenuList = () => {
	// Importa MiMenu desde la ubicación adecuada
	const items = menuItem(); // Accedes a los items

	// Puedes hacer lo que necesites con los items
	console.log(items);

	const navItems = items.map(item => {
		switch (item.type) {
			case 'group':
				return <NavGroup key={item.id} item={item} />;
			default:
				return (
					<Typography key={item.id} variant="h6" color="error" align="center">
						Menu Items Error
					</Typography>
				);
		}
	});

	return <>{navItems}</>;
};

export default memo(MenuList);
