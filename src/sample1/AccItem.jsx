import React from 'react';

const AccItem = ({item, item :{ des }, onShow}) => {
    const {txt, msg} = des
    const {id,title, isShow} = item
    return (
        <>
            <dt className={isShow ? "on" : ""} onClick={() => onShow(id)}>{title}</dt>
            <dd className={isShow ? "on" : ""}>
                <h3>{txt}</h3>
            </dd>
            <dd className={isShow ? "on" : ""}>
                <p>{msg}</p>
            </dd>
        </>
    );
};

export default AccItem;