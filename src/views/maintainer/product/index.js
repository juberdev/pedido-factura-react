import { Button, Typography } from '@mui/material';
import { useState } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import ModalAgregar from './ModalAgregar';

export default function Product() {
	const [open, setOpen] = useState(false);
	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<MainCard
			title="Productos"
			secondary={
				<Button variant="contained" onClick={handleOpen}>
					Agregar
				</Button>
			}
		>
			<Typography variant="body2">
				Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut
				laborers et doolie magna alissa. Ut enif ad minim venice, quin nostrum exercitation illampu
				laborings nisi ut liquid ex ea commons construal. Duos aube grue dolor in reprehended in
				voltage veil esse colum doolie eu fujian bulla parian. Exceptive sin ocean cuspidate non
				president, sunk in culpa qui officiate descent molls anim id est labours.
			</Typography>
			{open ? <ModalAgregar open={open} handleClose={handleClose} /> : null}
		</MainCard>
	);
}
