import React, { useEffect, useRef, useState } from 'react';
import Container from './Container';
import Flex from './Flex';
import { FaBars, FaSearch, FaUserAlt, FaShoppingCart } from 'react-icons/fa';
import { RxTriangleDown } from 'react-icons/rx';
import { ImCross } from 'react-icons/im';
import DropDown from './DropDown';
import List from './List';
import ListItems from './ListItems';
import Search from './Search';
import { Link } from 'react-router-dom';
import Image from './Image';

const Header = () => {

    let [categoryShow, setCategoryShow] = useState(false);
    let [userShow, setUserShow] = useState(false);
    let [cartShow, setCartShow] = useState(false);

    const categoryRef = useRef();
    const userRef = useRef();
    const cartRef = useRef();

    useEffect(() => {

        document.body.addEventListener('click', (e) => {
            if (categoryRef.current.contains(e.target)) {
                setCategoryShow(true);
            } else {
                setCategoryShow(false);
            }

            if (userRef.current.contains(e.target)) {
                setUserShow(true);
            } else {
                setUserShow(false);
            }

            if (cartRef.current.contains(e.target)) {
                setCartShow(true);
            } else {
                setCartShow(false);
            }
        });

    }, []);

    return (
        <div className='bg-[#F5F5F3] pr-5 lg:p-6'>
            <Container>
                <Flex className='flex justify-between'>
                    <div className='flex items-center'>
                        <DropDown className='' dropref={categoryRef}>
                            <p className='flex items-center font-dm font-normal text-sm gap-x-2.5'>
                                <FaBars /> <span className='hidden lg:block'>Shop by Category</span>
                            </p>
                            {categoryShow && (
                                <List className='z-50 w-[263px] bg-secondary text-[rgba(255,255,255,.7)] font-dm mt-6 font-normal text-sm absolute'>
                                    <ListItems className='py-4 px-5 hover:text-white border border-solid border-[#2D2D2D] hover:font-bold hover:ml-5 hover:ease-in duration-300' itemname='Accesories' />
                                    <ListItems className='py-4 px-5 hover:text-white border border-solid border-[#2D2D2D] hover:font-bold hover:ml-5 hover:ease-in duration-300' itemname='Furniture' />
                                    <ListItems className='py-4 px-5 hover:text-white border border-solid border-[#2D2D2D] hover:font-bold hover:ml-5 hover:ease-in duration-300' itemname='Electronics' />
                                    <ListItems className='py-4 px-5 hover:text-white border border-solid border-[#2D2D2D] hover:font-bold hover:ml-5 hover:ease-in duration-300' itemname='Clothes' />
                                    <ListItems className='py-4 px-5 hover:text-white border border-solid border-[#2D2D2D] hover:font-bold hover:ml-5 hover:ease-in duration-300' itemname='Bags' />
                                    <ListItems className='py-4 px-5 hover:text-white border border-solid border-[#2D2D2D] hover:font-bold hover:ml-5 hover:ease-in duration-300' itemname='Home appliances' />
                                </List>
                            )}
                        </DropDown>
                    </div>
                    <div className='w-auto lg:w-[600px] flex relative'>
                        <Search className='w-full py-4 px-5 placeholder:text-[#c4c4c4] font-dm font-regular text-sm' placeholder='Search Products' />
                        <FaSearch className='absolute top-4 right-4' />
                    </div>
                    <Flex className='flex items-center text-secondary'>
                        <div className='relative'>
                            <DropDown dropref={userRef}>
                                <div className='flex'>
                                    <FaUserAlt className='mr-2.5' />
                                    <RxTriangleDown />
                                </div>
                                {userShow && (
                                    <List className='z-50 w-[200px] bg-white text-navhover font-dm font-normal text-sm absolute top-8 right-0 border border-solid border-[#F0F0F0]'>
                                        <ListItems className='py-4 px-5 border-b border-solid text-center border-[#F0F0F0] hover:bg-[#2B2B2B] hover:text-white hover:px-8 hover:font-bold ease-in duration-100' itemname='My Account' />
                                        <ListItems className='py-4 px-5 border-b border-solid text-center border-[#F0F0F0] hover:bg-[#2B2B2B] hover:text-white hover:px-8 hover:font-bold ease-in duration-100' itemname='Log Out' />
                                    </List>
                                )}
                            </DropDown>
                        </div>
                        <div className='ml-10'>
                            <div className='relative'>
                                <DropDown dropref={cartRef}>
                                    <FaShoppingCart />
                                </DropDown>
                                {cartShow && (
                                    <div className='z-50 w-[360px] absolute top-10 right-0 border border-solid border-[#F0F0F0]'>
                                        <div className='bg-[#F5F5F3] text-secondary font-dm font-normal text-sm p-5'>
                                            <Flex className='flex justify-between'>
                                                <div>
                                                    <Image imgsrc='assets/cartimage.png'/>
                                                </div>
                                                <div className='flex flex-col justify-center '>
                                                    <h3 className='font-dm font-bold text-sm text-secondary'>Black Smart Watch</h3>
                                                    <p className='font-dm font-bold text-sm text-secondary mt-3'>$44.00</p>
                                                </div>
                                                <div className='flex items-center justify-end'>
                                                    <ImCross className='font-dm text-sm text-secondary' />
                                                </div>
                                            </Flex>
                                        </div>
                                        <div className='p-5'>
                                            <h4 className='font-regular font-dm font-base text-[#767676]'>Subtotal: <span className='font-bold text-navhover'>$44.00</span></h4>
                                            <Link className='font-bold font-dm font-sm text-secondary border border-solid border-secondary py-4 px-8 inline-block mt-3' to='#'>View Cart</Link>
                                            <Link className='font-bold font-dm font-sm text-white border border-solid border-secondary py-4 px-8 inline-block mt-3 ml-5 bg-secondary' to='#'>View Cart</Link>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </Flex>
                </Flex>
            </Container>
        </div>
    )
}

export default Header;