import React, { useState } from 'react';
import QuoteDesign from '../components/QuoteDesign';
import BACK from '../assets/arrow_back_ios_24px.png';
import GOOGLE from '../assets/flat-color-icons_google.png';
import LINE from '../assets/Line 5.png';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators } from '../state/index';
import { bindActionCreators } from 'redux';
import { motion } from 'framer-motion';

export default function PageB({ setCurrentPage, currentPage }) {
	const { user } = useSelector((state) => state);
	const dispatch = useDispatch();
	const { updateUser } = bindActionCreators(actionCreators, dispatch);

	const [ seePassword, setSeePassword ] = useState('password');
	const [ password, setPassword ] = useState(user.password);
	const [ email, setEmail ] = useState(user.email);
	const [ fullname, setFullName ] = useState(user.fullname);
	const [ error, setError ] = useState(null);
	const [ iAgree, setIAgree ] = useState(false);
	const [ emptyFields, setEmptyFields ] = useState([]);

	const fullnameStyle = emptyFields.includes('fullname') ? 'solid 2px red' : '';
	const emailStyle = emptyFields.includes('email') ? 'solid 2px red' : '';
	const passwordStyle = emptyFields.includes('password') ? 'solid 2px red' : '';

	const validate = () => {
		if (!password) {
			setEmptyFields([ ...emptyFields, 'password' ]);
		}

		if (!fullname) {
			setEmptyFields([ ...emptyFields, 'fullname' ]);
		}

		if (!email) {
			setEmptyFields([ ...emptyFields, 'email' ]);
		}
	};

	const handleClick = (e) => {
		e.preventDefault();
		setEmptyFields([]);
		setError(null);

		validate();

		if (emptyFields.length > 0) {
			return setError('All fields must be filled');
		}
		if (fullname && fullname.length < 2) {
			setError('Enter valid Name');
			return setEmptyFields([ ...emptyFields, 'fullname' ]);
		}
		if (password && password.length < 8) {
			setError('Password must be at least 8 characters');
			return setEmptyFields([ ...emptyFields, 'password' ]);
		}

		if (!iAgree) {
			return setError('Please agree to terms and conditions');
		}
		updateUser({ password, email, fullname });
		setCurrentPage(currentPage + 1);
	};
	return (
		<div className=" w-screen lg:grid griddev h-screen">
			<QuoteDesign />
			<motion.div transition={{ duration: 0.8, type: 'spring', stiffness: 100}} initial={{ x: '100vw' }} animate={{ x: 0 }} className=" flex flex-col w-full lg:p-20 p-10">
				<div className=" flex justify-between w-full items-start">
					<div className=" flex space-x-4 items-center" onClick={() => setCurrentPage(currentPage - 1)}>
						<img src={BACK} alt="" />
						<button
							className=" text-gray-600 text-base font-semibold"
							onClick={() => {
								setCurrentPage(currentPage - 1);
							}}
						>
							{' '}
							Back
						</button>
					</div>
					<div className=" flex flex-col justify-end">
						<p className=" text-gray-400 text-xs font-bold text-right">STEP 01/03</p>
						<p className=" text-gray-600 text-base font-semibold text-right">Personal info.</p>
					</div>
				</div>

				<form onSubmit={handleClick} className=" my-10 lg:p-10 flex flex-col lg:max-w-[470px]">
					<p className=" text-xl lg:text-2xl font-bold">Register Individual Account!</p>
					<p className=" text-lg font-semibold text-gray-400 mt-2 mb-4">
						For the purpose of industry requlation, your details are required.
					</p>
					<hr />
					<br />

					{error && <div className="error">{error}</div>}
					<div className=" flex flex-col my-3 space-y-4">
						<p className=" text-base font-semibold text-gray-500">Your fullname*</p>
						<div className="flex w-full">
							<input
								style={{ border: `${fullnameStyle}` }}
								value={fullname}
								onChange={(e) => {
									setEmptyFields([]);
									setFullName(e.target.value);
								}}
								type="text"
								placeholder="Please enter full name"
								className=" focus:shadow-xl shadow-md focus:border-blue-600 outline-0 focus:border-2 px-8 rounded-lg w-full h-14 inline-block border-gray-500 border-2"
							/>
						</div>
					</div>
					<div className=" flex flex-col my-3 space-y-4">
						<p className=" text-base font-semibold text-gray-500">Email address*</p>
						<div className="flex w-full">
							<input
								type="email"
								style={{ border: `${emailStyle}` }}
								value={email}
								onChange={(e) => {
									setEmptyFields([]);
									setEmail(e.target.value);
								}}
								placeholder="Enter email address"
								className=" focus:shadow-xl shadow-md focus:border-blue-600 outline-0 focus:border-2 px-8 rounded-lg w-full h-14 inline-block border-gray-500 border-2"
							/>
						</div>
					</div>
					<div className=" flex flex-col my-3 space-y-4">
						<p className=" text-base font-semibold text-gray-500">Password*</p>
						<div className="flex w-full relative">
							<input
								style={{ border: `${passwordStyle}` }}
								value={password}
								onChange={(e) => {
									setEmptyFields([]);
									setPassword(e.target.value);
								}}
								placeholder="Enter Password"
								type={seePassword}
								className=" focus:shadow-xl shadow-md focus:border-blue-600 outline-0 focus:border-2 px-8 rounded-lg w-full h-14 inline-block border-gray-500 border-2"
							/>
							{seePassword === 'password' && (
								<button
									className="absolute right-[30px] top-[15px]"
									onClick={() => setSeePassword('text')}
								>
									show
								</button>
							)}
							{seePassword === 'text' && (
								<button
									className="absolute right-[30px] top-[15px]"
									onClick={() => setSeePassword('password')}
								>
									hide
								</button>
							)}
						</div>
						<div className=" flex space-x-4 mt-4">
							<input
								className=" checkbox"
								type="checkbox"
								id="check"
								onChange={(e) => setIAgree(document.querySelector('input.checkbox').checked)}
							/>
							<label className=" text-base font-semibold text-gray-500" htmlFor="check">
								I agree to terms & conditions
							</label>
						</div>
					</div>

					<button type="submit" className=" mt-6 w-full h-14 rounded-lg bg-blue-600 text-white">
						Register Account
					</button>
					<br />
					<div className=" flex flex-row self-center items-center justify-between max-w-full overflow-x-hidden">
						<img width="40%" src={LINE} alt="" />
						<p>Or</p>
						<img width="40%" src={LINE} alt="" />
					</div>
					<button className=" flex items-center justify-center space-x-6 px-4 mt-6 w-full h-14 rounded-lg bg-white shadow-lg ">
						<img src={GOOGLE} alt="" />
						<p className="  text-black text-base font-semibold">Register with Google</p>
					</button>
				</form>
			</motion.div>
		</div>
	);
}
