const validateLogin = values => {
	let errors = {};

	if (!values.username) {
		errors.username = 'Username is required';
	} else if (values.username.length < 6) {
		errors.username = 'Username must contain at least 6 characters';
	}

	if (!values.password) {
		errors.password = 'Password is required';
	} else if (values.password.length < 7) {
		errors.password = 'Password must contain at least 7 characters';
	}

	return errors;
};

export default validateLogin;
