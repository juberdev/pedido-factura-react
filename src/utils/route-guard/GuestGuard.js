import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// project imports
import useAuth from 'hooks/useAuth';
import { DASHBOARD_PATH } from 'config';

// ==============================|| GUEST GUARD ||============================== //

/**
 * Guest guard for routes having no auth required
 * @param {PropTypes.node} children children element/node
 */

const GuestGuard = ({ children }) => {
	const { isLoggedIn, user } = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		if (isLoggedIn) {
			if (user.rol_id === 1) {
				navigate(DASHBOARD_PATH, { replace: true });
			}
			navigate('/store/order', { replace: true });
		}
	}, [isLoggedIn, navigate, user]);

	return children;
};

GuestGuard.propTypes = {
	children: PropTypes.node
};

export default GuestGuard;
