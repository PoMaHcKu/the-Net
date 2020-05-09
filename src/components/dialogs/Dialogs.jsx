import React from "react";
import s from './Dialogs.module.css'
import Dialog from "./dialog/Dialog.jsx";
import Message from "./message/Message";

let Dialogs = (props) => {

    let dialogsData = [
        {
            "id": 1,
            "name": "Dimos Papados"
        },
        {
            "id": 2,
            "name": "Vika Masyanya"
        },
        {
            "id": 3,
            "name": "Roman ne Narkoman Param pa pam"
        },
        {
            "id": 4,
            "name": "Anton"
        },
        {
            "id": 5,
            "name": "Женек Медюхо"
        },
        {
            "id": 6,
            "name": "James Bond"
        }
    ];

    let dialogs = dialogsData.map(
        (dialog) => <Dialog id={dialog.id} name={dialog.name}/>
    );

    let messagesData = [
        {"text": "Hi", "id": 1},
        {"text": "Hi", "id": 2},
        {"text": "How is your react?", "id": 3},
        {"text": "Thanks, what about you?", "id": 4},
    ];

    let messages = messagesData.map(
        (message) => <Message text={message.text}/>
    );

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogs}
            </div>
            <div className={s.messages}>
                {messages}
            </div>
        </div>
    )
};

export default Dialogs;