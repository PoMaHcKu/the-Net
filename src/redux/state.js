const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
    _state: {
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
            newMessageText: ""
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
    },
    _callSubscriber() {
        console.log("State changed");
    },

    getState() {
        return this._state;
    },
    subscriber(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {  /*action have to has prop "type: 'ADD-POST'*/
        if (action.type === 'ADD-POST') {
            let newPost = {
                message: this._state.profileState.newPostText,
                id: 5,
                countLike: 0
            };
            if (newPost.message === '') {
                return;
            }
            this._state.profileState.posts.push(newPost);
            this._state.profileState.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profileState.newPostText = action.updateTextNewPost;
            this._callSubscriber(this._state);
        } else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                "text": this._state.dialogsState.newMessageText,
                "id": 2,
                "authorId": 3
            };
            if (newMessage.text === '') {
                return;
            }
            this._state.dialogsState.messages.push(newMessage);
            this._state.dialogsState.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsState.newMessageText = action.updateTextNewMessage;
            this._callSubscriber(this._state);
        }
    },
};

export const addPostActionCreator = () => ({type: ADD_POST});

export const newPostUpdateTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    updateTextNewPost: text,
});

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});

export const updateTextNewMessageActionCreator = (text) => ({
        type: UPDATE_NEW_MESSAGE_TEXT,
        updateTextNewMessage: text,
    });

export default store;