import { useFormik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { openSnackbar } from 'store/slices/snackbar';

function ModalAgregar() {
	const dispatch = useDispatch();
	const formik = useFormik({
		initialValues: {
			idPro: '',
			idUsu: 1,
			activo: true,
			nombreAbre: ''
		},
		onSubmit: async () => {
			console.log(formik.values, 'xdxdxd');
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
		<form onSubmit={formik.handleSubmit}>
			<Grid container spacing={3}>
				<div style={{ marginLeft: '30px' }}>
					<FormControl sx={{ m: 1 }}>
						<TextField
							id="ID"
							name="Id"
							label="ID"
							value={formikp.values.idPro}
							disabled
							style={{ margin: '8px 0' }}
						/>
					</FormControl>

					<Grid container spacing={1}>
						<Grid item xs={9}>
							<Grid container spacing={1}>
								<Grid item xs={9}>
									<FormControl sx={{ m: 1, width: '100%' }}>
										<TextField
											fullWidth
											id="nombreC"
											name="nombreC"
											label="Nombre Producto Completo"
											value={formikp.values.nombreC}
											onChange={formikp.handleChange}
										/>
									</FormControl>
								</Grid>
								<Grid item xs={3}>
									<FormControl sx={{ m: 1, width: '100%' }}>
										<TextField
											fullWidth
											id="codigoB"
											name="codigoB"
											label="Codigo de Barras"
											value={formikp.values.codigoB}
											onChange={formikp.handleChange}
										/>
									</FormControl>
								</Grid>
								<Grid item xs={9}>
									<FormControl sx={{ m: 1, width: '100%' }}>
										<TextField
											fullWidth
											id="nombreAbre"
											name="nombreAbre"
											label="Nombre Producto Abrebiado"
											value={formikp.values.nombreAbre}
											onChange={formikp.handleChange}
										/>
									</FormControl>
								</Grid>
								<Grid item xs={3}>
									<FormControl sx={{ m: 1, width: '100%' }}>
										<TextField
											fullWidth
											id="linkQr"
											name="linkQr"
											label="Link QR"
											value={formikp.values.linkQr}
											onChange={formikp.handleChange}
										/>
									</FormControl>
								</Grid>
								<Grid item xs={9}>
									<FormControl sx={{ m: 1, width: '100%' }}>
										<TextField
											fullWidth
											id="nombreAuto"
											name="nombreAuto"
											label="Nombre Producto Automatico"
											value={formikp.values.nombreAuto}
											onChange={formikp.handleChange}
										/>
									</FormControl>
								</Grid>
								<Grid item xs={3}>
									<FormControl sx={{ m: 1, width: '100%' }}>
										<LocalizationProvider dateAdapter={AdapterDateFns}>
											<DatePicker
												label="Fecha Lanzamiento"
												value={formikp.values.fechaLan}
												onChange={value => {
													const dateTime = moment(value).format('YYYY-MM-DD HH:mm:ss');
													formikp.setFieldValue('fechaLan', dateTime);
												}}
												renderInput={params => <TextField fullWidth {...params} />}
											/>
										</LocalizationProvider>
									</FormControl>
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={3} style={{ display: 'flex', alignItems: 'center' }}>
							<section>
								<FormControl sx={{ m: 1, width: '100%' }}>
									<p>
										<Checkbox
											name="activo"
											color="primary"
											onChange={value => {
												formikp.setFieldValue('activo', value.target.checked);
											}}
											checked={formikp.values.activo}
											// value={formikp.values.activo}
										/>
										Activo
									</p>
								</FormControl>
								<FormControl sx={{ m: 1, width: '100%' }}>
									<p>
										<Checkbox
											name="exoneracion"
											color="primary"
											onChange={value => {
												formikp.setFieldValue('exoneracion', value.target.checked);
											}}
											checked={formikp.values.exoneracion}
										/>
										Exoneracion de impuesto IGV
									</p>
								</FormControl>
							</section>
						</Grid>
					</Grid>
				</div>
			</Grid>
		</form>
	);
}

export default ModalAgregar;
