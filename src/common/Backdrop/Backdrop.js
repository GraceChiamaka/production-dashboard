import React from 'react';
import './style.scss';

const backdrop = (props) => {
    return (
        <div className="Backdrop" onClick={props.hide}></div>
    )
}

export default backdrop;