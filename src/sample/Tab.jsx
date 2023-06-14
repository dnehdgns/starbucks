import React, { useState } from 'react';
import './style2.scss'
import dataList from '../assets/api/tabData'
import TabList from './TabList';
import TabContent from './TabContent';

const Tab = () => {
    const [data, setData] = useState(dataList)
    const [show, setShow] = useState(data[0])
    const onShow = (num) => {
        const subData = data.map(item => {
            if(item.id === num){
                return {
                    ...item,
                    isShow : true
                }
            } else {
                return {
                    ...item,
                    isShow : false
                }
            }
        })
        setData(subData)
        setShow(subData[num-1])
        // setShow( data.find(item => item.id === num))
    }
    return (
        <div className='tabs'>
            <TabList data={data} onShow={onShow}/>
            <TabContent show={show}/>
        </div>
    );
};

export default Tab;