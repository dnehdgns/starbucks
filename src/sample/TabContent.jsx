import React from 'react';

const TabContent = ({show : {des}}) => {
    const {msg, txt} = des
    return (
        <div className='con-box'>
            <article className='on'>
                <h3>{txt}</h3>
                <p>{msg}</p>
            </article>
        </div>
    );
};

export default TabContent;