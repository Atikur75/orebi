import React from 'react'

const Badge = ({ title }) => {
    return (
        <span className='inline-block bg-secondary text-white py-2 px-6 absolute top-5 left-5'>{title}</span>
    )
}

export default Badge;