import { Button, Typography } from '@mui/material';
import JWTContext from 'contexts/JWTContext';
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { getUsersListStyle1 } from 'store/slices/user';
import MainCard from 'ui-component/cards/MainCard';

export default function Product() {
	// const user = {
	// 	id: 1,
	// 	name: 'Test User',
	// 	email: 'admin@admin.com',
	// 	email_verified_at: null,
	// 	store_id: 1,
	// 	rol_id: 1,
	// 	created_at: '2023-09-10T22:59:14.000000Z',
	// 	updated_at: '2023-09-10T22:59:14.000000Z',
	// 	store: {
	// 		id: 1,
	// 		name: 'Lybo',
	// 		ruc: '10750772221',
	// 		created_at: '2023-09-10T22:59:14.000000Z',
	// 		updated_at: '2023-09-10T22:59:14.000000Z'
	// 	},
	// 	rol: {
	// 		id: 1,
	// 		name: 'Super Admin',
	// 		created_at: '2023-09-10T22:59:14.000000Z',
	// 		updated_at: '2023-09-10T22:59:14.000000Z'
	// 	}
	// };
	// const nose = getUsersListStyle1(user);
	// console.log(nose, 'prueba reducer');

	// const hola = useSelector(state => state);
	// console.log(hola);

	const jwtContext = useContext(JWTContext);

	// Ahora puedes acceder al estado y las funciones proporcionadas por JWTProvider
	const { isLoggedIn, user, login, logout } = jwtContext;
	console.log(user, 'nose');
	return (
		<MainCard title="Productos" secondary={<Button variant="contained">Agregar</Button>}>
			<Typography variant="body2">
				Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut
				laborers et doolie magna alissa. Ut enif ad minim venice, quin nostrum exercitation illampu
				laborings nisi ut liquid ex ea commons construal. Duos aube grue dolor in reprehended in
				voltage veil esse colum doolie eu fujian bulla parian. Exceptive sin ocean cuspidate non
				president, sunk in culpa qui officiate descent molls anim id est labours.
			</Typography>
		</MainCard>
	);
}
