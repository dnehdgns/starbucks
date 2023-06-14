import React, { useState } from 'react';
import dataList from '../assets/api/starbucksData'
import MenuList from './MenuList';
import StarList from './StarList'
import './style.scss'

const menus = ['all','coldbrew', 'espresso', 'frappuccino', 'fizzio']

const Starbucks = () => {
    const [data, setData] = useState(dataList)
    const [menu, setMenu] = useState(menus)

    const onShow = (name) => {
        if(name === 'all'){
            setData(dataList)
        }else {
            const newData = dataList.filter(item => item.name === name)
            setData(newData)
        }
    }
    return (
        <div className='starbucks'>
            <h1>startbucks Menu</h1>
            <MenuList onShow = {onShow} menu = {menu}/>
            <StarList data= {data} />
        </div>
    );
};

export default Starbucks;