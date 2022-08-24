import React, { useState } from 'react';
import QuoteDesign from '../components/QuoteDesign';
import BACK from '../assets/arrow_back_ios_24px.png';
import LOCK from '../assets/lock_24px.png';
import CHECK from '../assets/circle check full.png';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';
import { useDispatch, useSelector } from 'react-redux';
import SuccessMessage from '../components/SuccessMessage';

export default function PageD({ setCurrentPage, currentPage }) {
	const dispatch = useDispatch();
	const { updateUser } = bindActionCreators(actionCreators, dispatch);

	const { user } = useSelector((state) => state);

	const [ bvn, setBvn ] = useState(user.bvn);
	const [ error, setError ] = useState(null);
	const [done, setdone] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault()
		setError(null)
		if (!bvn) {
			setError('Please fill out the field');
		}
		if (bvn && bvn.length !== 11) {
			setError('Enter a valid BVN');
		}
		if (bvn && bvn.length === 11) {
			updateUser({ bvn });
			setdone(true)
		}
	};
	return (
		<div className=" w-screen lg:grid griddev h-screen">
			{done && <SuccessMessage setCurrentPage={setCurrentPage} />}
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
						<p className=" text-gray-400 text-xs font-bold text-right">STEP 03/03</p>
						<p className=" text-gray-600 text-base font-semibold text-right">Bank Verification</p>
					</div>
				</div>

				<form onSubmit={handleSubmit} className=" my-10 lg:p-10 flex flex-col lg:max-w-[470px]">
					<p className=" text-xl lg:text-2xl font-bold">Complete Your Profile!</p>
					<p className=" text-lg font-semibold text-gray-400 mt-2">
						For the purpose of industry requlation, your details are required.
					</p>

					{error && <div className="error mt-4">{error}</div>}
					<div className=" flex flex-col my-10 space-y-4">
						<p className=" text-base font-semibold text-gray-500">Bank verification number (BVN)</p>
						<div className="input relative flex w-full">
							<input
								value={bvn}
								onChange={(e) => setBvn(e.target.value)}
								type="number"
								placeholder="Please enter BVN number"
								className=" focus:shadow-xl shadow-md focus:border-blue-600 outline-0 focus:border-2 px-8 rounded-lg w-full h-14 inline-block border-gray-500 border-2"
							/>
							<img className=" w-5 absolute top-[17px] right-[30px]" src={CHECK} alt="" />
						</div>
					</div>

					<button type="submit" className=" mt-10 w-full h-14 rounded-lg bg-blue-600 text-white">
						Save & Continue
					</button>
					<div className="flex flex-row items-center justify-center space-x-3 w-full mt-4">
						<img src={LOCK} alt="" />
						<p className="text-center text-sm text-gray-500">Your info is safely secured</p>
					</div>
				</form>
			</div>
		</div>
	);
}
