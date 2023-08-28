import React from 'react';
import Container from './Container';
import { TbNumber2 } from 'react-icons/tb';
import { FaCarSide } from 'react-icons/fa';
import { RxReload } from 'react-icons/rx';
import Flex from './Flex';

const BannerBottom = () => {
    return (
        <div className='border border-solid border-[#f0f0f0] py-2 md:py-7 mt-[-6px]'>
            <Container>
                <Flex className='flex justify-between'>
                    <Flex className='flex items-center gap-x-2 sm:gap-x-4'>
                        <TbNumber2 className='text-[10px] sm:text-2xl' />
                        <p className='font-regular font-dm text-[10px] sm:text-base text-[#6d6d6d]'>Two years warranty</p>
                    </Flex>
                    <Flex className='flex items-center gap-x-2 sm:gap-x-4'>
                        <FaCarSide className='text-[10px] sm:text-2xl' />
                        <p className='font-regular font-dm text-[10px] sm:text-base text-[#6d6d6d]'>Free shipping</p>
                    </Flex>
                    <Flex className='flex items-center gap-x-2 sm:gap-x-4'>
                        <RxReload className='text-[10px] sm:text-xl' />
                        <p className='font-regular font-dm text-[10px] sm:text-base text-[#6d6d6d]'>Return policy in 30 days</p>
                    </Flex>
                </Flex>
            </Container>
        </div>
        // <h1>Alhamdulliah</h1>
    )
}

export default BannerBottom;