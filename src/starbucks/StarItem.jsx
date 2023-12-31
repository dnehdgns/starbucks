import React from 'react';

const StarItem = ({item}) => {
    const {id, title, name, price, img, desc} = item
    return (
        <li>
            <img src={img} alt={title} />
            <h3>{title}</h3>
            <p>가격 : {price}</p>
            <p>정보 : {desc}</p>
        </li>
    );
};

export default StarItem;