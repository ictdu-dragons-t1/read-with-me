import React from 'react'
import { Grid, Card, Stack, BackgroundImage, Box, Center } from '@mantine/core'

import battleRoyale from '../../assets/images/battleroyaleMode.png'
import solo from '../../assets/images/soloMode.png'
import multiplayer from '../../assets/images/multiplayerMode.png'
import phone from '../../assets/images/iphone-chat.png'
import book from '../../assets/images/book.png'
import avatar from '../../assets/images/avatar-group.png'

const About = () => {
    const firstSection = [
        {
            image: solo,
            title: 'Solo',
        },
        {
            image: multiplayer,
            title: 'Multiplayer',
        },
        {
            image: battleRoyale,
            title: 'Battle Royale',
        }
    ]

    const thirdSection = ['Creative Writing', 'Fill in the Blanks', 'What happens next?']
    return (
        <main className="mx-auto max-w-screen-2xl py-20 md:py-22 px-10 md:px-24 tall:min-h-[calc(100dvh-128px)]">
            <Grid gutter='md'>
                <Grid.Col span={{ base: 12, md: 4, lg: 4, xl: 4 }}>
                    <Card shadow='lg' radius='lg' styles={{ root: { backgroundColor: '#7C9ED8' } }} className='h-full' h={400}>
                        <Card.Section>
                            <h1 className='text-white font-semibold italic text-xl ml-3 mt-3    '>Dynamic Game Modes...</h1>
                        </Card.Section>
                        <Card.Section className='py-2 md:py-4 px-2'>
                            <Center>
                                <Stack gap={15}>
                                    {
                                        firstSection.map((section, index) => (
                                            <div className='relative' key={index}>
                                                <img src={section.image} alt="" />
                                                <p className='absolute top-0 text-white font-semibold text-lg drop-shadow-xl ml-5 mt-2'>{section.title}</p>
                                            </div>
                                        ))
                                    }
                                </Stack>
                            </Center>
                        </Card.Section>
                    </Card>
                </Grid.Col>

                <Grid.Col span={{ base: 12, md: 4, lg: 4, xl: 4 }}>
                    <Card shadow='lg' radius='lg' styles={{ root: { backgroundColor: '#7C9ED8' }}}  h={400}>
                        <Card.Section>
                            <h1 className='text-white font-semibold italic text-xl ml-3 mt-3'>Personalized Feedback</h1>
                        </Card.Section>
                        <Card.Section className='py-2 md:py-4 px-2'>
                            <Center>
                                <img src={phone} alt="phone" className='h-2/4' />
                            </Center>

                        </Card.Section>
                    </Card>
                </Grid.Col>

                <Grid.Col span={{ base: 12, md: 4, lg: 4, xl: 4 }}>
                    <Card shadow='lg' radius='lg' styles={{ root: { backgroundColor: '#7C9ED8' } }}  h={400}>
                        <Card.Section>
                            <h1 className='text-white font-semibold italic text-xl ml-3 mt-3'>Personalized Feedback</h1>
                        </Card.Section>
                        <Card.Section className='py-2 md:py-4 px-2'>
                            <Center>
                                <Stack gap={15} className='w-5/6'>
                                    {
                                        thirdSection.map((section, index) =>
                                        (
                                            <div className='bg-white h-20 w-full rounded-xl flex items-center p-4' key={index}>
                                                <p className='font-semibold text-lavender-blue-700 text-xl'>{section}</p>
                                            </div>
                                        ))
                                    }
                                </Stack>
                            </Center>
                        </Card.Section>
                    </Card>
                </Grid.Col>

                <Grid.Col span={{ base: 12, md: 6 }}>
                    <Card shadow='lg' radius='lg' styles={{ root: { backgroundColor: '#7C9ED8' } }}  h={400}>
                        <Card.Section className='py-2 md:py-4 px-2'>
                            <Center>
                                <img src={book} alt="" className='w-2/3' />
                            </Center>
                        </Card.Section>
                        <Card.Section>
                            <h1 className='text-white font-semibold italic text-xl ml-3 mt-3'>Choose Your Story...</h1>
                        </Card.Section>
                    </Card>
                </Grid.Col>

                <Grid.Col span={{ base: 12, md: 6 }}>
                    <Card shadow='lg' radius='lg' styles={{ root: { backgroundColor: '#7C9ED8' } }}  h={400}>
                            <Card.Section className='py-2 md:py-4 px-2'>
                                <Center>
                                    <img src={avatar} alt="" className='w-5/3' />
                                </Center>
                            </Card.Section>

                            <Card.Section className='w-full mt-auto pb-3'>
                                <h1 className='text-white font-semibold italic text-xl ml-3 mt-3'>Customization for Everyone</h1>
                            </Card.Section>
                    </Card>
                </Grid.Col>
            </Grid>
        </main>
    )
}

export default About