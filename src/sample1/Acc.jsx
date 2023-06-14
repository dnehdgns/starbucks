import React, { useState } from 'react';
import dataList from '../assets/api/tabData'
import './style.scss'
import AccList from './AccList';

const Acc = () => {
    const [data, setData] = useState(dataList)
    const onShow = (num) => {
        const newData = data.map(item =>  item.id === num ? { ...item, isShow : true } : { ...item, isShow : false })
        setData(newData)
    }
    return (
        <div className='wrap'>
            <AccList data={data} onShow={onShow}/>
        </div>
    );
};

export default Acc;