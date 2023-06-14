import React from 'react';
import AccItem from './AccItem';

const AccList = ({data, onShow}) => {
    return (
        <dl>
            {
                data.map(item => <AccItem key={item.id} item = {item} onShow={onShow} />)
            }
        </dl>
    );
};

export default AccList;