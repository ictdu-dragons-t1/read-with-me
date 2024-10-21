import { Grid, Badge, Stack } from '@mantine/core'
import { Facebook, Mail  } from 'lucide-react'

const socmeds = [
	{
		name: 'Facebook',
		link: 'https://www.facebook.com/spcf.ictdu',
		icon: <Facebook/>
	},
	{
		name: 'Email',
		link: 'ictdu@spcf.edu.ph',
		icon: <Mail/>
	}
]
const LandingFooter = () => {
	return (
		<>
		<hr className="border-white border-1"/>
		<Grid className="mx-auto max-w-screen-2xl py-10 md:px-24 text-white">
			<Grid.Col span={12}>

			</Grid.Col>
			<div className="flex justify-between w-full">
			<Grid.Col span={4}>
				<p className="text-2xl font-bold italic mb-3">Read With Me</p>
				<Stack gap="xs">
					<p>Systems Plus College Foundation, Balibago, Angeles City</p>
					<p>ictdu@spcf.edu.ph</p>
				</Stack>
			</Grid.Col>

			<Grid.Col span={3}>
				<p className="text-xl mb-3 font-medium">Account</p>
				<p>Login / Register</p>
			</Grid.Col>

			<Grid.Col span={3}>
				<p className="text-xl mb-3">Quick Link</p>

				<Stack gap="xs">
					<p>Privacy Policy</p>
					<p>Terms of Use</p>
					<p>Contact</p>
				</Stack>

			</Grid.Col>

			<Grid.Col span={2}>
				<p className="text-xl mb-3">Contacts</p>
				{
					socmeds.map((socmed, index) => (
						<div key={index}>
							<Badge leftSection={socmed.icon} variant="outline" color="white" size="xl" className="mb-3">
								<a href={socmed.link}>{socmed.name}</a>
							</Badge>
						</div>
					))
				}
			</Grid.Col>
			</div>
		</Grid>
		</>
	);
}

export default LandingFooter;