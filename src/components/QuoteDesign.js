import React from 'react';
import LOGO from '../assets/Union.png';
import COLON from '../assets/“.svg';
import CHECK from '../assets/circle check full.png'
import L from '../assets/Vector 1.svg'

export default function QuoteDesign() {
	return (
		<div className=" w-full max-w-[666px] relative h-full hidden lg:flex items-center justify-center background p-20">
			<div className="absolute top-20 left-20">
				<div className=" flex items-end justify-centerr space-x-3">
					<img src={LOGO} alt="" />
					<p className=" text-base text-white">Oaisis</p>
				</div>
			</div>
			<div className=" w-full flex flex-col items-start max-w-[400px]">
				<img className="my-4" src={COLON} alt="" />
				<p className=" text-white text-xl leading-8 max-w-[400px]">
					The passage experienced a surge in popularity during the 1960s when Letraset used it on their
					dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their
					software.
				</p>
				<div className='my-6 flex space-x-2 items-center'>
					<p className=" text-white text-xl leading-8 ">Vincent Obi</p>
					<img className=' w-5' src={CHECK} alt="" />
				</div>
				<img src={L} alt="" className=' self-end' />
			</div>
		</div>
	);
}
