import React, { useEffect, useState } from 'react';
import Container from '../../components/layout/Container';
import Flex from '../../components/layout/Flex';
import Image from '../../components/layout/Image';
import List from '../../components/layout/List';
import ListItems from '../../components/layout/ListItems';
import { RiBarChartHorizontalFill } from 'react-icons/ri';


const Navbar = () => {

    const [show, setShow] = useState(true);

    useEffect(() => {

        function scrollWidth() {
            if (window.innerWidth < 1026) {
                setShow(false);
            } else {
                setShow(true);
            }
        }

        scrollWidth();

        window.addEventListener('resize', scrollWidth);

    }, []);

    return (
        <nav className='py-3'>
            <Container>
                <Flex className='lg:flex'>
                    <div className='w-3/12'>
                        <Image imgsrc='assets/logo.png' />
                    </div>
                    <div className='w-9/12'>
                        <RiBarChartHorizontalFill onClick={() => setShow(!show)} className='block lg:hidden ml-auto absolute top-5 right-6' />
                        {show && (
                            <List className='lg:flex lg:justify-end lg:gap-x-10 font-dm font-normal text-sm text-navtextcolor mt-5 lg:mt-0'>
                                <ListItems className='hover:text-secondary hover:font-bold my-2 lg:my-0' itemname='Home' href='/'/>
                                <ListItems className='hover:text-secondary hover:font-bold my-2 lg:my-0' itemname='Shop' href='/product'/>
                                <ListItems className='hover:text-secondary hover:font-bold my-2 lg:my-0' itemname='About' href='/about'/>
                                <ListItems className='hover:text-secondary hover:font-bold my-2 lg:my-0' itemname='Contact' href='/contact'/>
                                <ListItems className='hover:text-secondary hover:font-bold my-2 lg:my-0' itemname='Journal' />
                            </List>
                        )}
                    </div>
                </Flex>
            </Container>
        </nav>
    )
}

export default Navbar;