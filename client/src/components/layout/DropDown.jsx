import React from 'react';

const DropDown = ({ children, className, title, dropref }) => {
    return (
        <div className={className} ref={dropref}>
            <p>{title}</p>
            {children}
        </div>
    )
}

export default DropDown;