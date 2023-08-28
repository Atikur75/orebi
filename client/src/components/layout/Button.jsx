import React from 'react';

const Button = (props) => {
    return (
        <div className='mt-10'>
            <button className='bg-secondary py-4 px-20 text-white font-dm font-bold text-sm'>{props.title}</button>
        </div>
    )
}

export default Button;