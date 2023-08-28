import React from 'react';
import Container from './Container';
import Flex from './Flex';
import Image from './Image';
import { Link } from 'react-router-dom';


const AdvertiseBanner = () => {
    return (

        <div className='mt-10 lg:mt-32'>
            <Container>

                <div >
                    <Link to='#'>
                        <Image imgsrc='assets/advertise4.png' />
                    </Link>
                </div>

            </Container>
        </div>
    )
}

export default AdvertiseBanner;