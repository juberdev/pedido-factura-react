// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Avatar, Box } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

// project imports
import LogoSection from '../LogoSection';
// import SearchSection from './SearchSection';
import MobileSection from './MobileSection';
import ProfileSection from './ProfileSection';
// import LocalizationSection from './LocalizationSection';
// import MegaMenuSection from './MegaMenuSection';
// import NotificationSection from './NotificationSection';
import { useDispatch, useSelector } from 'store';
import { openDrawer } from 'store/slices/menu';

// assets
import { IconMenu2 } from '@tabler/icons';
import useConfig from 'hooks/useConfig';

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
	width: 62,
	height: 34,
	padding: 7,
	'& .MuiSwitch-switchBase': {
		margin: 1,
		padding: 0,
		transform: 'translateX(6px)',
		'&.Mui-checked': {
			color: '#fff',
			transform: 'translateX(22px)',
			'& .MuiSwitch-thumb:before': {
				backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
					'#fff'
				)}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`
			},
			'& + .MuiSwitch-track': {
				opacity: 1,
				backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be'
			}
		}
	},
	'& .MuiSwitch-thumb': {
		backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
		width: 32,
		height: 32,
		'&:before': {
			content: "''",
			position: 'absolute',
			width: '100%',
			height: '100%',
			left: 0,
			top: 0,
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center',
			backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
				'#fff'
			)}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`
		}
	},
	'& .MuiSwitch-track': {
		opacity: 1,
		backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
		borderRadius: 20 / 2
	}
}));

// ==============================|| MAIN NAVBAR / HEADER ||============================== //

const Header = () => {
	const theme = useTheme();

	const dispatch = useDispatch();
	const { drawerOpen } = useSelector(state => state.menu);

	const { navType, onChangeMenuType } = useConfig();

	return (
		<>
			{/* logo & toggler button */}
			<Box
				sx={{
					width: 228,
					display: 'flex',
					[theme.breakpoints.down('md')]: {
						width: 'auto'
					}
				}}
			>
				<Box component="span" sx={{ display: { xs: 'none', md: 'block' }, flexGrow: 1 }}>
					<LogoSection />
				</Box>
				<Avatar
					variant="rounded"
					sx={{
						...theme.typography.commonAvatar,
						...theme.typography.mediumAvatar,
						overflow: 'hidden',
						transition: 'all .2s ease-in-out',
						background:
							theme.palette.mode === 'dark'
								? theme.palette.dark.main
								: theme.palette.secondary.light,
						color:
							theme.palette.mode === 'dark'
								? theme.palette.secondary.main
								: theme.palette.secondary.dark,
						'&:hover': {
							background:
								theme.palette.mode === 'dark'
									? theme.palette.secondary.main
									: theme.palette.secondary.dark,
							color:
								theme.palette.mode === 'dark'
									? theme.palette.secondary.light
									: theme.palette.secondary.light
						}
					}}
					onClick={() => dispatch(openDrawer(!drawerOpen))}
					color="inherit"
				>
					<IconMenu2 stroke={1.5} size="20px" />
				</Avatar>
			</Box>

			{/* header search */}
			{/* <SearchSection /> */}
			<Box sx={{ flexGrow: 1 }} />
			{/* <Box sx={{ flexGrow: 1 }} /> */}

			{/* mega-menu */}
			{/* <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <MegaMenuSection />
            </Box> */}

			{/* live customization & localization */}
			{/* <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <LocalizationSection />
            </Box> */}

			{/* notification & profile */}
			{/* <NotificationSection /> */}
			<FormControlLabel
				control={
					<MaterialUISwitch
						sx={{ m: 1 }}
						value={navType === 'dark'}
						onChange={e => onChangeMenuType(e.target.checked ? 'dark' : 'light')}
					/>
				}
			/>
			<ProfileSection />

			{/* mobile header */}
			<Box sx={{ display: { xs: 'block', sm: 'none' } }}>
				<MobileSection />
			</Box>
		</>
	);
};

export default Header;
