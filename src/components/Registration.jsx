import { useState, useEffect } from 'react'
import { useDisclosure } from '@mantine/hooks';
import { Image, Grid, TextInput, Button, Stack, Avatar, Modal, Card, Input } from '@mantine/core';
import bgImage from '../assets/images/alice.png'


const Registration = ({ data }) => {
  const [isOpen, setOpen] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);



  useEffect(() => {
    if (data.userName === '' || data.firstName === '' || data.lastName === '') {
      // setOpen(true);
      open();
      console.log('Registration failed');
    } else {
      // setOpen(false);
      close();
      console.log('Registration successful');
    }
  }, [data]);

  const onclose = () => {
    close();
  };

  return (
    <>
      {/* {isOpen && (
        <div className='bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 items-center flex justify-center fixed'>
          <div className="bg-white rounded-lg w-2/5 h-auto relative">
            <Grid className='w-full'>
              <Grid.Col span={{ base: 12, md: 6, lg: 6, xl: 6 }} className=''>
                <div className='py-10 px-10 my-0'>
                  <h1 className="text-2xl font-bold text-start text-black ">Get Started</h1>
                  <Stack gap={8} className='text-black mt-4'>
                    <TextInput label="First name" placeholder='Enter your first name' />
                    <TextInput label="Last name" placeholder='Enter your last name' />
                    <TextInput label="Username" placeholder='Enter your username' />
                  </Stack>
                  <Button color='rgba(41, 51, 120, 1)' className='mt-5' fullWidth onClick={onclose}>Submit</Button>
                </div>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 6, lg: 6, xl: 6 }}>
                <div className='p-1'>
                  <Image src={bgImage} alt="bgImage" w="auto" fit="cover" h={400} radius="md" />
                </div>
              </Grid.Col>
            </Grid>
          </div>
        </div>
        )
      } */}
      <Modal
        size='xl'
        opened={opened}
        radius='lg'
        onClose={close}
        withCloseButton={false}
        centered
        styles={{
          content: {
            background: ' linear-gradient(180deg, rgba(20,21,44,1) 0%, rgba(58,59,91,1) 100%)',
          }
        }}
      >
        <Grid grow gutter='lg'>
          <Grid.Col span={{ base: 12, md: 5 }} className='mr-10 xs:mr-2 sm:5 md:mr-10'>
            {/* <Image src={bgImage} alt="bgImage" fit="cover" h={400} radius='md' /> */}
            <img src={bgImage} alt="alice" className='object-cover h-32 w-full md:h-80 lg:h-96' />
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 5 }} className='mr-10 xs:mr-2 sm:5 md:mr-10 flex justify-center items-center'>
            <div>
              <h1 className='text-white font-medium text-3xl md:text-4xl mb-5'>Create an account</h1>
              <div className='block sm:flex gap-2 text-white w-full'>
                <TextInput className="w-full sm:w-full mb-4" placeholder='First Name' label="First Name" styles={{ input: { backgroundColor: "#2D2E4B", color: 'white', borderColor: '#7D8694' } }} />
                <TextInput className="w-full sm:w-full mb-4" placeholder='Last Name' label="Last Name" styles={{ input: { backgroundColor: "#2D2E4B", color: 'white', borderColor: '#7D8694' } }} />
              </div>
              <TextInput placeholder='Username' label="Username" className='text-white mb-6' styles={{ input: { backgroundColor: "#2D2E4B", color: 'white', borderColor: '#7D8694' } }} />
              <Button variant='filled' color='#6472D4' size='md' fullWidth onClick={onclose}><p className='font-semibold text-lg'>Start</p></Button>
            </div>
          </Grid.Col>
        </Grid>
      </Modal>

    </>
  )
}

export default Registration