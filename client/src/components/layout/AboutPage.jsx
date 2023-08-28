import React from 'react';
import Container from '../../components/layout/Container';
import Flex from '../../components/layout/Flex';
import Image from '../../components/layout/Image';
import { Link } from 'react-router-dom';

const AboutPage = () => {
    return (
        <Container>
            <div className='my-16 mb-20'>
                <Flex className='flex gap-x-10'>
                    <div className='w=2/4'>
                        <Link to='#'>
                            <Image imgsrc='assets/about1.png' className='w-full' />
                        </Link>
                    </div>
                    <div className='w=2/4'>
                        <Link to='#'>
                            <Image imgsrc='assets/about2.png' className='w-full' />
                        </Link>
                    </div>
                </Flex>
            </div>
            <div>
                <p className='font-dm font-normal text-secondary text-4xl'>Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.</p>
            </div>
            <div className='mt-16'>
                <Flex className='flex gap-x-10'>
                    <div className='w-2/6'>
                        <h3 className='font-dm font-bold text-secondary text-2xl mb-2'>Our Vision</h3>
                        <p className='font-dm font-normal text-secondary text-base'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div className='w-2/6'>
                        <h3 className='font-dm font-bold text-secondary text-2xl mb-2'>Our Story</h3>
                        <p className='font-dm font-normal text-secondary text-base'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to electronic.</p>
                    </div>
                    <div className='w-2/6'>
                        <h3 className='font-dm font-bold text-secondary text-2xl mb-2'>Our Brands</h3>
                        <p className='font-dm font-normal text-secondary text-base'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                    </div>
                </Flex>
            </div>
        </Container>
    )
}

export default AboutPage;