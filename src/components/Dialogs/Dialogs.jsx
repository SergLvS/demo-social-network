import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {Navigate} from 'react-router-dom'
import AddMessageForm from "./AddMessageForm/AddMessageForm";

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElement = state.dialogs.map(d => <DialogsItem name={d.name} key={d.id} id={d.id}/>);

    let messagesElement = state.messages.map(m => <Message message={m.message} key={m.id}/>);

    let newMessageBody = state.newMessageBody;


    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);

    }

    if (!props.isAuth) return <Navigate to={'/login'}/>;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
            <AddMessageForm onSubmit={addNewMessage}/>
        </div>
    )
}



export default Dialogs;