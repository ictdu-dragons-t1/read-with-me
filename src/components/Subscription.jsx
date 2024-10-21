import shop from "../assets/images/covers/shop.png";
import logo from "../assets/images/logo.png";

const Subscription = () => {
	return (
		<div className='hidden lg:flex lg:flex-col items-end mb-4'>
			{/* <h1 className='text-3xl italic font-bold mb-4'>RW/M</h1> */}
			<img src={logo} alt='logo' className='size-10'/>
			<button
				className='flex flex-row border border-spacing-1 border-[#696969] bg-[#0b0c1f] bg-gradient-to-t from-[#193909] rounded-lg shadow-lg font-bold py-2 px-4 mb-4'>
				<div className='text-lg font-semibold italic'>
					Upgrade to Premium
				</div>
			</button>
			<div
				className='flex flex-row border border-spacing-1 border-[#696969] bg-[#0b0c1f] bg-gradient-to-t from-[#493211] rounded-lg shadow-lg font-bold py-2 px-4 pl-20 mb-4 mt-2.5 text-right'>
				<img src={shop} alt='' className='absolute w-20 right-20 top-32'/>
				<p className='italic font-semibold text-lg'>Shop</p>
			</div>
		</div>
	);
}

export default Subscription;