import React from 'react';
import Image from './Image';
import Badge from './Badge';
import Flex from './Flex';
import { AiFillHeart } from 'react-icons/ai';
import { TfiReload } from 'react-icons/tfi';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Products = ({ src, badge }) => {
    return (
        <>
            <div className='relative overflow-y-hidden group'>
                <Image imgsrc={src} />
                {badge && (
                    <Badge title='New' />
                )}
                <div className='absolute lg:max-xl:bottom-[-60%] bottom-[-56%] group-hover:bottom-0 ease-in duration-300 left-0 h-40 w-full bg-white py-6 pr-7'>
                    <Link to='#'>
                        <Flex className='flex justify-end items-center gap-x-2 sm:gap-x-4'>
                            <p className='font-normal font-dm text-base text-[#767676] mr-3.5 hover:text-secondary hover:font-bold hover:ease-in duration-100'>Add to Wish List</p>
                            <AiFillHeart className='text-base' />
                        </Flex>
                    </Link>
                    <Link to='#'>
                        <Flex className='flex justify-end items-center gap-x-2 sm:gap-x-4 pt-5'>
                            <p className='font-normal font-dm text-base text-[#767676] mr-3.5 hover:text-secondary hover:font-bold hover:ease-in duration-100'>Compare</p>
                            <TfiReload className='text-base font-extrabold' />
                        </Flex>
                    </Link>
                    <Link to='#'>
                        <Flex className='flex justify-end items-center gap-x-2 sm:gap-x-4 pt-5'>
                            <p className='font-normal font-dm text-base text-[#767676] mr-3.5 hover:text-secondary hover:font-bold hover:ease-in duration-100'>Add to Cart</p>
                            <FaShoppingCart className='text-base' />
                        </Flex>
                    </Link>
                </div>
            </div>
            <div className='mb-5 md:mb-0'>
                <Flex className='flex items-center justify-between'>
                <h3 className='font-dm lg:max-xl:text-sm text-xl font-bold text-secondary pt-6'>Basic Crew Neck Tee</h3>
                <p className='font-dm lg:max-xl:text-sm text-base font-normal text-[#767676] pt-6'>$44.00</p>
                </Flex>
                <p className='font-dm lg:max-xl:text-sm text-base font-normal text-[#767676] mt-3'>Black</p>
            </div>
        </>
    )
}

export default Products;