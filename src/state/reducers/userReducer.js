export const userReducer = (
	state = {
		fullname    : '',
		email       : '',
		password    : '',
		phoneNumber : '',
		address     : '',
		country     : '',
		bvn         : ''
	},
	action
) => {
	switch (action.type) {
		case 'UPDATE_USER':
			return { ...state, ...action.payload };
		case 'CLEAR_USER':
			return {
				fullname    : null,
				email       : null,
				password    : null,
				phoneNumber : null,
				address     : null,
				country     : null,
				bvn         : null
			};
		default:
			return state;
	}
};
