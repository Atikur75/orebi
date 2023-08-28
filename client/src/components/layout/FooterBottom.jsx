import React from 'react';
import Container from './Container';
import Flex from './Flex';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const FooterBottom = () => {
    return (
        <div className='bg-[#F5F5F3]'>
            <Container>
                <Flex className='flex'>
                    <div className='w-1/2 flex gap-x-6'>
                        <FaFacebookF className='text-secondary'/>
                        <FaLinkedinIn className='text-secondary'/>
                        <FaInstagram className='text-secondary'/>
                    </div>
                    <div className='w-1/2'>
                        <p className='font-dm font-normal text-sm text-[#6D6D6D] text-right'>2023 Orebi Minimal eCommerce Figma Template by Adveits</p>
                    </div>
                </Flex>
            </Container>
        </div>
    )
}

export default FooterBottom;