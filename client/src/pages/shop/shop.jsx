import React, { useState } from 'react';
import Navbar from '../../components/layout/Navbar';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import FooterBottom from '../../components/layout/FooterBottom';
import BreadCrumb from '../../components/layout/BreadCrumb';
import Flex from '../../components/layout/Flex';
import Container from '../../components/layout/Container';
import Pagination from '../../components/layout/Pagination';
import LeftSideBar from '../../components/layout/LeftSideBar';

const Shop = () => {

    const [showNumber, setShowNumber] = useState(12);

    return (
        <>
            <Navbar />
            <Header />
            <BreadCrumb />
            <Container>
                <Flex className='flex gap-x-10 mt-12'>
                    <div className='w-[25%]'>
                        <LeftSideBar />
                    </div>
                    <div className='w-[75%] relative'>
                        <div className='flex gap-x-10 mb-8 justify-end'>
                            {/* Sort By */}
                            <div className='flex items-center gap-x-3.5'>
                                <span className='inline-block font-dm font-normal text-base text-[#767676]'>Sort By:</span>
                                <select id="countries" class="w-[239px] border border-[#F0F0F0] rounded-lg focus:border-black-500 block p-2.5 font-dm font-normal text-base text-[#767676]">
                                    <option selected className='font-dm font-normal text-base'>Featured</option>
                                    <option value="US" className='font-dm font-normal text-base'>United States</option>
                                    <option value="CA" className='font-dm font-normal text-base'>Canada</option>
                                    <option value="FR" className='font-dm font-normal text-base'>France</option>
                                    <option value="DE" className='font-dm font-normal text-base'>Germany</option>
                                </select>
                            </div>
                            {/* Show */}
                            <div className='flex items-center gap-x-3.5'>
                                <span className='inline-block font-dm font-normal text-base text-[#767676]'>Show:</span>
                                <select onChange={(e) => setShowNumber(+e.target.value)} id="countries" class="w-[139px] border border-[#F0F0F0] rounded-lg focus:border-black-500 block p-2.5 font-dm font-normal text-base text-[#767676]">
                                    <option value="12" className='font-dm font-normal text-base'>12</option>
                                    <option value="24" className='font-dm font-normal text-base'>24</option>
                                    <option value="48" className='font-dm font-normal text-base'>48</option>
                                    <option value="96" className='font-dm font-normal text-base'>96</option>
                                    <option value="192" className='font-dm font-normal text-base'>192</option>
                                </select>
                            </div>
                        </div>
                        <Pagination itemsPerPage={showNumber} />
                    </div>
                </Flex>
            </Container>
            <Footer />
            <FooterBottom />
        </>
    )
}

export default Shop;