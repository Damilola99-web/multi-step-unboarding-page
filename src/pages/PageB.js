import React, { useState } from 'react';
import QuoteDesign from '../components/QuoteDesign';
import BACK from '../assets/arrow_back_ios_24px.png';
import GOOGLE from '../assets/flat-color-icons_google.png';
import LINE from '../assets/Line 5.png';

export default function PageB({ setCurrentPage, currentPage }) {
	const [ seePassword, setSeePassword ] = useState('password');
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
						<p className=" text-gray-400 text-xs font-bold text-right">STEP 01/03</p>
						<p className=" text-gray-600 text-base font-semibold text-right">Personal info.</p>
					</div>
				</div>

				<div className=" my-10 lg:p-10 flex flex-col lg:max-w-[470px]">
					<p className=" text-xl lg:text-2xl font-bold">Register Individual Account!</p>
					<p className=" text-lg font-semibold text-gray-400 mt-2 mb-4">
						For the purpose of industry requlation, your details are required.
					</p>
					<hr />
					<br />

					<div className=" flex flex-col my-3 space-y-4">
						<p className=" text-base font-semibold text-gray-500">Your fullname*</p>
						<div className="flex w-full">
							<input
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
								placeholder="Enter email address"
								className=" focus:shadow-xl shadow-md focus:border-blue-600 outline-0 focus:border-2 px-8 rounded-lg w-full h-14 inline-block border-gray-500 border-2"
							/>
						</div>
					</div>
					<div className=" flex flex-col my-3 space-y-4">
						<p className=" text-base font-semibold text-gray-500">Password*</p>
						<div className="flex w-full relative">
							<input
								placeholder="Enter Password"
								type={seePassword}
								className=" focus:shadow-xl shadow-md focus:border-blue-600 outline-0 focus:border-2 px-8 rounded-lg w-full h-14 inline-block border-gray-500 border-2"
							/>
							{seePassword === 'password' && (
								<button className="absolute right-[30px] top-[15px]" onClick={() => setSeePassword('text')}>
									show
								</button>
							)}
							{seePassword === 'text' && (
								<button className="absolute right-[30px] top-[15px]" onClick={() => setSeePassword('password')}>
									hide
								</button>
							)}
						</div>
						<div className=" flex space-x-4 mt-4">
							<input className=" checkbox" type="checkbox" id="check" />
							<label className=" text-base font-semibold text-gray-500" htmlFor="check">
								I agree to terms & conditions
							</label>
						</div>
					</div>

					<button
						onClick={() => setCurrentPage(currentPage + 1)}
						className=" mt-6 w-full h-14 rounded-lg bg-blue-600 text-white"
					>
						Register Account
					</button>
					<br />
					<div className=" flex flex-row self-center items-center justify-between max-w-full overflow-x-hidden">
						<img width='40%' src={LINE} alt="" />
						<p>Or</p>
						<img width='40%' src={LINE} alt="" />
					</div>
					<button
						onClick={() => setCurrentPage(currentPage + 1)}
						className=" flex items-center justify-center space-x-6 px-4 mt-6 w-full h-14 rounded-lg bg-white shadow-lg "
					>
						<img src={GOOGLE} alt="" />
						<p className="  text-black text-base font-semibold">Register with Google</p>
					</button>
				</div>
			</div>
		</div>
	);
}
