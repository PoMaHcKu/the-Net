import {rerender} from "./render";

let state = {
    profileState: {
        posts: [
            {"message": "Hello! How are you?", "id": 1, "countLike": 11},
            {"message": "It's my first react!", "id": 2, "countLike": 8},
            {"message": "How is your react?", "id": 3, "countLike": 7},
            {"message": "Great jobs!!!", "id": 4, "countLike": 117}
        ],
        newPostText: "",
    },
    dialogsState: {
        dialogs: [
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
        ],
        messages: [
            {"text": "Hi", "id": 1, "authorId": 2},
            {"text": "Hello", "id": 2, "authorId": 3},
            {"text": "What are you doing?", "id": 2, "authorId": 2},
            {"text": "Are learning react?", "id": 2, "authorId": 2},
            {"text": "Yes", "id": 3, "authorId": 3},
            {"text": "How is your react?", "id": 3, "authorId": 3},
            {"text": "It's fine, thanks. What have you written?", "id": 4, "authorId": 2}
        ],
        currentMessage: ''
    },
    navbar: {
        friends: [
            {
                "firstName": "Anton",
                "lastName": "Papadon",
                "age": 26,
                "avatar": "https://i.ytimg.com/vi/EbWczeyk2w0/maxresdefault.jpg"
            },
            {
                "firstName": "Vika",
                "lastName": "Masyanya",
                "age": 28,
                "avatar": "https://cdn.vegaoo.co.uk/images/rep_art/gra/236/2/236239/wich-costume-for-girls.jpg"
            },
            {
                "firstName": "Ilia",
                "lastName": "Sava",
                "age": 24,
                "avatar": "https://www.1gai.ru/uploads/posts/2016-09/1474538339_mercedes-maybach-s600-pullman-guard.jpg"
            }
        ]
    }
};

export let addNewPost = () => {
    let newPost = {
        message: state.profileState.newPostText,
        id: 5,
        countLike: 0
    };
    state.profileState.posts.push(newPost);
    state.profileState.newPostText = '';
    rerenderAndSendFunctions();
};

export let newPostTextUpdate = (text) => {
    state.profileState.newPostText = text;
    rerenderAndSendFunctions();
};

export let addNewMessage= () => {
    let newMessage = {
        "text": state.dialogsState.currentMessage,
        "id": 2,
        "authorId": 3
    };
    state.dialogsState.messages.push(newMessage);
    state.dialogsState.currentMessage = '';
    rerenderAndSendFunctions();
};

export let updateTextCurrentMessage = (text) => {
    state.dialogsState.currentMessage = text;
    rerenderAndSendFunctions();
};

let rerenderAndSendFunctions = () => {
  rerender(state, addNewPost, newPostTextUpdate, addNewMessage, updateTextCurrentMessage);
};

export default state;