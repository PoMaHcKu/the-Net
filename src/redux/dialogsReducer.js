const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let defaultState = {
    dialogs: [
        {
            id: 1,
            name: "Dimos Papados"
        },
        {
            id: 2,
            name: "Vika Masyanya"
        },
        {
            id: 3,
            name: "Roman ne Narkoman Param pa pam"
        },
        {
            id: 4,
            name: "Anton"
        },
        {
            id: 5,
            name: "Женек Медюхо"
        },
        {
            id: 6,
            name: "James Bond"
        }
    ],
    messages: [
        {text: "Hi", id: 1, authorId: 2},
        {text: "Hello", id: 2, authorId: 3},
        {text: "What are you doing?", id: 2, authorId: 2},
        {text: "Are learning react?", id: 2, authorId: 2},
        {text: "Yes", id: 3, authorId: 3},
        {text: "How is your react?", id: 3, authorId: 3},
        {text: "It's fine, thanks. What have you written?", id: 4, authorId: 2}
    ],
    newMessageText: ""
};


const dialogsReducer = (state = defaultState, action) => {

    switch (action.type) {
        case ADD_MESSAGE: {
            if (state.newMessageText === '') {
                return state;
            }
            return {
                ...state,
                messages: [
                    ...state.messages,
                    {
                        text: state.newMessageText,
                        id: 2,
                        authorId: 3
                    }
                ],
                newMessageText: '',
            };
        }
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.updateTextNewMessage,
            };
        default:
            return state;
    }
};

export const addMessage = () => ({type: ADD_MESSAGE});

export const updateTextNewMessage = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    updateTextNewMessage: text,
});

export default dialogsReducer;