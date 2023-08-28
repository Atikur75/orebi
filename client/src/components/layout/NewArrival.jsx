import React from 'react';
import Container from './Container';
import Heading from './Heading';
import Flex from './Flex';
import Products from './Products';
import Slider from "react-slick";
import SampleNextArrow from './SampleNextArrow';
import SamplePrevArrow from './SamplePrevArrow';

const NewArrival = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <div className='mt-10 md:mt-32'>
            <Container>
                <Heading title='New Arrivals' />
                {/* <Flex className='sm:max-lg:flex-wrap sm:flex sm:max-md:justify-between md:gap-x-10'> */}
                <Slider {...settings}>
                    <div className='sm:max-w-[310px] md:max-lg::max-w-[350px] lg:max-w[370px]'>
                        <Products src='assets/newarrival1.png' badge={true} />
                    </div>
                    <div className='sm:max-w-[310px] md:max-lg::max-w-[350px] lg:max-w[370px]'>
                        <Products src='assets/newarrival2.png' badge={false} />
                    </div>
                    <div className='sm:max-w-[310px] md:max-lg::max-w-[350px] lg:max-w[370px]'>
                        <Products src='assets/newarrival3.png' badge={true} />
                    </div>
                    <div className='sm:max-w-[310px] md:max-lg::max-w-[350px] lg:max-w[370px]'>
                        <Products src='assets/newarrival4.png' badge={true} />
                    </div>
                    <div className='sm:max-w-[310px] md:max-lg::max-w-[350px] lg:max-w[370px]'>
                        <Products src='assets/newarrival2.png' badge={false} />
                    </div>
                </Slider>

                {/* </Flex> */}
            </Container>
        </div>
    )
}

export default NewArrival;