import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <img src="https://klike.net/uploads/posts/2019-03/1551511823_2.jpg" alt=""/>
            <NavLink to={path}>{props.name} </NavLink>
        </div>
    )

}

export default DialogsItem;