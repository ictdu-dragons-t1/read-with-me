import Banner from '../../components/Banner';
import { Button } from '@mantine/core'
const TeamPlay = () => {
	const data = [
		{
			profile: 'https://via.placeholder.com/150',
			name: 'John Doe',
			level: 1,
		}
	]
	return (
		<>
			<div className="text-center">
				<h2 className="text-xl font-bold italic text-white">Team Play</h2>
				<p className="text-lg text-[#e6a33e] italic">Play up to 4 teams</p>
				<Banner />
				<Button variant='filled' color="yellow" size="lg">Exit</Button>
				<Button variant='filled' color="yellow" size="lg">Start</Button>
			</div>
		</>
	);
}

export default TeamPlay;