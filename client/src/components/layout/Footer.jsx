import React from 'react';
import Container from './Container';
import Flex from './Flex';
import List from './List';
import ListItems from './ListItems';
import Image from './Image';

const Footer = () => {
    return (
        <div className='bg-[#F5F5F3] mt-10 md:mt-32'>
            <Container>
                <Flex className='flex'>
                    <div className='w-[10%] py-12 mr-[50px]'>
                        <h3 className='font-dm font-bold text-base text-secondary mb-4'>Menu</h3>
                        <List>
                            <ListItems className='font-dm font-regular text-sm text-[#6D6D6D] mb-[6px]' itemname='Home' />
                            <ListItems className='font-dm font-regular text-sm text-[#6D6D6D] mb-[6px]' itemname='Shop' />
                            <ListItems className='font-dm font-regular text-sm text-[#6D6D6D] mb-[6px]' itemname='About' />
                            <ListItems className='font-dm font-regular text-sm text-[#6D6D6D] mb-[6px]' itemname='Contact' />
                            <ListItems className='font-dm font-regular text-sm text-[#6D6D6D]' itemname='Journal' />
                        </List>
                    </div>
                    <div className='w-[20%] py-12 mr-[5px]'>
                        <h3 className='font-dm font-bold text-base text-secondary mb-4'>SHOP</h3>
                        <List>
                            <ListItems className='font-dm font-regular text-sm text-[#6D6D6D] mb-[6px]' itemname='Category 1' />
                            <ListItems className='font-dm font-regular text-sm text-[#6D6D6D] mb-[6px]' itemname='Category 2' />
                            <ListItems className='font-dm font-regular text-sm text-[#6D6D6D] mb-[6px]' itemname='Category 3' />
                            <ListItems className='font-dm font-regular text-sm text-[#6D6D6D] mb-[6px]' itemname='Category 4' />
                            <ListItems className='font-dm font-regular text-sm text-[#6D6D6D]' itemname='Category 5' />
                        </List>
                    </div>
                    <div className='w-[20%] py-12 mr-[35px]'>
                        <h3 className='font-dm font-bold text-base text-secondary mb-4'>HELP</h3>
                        <List>
                            <ListItems className='font-dm font-regular text-sm text-[#6D6D6D] mb-[6px]' itemname='Privacy Policy' />
                            <ListItems className='font-dm font-regular text-sm text-[#6D6D6D] mb-[6px]' itemname='Terms & Conditions' />
                            <ListItems className='font-dm font-regular text-sm text-[#6D6D6D] mb-[6px]' itemname='Special E-shop' />
                            <ListItems className='font-dm font-regular text-sm text-[#6D6D6D] mb-[6px]' itemname='Shipping' />
                            <ListItems className='font-dm font-regular text-sm text-[#6D6D6D]' itemname='Secure Payments' />
                        </List>
                    </div>
                    <div className='w-[30%] py-12 ml-[0px]'>
                        <h3 className='font-dm font-bold text-base text-secondary '>(052) 611-5711</h3>
                        <h3 className='font-dm font-bold text-base text-secondary mb-4'>company@domain.com</h3>
                        <List>
                            <ListItems className='font-dm font-regular text-sm text-[#6D6D6D] mb-[6px]' itemname='575 Crescent Ave. Quakertown, PA 18951' />
                        </List>
                    </div>
                    <div className='w-[20%] py-12'>
                        <Image imgsrc='assets/logo.png' />
                    </div>
                </Flex >
            </Container >
        </div >
    )
}

export default Footer;