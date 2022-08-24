import React, { useEffect } from 'react';
import QuoteDesign from '../components/QuoteDesign';
import GO from '../assets/Union (1).png';
import USER from '../assets/user.png';
import BRIEFCASE from '../assets/Vector (1).png';
import POLYGON from '../assets/Polygon 2.svg';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';

export default function PageA({ setCurrentPage, currentPage }) {
	const dispatch = useDispatch();
	const { clearUser } = bindActionCreators(actionCreators, dispatch);

	const animationVariant = {
		initial : {
			 x: -200 
		},
		animate : {
			 x: 0,
			 transition : {
				duration : 1
			 }
		}
	}

	useEffect(() => {
		clearUser();
	}, []);

	return (
		<div className=" w-screen lg:grid griddev h-screen">
			<QuoteDesign />
			<div className=" flex flex-col w-full lg:p-20 p-10">
				<div className=" flex justify-end w-full items-start">
					<div className=" flex flex-col justify-end">
						<p className=" text-gray-600 text-lg font-semibold text-right">
							Already have an account? <span className=" text-blue-600 text-lg">Sign in</span>
						</p>
					</div>
				</div>

				<div className=" my-20 lg:my-10 lg:p-10 flex flex-col lg:max-w-[520px]">
					<p className=" text-xl lg:text-2xl font-bold">Join Us!</p>
					<motion.h2
					variants={animationVariant}
						initial='initial'
						animate='animate'
						className=" text-lg font-semibold text-gray-400 mt-2 mb-4"
					>
						To begin this journey, tell us what type of account you'd be opening.
					</motion.h2>

					<div className="  w-full flex flex-col space-y-6">
						<motion.div
						initial={{scale: 0}}
						animate={{scale: 1}}
						transition={{duration: 0.5}}
							whileHover={{ scale: 1.1 }}
							onClick={() => setCurrentPage(currentPage + 1)}
							className=" group cursor-pointer w-full flex lg:justify-between items-center p-5 space-x-6 shadow-lg rounded-lg border-2 hover:bg-blue-300/10 border-transparent hover:shadow-sm hover:border-blue-600"
						>
							<div className=" hidden bg-[#1565D8] group-hover:w-[63px] w-[55px] pentagon md:flex items-center justify-center">
								<img src={USER} alt="" />
							</div>
							<div>
								<p className=" text-lg font-bold text-black">Individual</p>
								<p className=" text-gray-500 font-semibold text-base">
									Personal account to manage all your activities.
								</p>
							</div>
							<img className=" hidden group-hover:inline-block" src={GO} alt="" />
						</motion.div>
						<motion.div
						initial={{scale: 0}}
						animate={{scale: 1}}
						transition={{duration: 0.5}}
							whileHover={{ scale: 1.1 }}
							className=" group cursor-pointer w-full flex lg:justify-between items-center p-5 space-x-6 shadow-lg rounded-lg border-2 hover:bg-blue-300/10 border-transparent hover:shadow-sm hover:border-blue-600"
						>
							<div className=" relative hidden md:block lg:block">
								<img className=" w-[55px] group-hover:w-[63px]" src={POLYGON} alt="" />
								<img className=" absolute top-[17px] left-[17px]" src={BRIEFCASE} alt="" />
							</div>
							<div>
								<p className=" text-lg font-bold text-black">Business</p>
								<p className=" text-gray-500 font-semibold text-base">
									Own a company or belong to a company, this is for you.
								</p>
							</div>
							<img className=" hidden group-hover:inline-block" src={GO} alt="" />
						</motion.div>
					</div>
				</div>
			</div>
		</div>
	);
}
