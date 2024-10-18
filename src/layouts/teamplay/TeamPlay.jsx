import Banner from '../../components/Banner';
import TeamChat from "../../components/TeamChat.jsx";
import {Button, Group, Grid} from '@mantine/core'

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
			<h2 className="text-xl font-bold italic text-white">Team Play</h2>
			<p className="text-lg text-[#e6a33e] italic">Play up to 4 teams</p>
			<TeamChat/>
			<Banner/>
			<Group justify="center" className="mb-10">
				<Button variant='outlined' color="yellow" size="lg">Exit</Button>
				<Button variant='filled' color="yellow" size="lg">Start</Button>
			</Group>


		</>
	);
}

export default TeamPlay;