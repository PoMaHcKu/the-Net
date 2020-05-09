import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Dialog from "./components/dialogs/dialogItem/dialog/Dialog";
import Message from "./components/dialogs/messageItem/message/Message";
import Post from "./components/profile/myPosts/Post/Post";

let postsData = [
    {"message": "Hello! How are you?", "id": 1, "countLike": 11},
    {"message": "It's my first react!", "id": 2, "countLike": 8},
    {"message": "How is your react?", "id": 3, "countLike": 7},
    {"message": "Great jobs!!!", "id": 4, "countLike": 117}
];

let posts = postsData.map(
    (post) => <Post message={post.message} countLike={post.countLike}/>
);


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
    {"text": "Thanks, what about you?", "id": 4}
];

let messages = messagesData.map(
    (message) => <Message text={message.text}/>
);

ReactDOM.render(
    <App posts={posts}
         dialogs={dialogs}
         messages={messages}/>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
