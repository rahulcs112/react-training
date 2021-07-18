import React, { Fragment, useState } from 'react';

const ClickComponentByFunction  = () =>{
    const [name, setName] = useState('rahul');
    const [lsName, setlsName] = useState('sharma');

    const buttonHandler = () =>{
        setName("rahul changed");
        setlsName("sharma changed");
    }

    return (
    <Fragment>
        <button onClick={buttonHandler}>Click me by function</button>
       <h1>{name}</h1>
       <h1>{lsName}</h1>
    </Fragment>);
}

export default ClickComponentByFunction;