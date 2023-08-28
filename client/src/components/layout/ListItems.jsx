import React from 'react';
import { Link } from 'react-router-dom';

const ListItems = ({ itemname, className, href }) => {
    return (
        <li className={className}>
            <Link to={href}>
                {itemname}
            </Link>
        </li>
    )
}

export default ListItems;