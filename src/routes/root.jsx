import {initSatellite} from '@junobuild/core';
import {useEffect} from 'react';
import {Auth} from '../components/Auth';
// import {Background} from '../components/Background';
// import {Footer} from '../components/Footer';
// import {Modal} from '../components/Modal';
// import {Table} from '../components/Table';
import { BackgroundImage } from '@mantine/core';
import { Grid, Image } from '@mantine/core';

//Images
import bgImage from "../assets/images/BG.png";
import monitor from "../assets/images/3dMonitor.png";

function Root() {
  useEffect(() => {
    (async () =>
      await initSatellite({
        workers: {
          auth: true
        }
      }))();
  }, []);

  return (
    <>
      <div className="relative isolate min-h-[100dvh]">
        <BackgroundImage src={bgImage} h={4000}>
          <main className="mx-auto max-w-screen-2xl py-10 px-10 md:px-24 tall:min-h-[calc(100dvh-128px)]">
            <Grid>
              <Grid.Col span={{base: 12, md: 4, lg: 4, xl: 4}}>
                <h1 className="dark:text-white text-5xl md:text-5xl font-bold tracking-tight md:pt-24">
                Unlocking Literacy in Young Minds
                </h1>
                <p className="dark:text-white py-4 md:max-w-lg text-4xl md:text-3xl">
                Make developing reading comprehension fun, accessible, and effective for young learners with ReadWithMe.
                </p>
              </Grid.Col>
              <Grid.Col span={{base: 12, md: 4, lg: 4, xl: 5}} className='flex justify-center items-center'>
                <Image src={monitor} w='auto' fit='contain'/>
              </Grid.Col>
            </Grid>
{/* 
            <Auth>
              <Table />
              <Modal />
            </Auth> */}
          </main>

          {/* <Footer /> */}
        </BackgroundImage>
      </div>
    </>
  );
}

export default Root;
