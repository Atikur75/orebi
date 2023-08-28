import React from 'react';
import Container from './Container';
import Heading from './Heading';
import Flex from './Flex';
import Products from './Products';

const SpecialOffers = () => {
    return (
        <div className='mt-10 md:mt-32'>
            <Container>
                <Heading title='Special Offers' />
                <Flex className='sm:max-lg:flex-wrap sm:flex sm:max-md:justify-between md:gap-x-10'>

                    <div className='sm:max-w-[310px] md:max-lg::max-w-[350px] lg:max-w[370px]'>
                        <Products src='assets/specialoffer1.png' badge={false} />
                    </div>
                    <div className='sm:max-w-[310px] md:max-lg::max-w-[350px] lg:max-w[370px]'>
                        <Products src='assets/specialoffer2.png' badge={true} />
                    </div>
                    <div className='sm:max-w-[310px] md:max-lg::max-w-[350px] lg:max-w[370px]'>
                        <Products src='assets/specialoffer3.png' badge={true} />
                    </div>
                    <div className='sm:max-w-[310px] md:max-lg::max-w-[350px] lg:max-w[370px]'>
                        <Products src='assets/specialoffer4.png' badge={false} />
                    </div>

                </Flex>
            </Container>
        </div>
    )
}

export default SpecialOffers;