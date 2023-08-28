import React from 'react';

const Heading = ({ title }) => {
    return (
        <div className='font-dm font-bold text-3xl md:text-4xl text-secondary mb-5 md:mb-12'>{title}</div>
    )
}

export default Heading;