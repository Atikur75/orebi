import React from 'react';
import Container from './Container';
import Flex from './Flex';
import Image from './Image';
import { Link } from 'react-router-dom';

const Advertise = () => {
    return (
        <div className='mt-10 lg:mt-36'>
            <Container>
                <Flex className='flex justify-between gap-x-4 sm:gap-x-10'>
                    <div className='max-w-2/4'>
                        <Link to='#'>
                            <Image className='block w-full h-full' imgsrc='assets/advertise1.png' />
                        </Link>
                    </div>
                    <div className='max-w-2/4'>
                        <Link to='#' className='mb-2 sm:mb-10 inline-block'>
                            <Image imgsrc='assets/advertise2.png' />
                        </Link>
                        <Link to='#'>
                            <Image imgsrc='assets/advertise3.png' />
                        </Link>
                    </div>
                </Flex>
            </Container>
        </div>
    )
}

export default Advertise;