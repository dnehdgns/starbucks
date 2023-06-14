import React, { useState } from 'react';
import MelonForm from './MelonForm';
import MelonList from './MelonList';
import dataList from '../assets/api/music'

const Melon = () => {
    const [data, setData] = useState(dataList)
    return (
        <div>
            <MelonForm />
            <MelonList />
        </div>
    );
};

export default Melon;