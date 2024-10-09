import React from 'react'
import { Grid, Card } from '@mantine/core'
import { root } from 'postcss'

const About = () => {

    const features = [
        {
            name: 'dynamin game modes',
            details: [
                'Solo',
                'Team',
                'Battle Royale'
            ]
        },
        {
            name: 'personalized feedback',
            details: [
                "Hey! We noticed you’re finding the current text a bit tricky. No worries!",
                "Here’s what you can try :",
            ]
        },
        {
            name: 'interactive tasks',
            details: [
                'fill in the blanks',
                'creative writing',
                'what happens next',
            ]
        }
    ]

  return (
    <main className="mx-auto max-w-screen-2xl py-20 md:py-22  px-10 md:px-24 tall:min-h-[calc(100dvh-128px)]">
        <Grid grow gutter='md'>
            <Grid.Col span={{ base: 12, md: 6, lg: 4, xl: 4 }}>
                <Card shadow='lg' styles={{root: {backgroundColor: '#7C9ED8'}}}>
                    <Card.Section>
                        <h1>Title</h1>
                    </Card.Section>
                    <Card.Section>
                        <p>Details</p>
                    </Card.Section>
                </Card>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 4, xl: 4 }}>
                <Card shadow='lg' styles={{root: {backgroundColor: '#7C9ED8'}}}>
                    <Card.Section>
                        <h1>Title</h1>
                    </Card.Section>
                    <Card.Section>
                        <p>Details</p>
                    </Card.Section>
                </Card>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 4, xl: 4 }}>
                <Card shadow='lg' styles={{root: {backgroundColor: '#7C9ED8'}}}>
                    <Card.Section>
                        <h1>Title</h1>
                    </Card.Section>
                    <Card.Section>
                        <p>Details</p>
                    </Card.Section>
                </Card>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 4, xl: 4 }}>
                <Card shadow='lg' styles={{root: {backgroundColor: '#7C9ED8'}}}>
                    <Card.Section>
                        <h1>Title</h1>
                    </Card.Section>
                    <Card.Section>
                        <p>Details</p>
                    </Card.Section>
                </Card>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 4, xl: 4 }}>
                <Card shadow='lg' styles={{root: {backgroundColor: '#7C9ED8'}}}>
                    <Card.Section>
                        <h1>Title</h1>
                    </Card.Section>
                    <Card.Section>
                        <p>Details</p>
                    </Card.Section>
                </Card>
            </Grid.Col>
        </Grid>
    </main>
  )
}

export default About