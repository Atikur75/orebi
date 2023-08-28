import React from 'react';
import Container from './Container';
import { FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BreadCrumb = ({ title }) => {

    return (
        <Container>
            <h1 className='font-dm font-bold text-5xl text-secondary capitalize mt-20'>{window.location.pathname.split('/')[1]}</h1>
            <p className='font-dm font-normal text-sm text-[#767676] mt-2'> <Link to='/'>Home</Link> <FaAngleRight className='inline-block' /> {window.location.pathname.split('/')[1]} </p>
        </Container>
    )
}

export default BreadCrumb;