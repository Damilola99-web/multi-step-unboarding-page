import React, { useState } from 'react';
import QuoteDesign from '../components/QuoteDesign';
import BACK from '../assets/arrow_back_ios_24px.png';
import LOCK from '../assets/lock_24px.png';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index';

export default function PageC({ setCurrentPage, currentPage }) {
	const dispatch = useDispatch();
	const { updateUser } = bindActionCreators(actionCreators, dispatch);

	const { user } = useSelector((state) => state);
	const [ country, setCountry ] = useState(user.country);
	const [ phoneNumber, setPhoneNumber ] = useState(user.phoneNumber);
	const [ address, setAddress ] = useState(user.address);
	const [error, setError] = useState(null);

	const handleProceed = (e) => {
		e.preventDefault();
		setError(null)
		if (!phoneNumber || !address || !country) {
			setError('Please fill out all fields')
		}
		if (country.length < 3 || phoneNumber.length !== 11 || address.length < 3) {
			setError('Invalid Details, please fill with correct information')
		}
		if (country.length > 2 && phoneNumber.length === 11 && address.length > 2) {
			updateUser({ country, phoneNumber, address });
			setCurrentPage(currentPage + 1);
		}
	};

	return (
		<div className=" w-screen lg:grid griddev h-screen">
			<QuoteDesign />
			<div className=" flex flex-col w-full lg:p-20 p-10">
				<div className=" flex justify-between w-full items-start">
					<div className=" flex space-x-4 items-center" onClick={() => setCurrentPage(currentPage - 1)}>
						<img src={BACK} alt="" />
						<button
							className=" text-gray-600 text-base font-semibold"
							onClick={() => setCurrentPage(currentPage - 1)}
						>
							{' '}
							Back
						</button>
					</div>
					<div className=" flex flex-col justify-end">
						<p className=" text-gray-400 text-xs font-bold text-right">STEP 02/03</p>
						<p className=" text-gray-600 text-base font-semibold text-right">Recidency info.</p>
					</div>
				</div>

				<form onSubmit={handleProceed} className=" my-10 lg:p-10 flex flex-col lg:max-w-[470px]">
					<p className=" text-xl lg:text-2xl font-bold">Complete Your Profile!</p>
					<p className=" text-lg font-semibold text-gray-400 mt-2 mb-4">
						For the purpose of industry requlation, your details are required.
					</p>
					<hr />
					<br />

					{error && <div className='error'>{error}</div>}
					<div className=" flex flex-col my-3 space-y-4">
						<p className=" text-base font-semibold text-gray-500">Phone number</p>
						<div className="flex w-full">
							<input
								value={phoneNumber}
								onChange={(e) => setPhoneNumber(e.target.value)}
								type="number"
								placeholder="Please enter phone number"
								className=" focus:shadow-xl shadow-md focus:border-blue-600 outline-0 focus:border-2 px-8 rounded-lg w-full h-14 inline-block border-gray-500 border-2"
							/>
						</div>
					</div>
					<div className=" flex flex-col my-3 space-y-4">
						<p className=" text-base font-semibold text-gray-500">Your adress</p>
						<div className="flex w-full">
							<input
								value={address}
								onChange={(e) => setAddress(e.target.value)}
								type="text"
								placeholder="Please enter address"
								className=" focus:shadow-xl shadow-md focus:border-blue-600 outline-0 focus:border-2 px-8 rounded-lg w-full h-14 inline-block border-gray-500 border-2"
							/>
						</div>
					</div>
					<div className=" flex flex-col my-3 space-y-4">
						<p className=" text-base font-semibold text-gray-500">Country of residence</p>
						<div className="flex w-full">
							<input
								value={country}
								onChange={(e) => setCountry(e.target.value)}
								placeholder="Please select"
								type="text"
								className=" focus:shadow-xl shadow-md focus:border-blue-600 outline-0 focus:border-2 px-8 rounded-lg w-full h-14 inline-block border-gray-500 border-2"
							/>
						</div>
					</div>

					<button className=" mt-10 w-full h-14 rounded-lg bg-blue-600 text-white">Save & Continue</button>
					<div className="flex flex-row items-center justify-center space-x-3 w-full mt-4">
						<img src={LOCK} alt="" />
						<p className="text-center text-sm text-gray-500">Your info is safely secured</p>
					</div>
				</form>
			</div>
		</div>
	);
}
