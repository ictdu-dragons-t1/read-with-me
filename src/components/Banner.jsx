import {Box, BackgroundImage, Text, Avatar} from '@mantine/core';
import banner from '../assets/images/banner.png';
import profile from '../assets/images/covers/Profile.png';
import {Trophy} from 'lucide-react'

const Banner = () => {
	const banners = [
		{
			name: 'Naninipa ng PWD',
			profile: profile,
			achievement: 'Top 1 Global'
		},
		{
			name: 'Pumapatay ng Kupal',
			profile: profile,
			achievement: 'Top 2 Global'
		},
		{
			name: 'Nandudura ng Bulag',
			profile: profile,
			achievement: 'Top 3 Global'
		},
		{
			name: 'Galit sa Bisaya',
			profile: profile,
			achievement: 'Top 4 Global'
		}
	]
	return (
		<div className="flex justify-center items-center gap-10">
			{
				banners.map((item) => (
					<div className="h-full w-full z-50 bg-no-repeat bg-cover pt-10 pl-3 my-10"
						 style={{backgroundImage: `url(${banner})`, height: 500, width: 200}}>
						<Avatar src={item.profile} className="mx-auto my-0 mb-2" size={80}/>
						<p className="text-white font-bold text-md w-10/12 mx-auto my-0 overflow-hidden truncate  ...">{item.name}</p>
						<hr className="border-[#A89E42] border-2 w-10/12 mx-auto my-0"/>
						<div className="flex gap-2 justify-center mt-2">
							<Trophy size={20} color="#A89E42"/>
							<p className="text-white font-bold text-lg text-ellipsis  ...">{item.achievement}</p>
						</div>
					</div>
				))
			}
		</div>


	);
}

export default Banner;