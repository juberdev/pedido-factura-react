import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { openSnackbar } from 'store/slices/snackbar';
import {
	Button,
	Grid,
	IconButton,
	Modal,
	FormControl,
	TextField,
	Select,
	MenuItem,
	InputLabel,
	Stack
} from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import CloseIcon from '@mui/icons-material/Close';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { httpClient } from 'utils/axios';

function ModalAgregar(props) {
	const { open, handleClose, dataEditar } = props;
	const dispatch = useDispatch();
	const registerProduct = async data => {
		const result = await httpClient.post(`product/register`, data);
		console.log(result);
	};
	const updateProduct = async data => {
		const result = await httpClient.post(`product/register`, data);
		console.log(result);
	};

	const formik = useFormik({
		initialValues: {
			product_id: null,
			name: 'papa',
			unit: 'Kg',
			price: 0.0
		},
		onSubmit: () => {
			// console.log(formik.values, 'xdxdxd');
			if (dataEditar) {
				updateProduct(formik.values);
			} else {
				registerProduct(formik.values);
			}
			dispatch(
				openSnackbar({
					open: true,
					message: 'Producto Agregado',
					variant: 'alert',
					alert: {
						color: 'success'
					}
				})
			);
		}
	});

	return (
		<Modal
			open={open}
			onClose={handleClose}
			aria-labelledby="simple-modal-title"
			aria-describedby="simple-modal-description"
		>
			<MainCard
				sx={{
					position: 'absolute',
					width: { xs: 280 },
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)'
				}}
				title="Agregar Productos"
				content={false}
				secondary={
					<IconButton onClick={handleClose} size="large">
						<CloseIcon fontSize="small" />
					</IconButton>
				}
			>
				<form onSubmit={formik.handleSubmit}>
					<Grid container spacing={3}>
						<div style={{ margin: '50px 0 0 50px' }}>
							<Grid container spacing={1}>
								<Grid item xs={12}>
									<Grid container spacing={2}>
										<Grid item xs={11.5}>
											<FormControl sx={{ width: '100%' }}>
												<TextField
													fullWidth
													id="name"
													name="name"
													label="Nombre Producto"
													value={formik.values.name}
													onChange={formik.handleChange}
												/>
											</FormControl>
										</Grid>
										<Grid item xs={6}>
											<FormControl>
												<TextField
													fullWidth
													id="price"
													name="price"
													label="Precio"
													type="numeric"
													value={formik.values.price}
													onChange={formik.handleChange}
												/>
											</FormControl>
										</Grid>
										<Grid item xs={6}>
											<FormControl sx={{ width: '90%' }}>
												<InputLabel id="UnidadMedida">Unidad Medida</InputLabel>
												<Select
													id="unit"
													name="unit"
													label="Unidad Medida"
													value={formik.values.unit}
													onChange={formik.handleChange}
													inputProps={{ 'aria-label': 'Without label' }}
												>
													<MenuItem key={1} value="kg">
														KG
													</MenuItem>
													<MenuItem key={2} value="uni">
														Unidad
													</MenuItem>
													<MenuItem key={3} value="uni">
														Atadura
													</MenuItem>
												</Select>
											</FormControl>
										</Grid>
									</Grid>
								</Grid>
							</Grid>
						</div>
					</Grid>
					<div style={{ padding: 25 }}>
						<Grid item xs={12}>
							<Stack direction="row" justifyContent="flex-end">
								<AnimateButton>
									<Button variant="contained" type="submit">
										Agregar
									</Button>
								</AnimateButton>
							</Stack>
						</Grid>
					</div>
				</form>
			</MainCard>
		</Modal>
	);
}

export default ModalAgregar;
