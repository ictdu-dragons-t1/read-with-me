
import React from 'react'
import monitor from "../../assets/images/3dMonitor.png";
import { Grid, Image, Stack, Button } from '@mantine/core'
import Login from "../../components/Login";

//Images
import chess from "../../assets/images/chess.png";
import puzzle from "../../assets/images/puzzle.png";
import avatar from "../../assets/images/avatar.png";
import medal from "../../assets/images/medal.png";


const Home = () => {
    const menu = [
        {
            name: 'play',
            asset: <Image src={chess} w='auto' fit='contain' />,
        },
        {
            name: 'learn',
            asset: <Image src={puzzle} w='auto' fit='contain' />,
        },
        {
            name: 'customize',
            asset: <Image src={avatar} w='auto' fit='contain' />,
        },
        {
            name: 'compete',
            asset: <Image src={medal} w='auto' fit='contain' />,
        }
    ];

    return (
        <>
            <main className="mx-auto max-w-screen-2xl py-20 md:py-22  px-10 md:px-24 tall:min-h-[calc(100dvh-128px)]">
                <Grid>
                    <Grid.Col span={{ base: 12, md: 6, lg: 4, xl: 4 }}>
                        <h1 className="dark:text-white text-5xl md:text-5xl font-bold tracking-tight md:pt-20">
                            Unlocking Literacy in Young Minds
                        </h1>
                        <p className="dark:text-white py-4 md:max-w-lg text-lg md:text-1xl lg:text-2xl">
                            Make developing reading comprehension fun, accessible, and effective for young learners with ReadWithMe.
                        </p>
                        <Login />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg: 4, xl: 5 }} className='flex justify-center items-center'>
                        <Image src={monitor} w='auto' fit='contain' />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 12, lg: 4, xl: 3 }} className='mx-0 my-auto'>
                        <Stack gap='lg' h='auto'>
                            {
                                menu.map((menu, index) => (
                                    <Button key={index} variant='filled' color='white' fullWidth h='auto' leftSection={menu.asset} justify='space-between'>
                                        <p className='capitalize text-black'>
                                            {menu.name}
                                        </p>
                                    </Button>

                                ))
                            }
                        </Stack>
                    </Grid.Col>
                </Grid>
            </main>
        </>
    )
}

export default Home