const ADD_MESSAGE = 'ADD-MESSAGE';

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
        {text: "What are you doing?", id: 3, authorId: 2},
        {text: "Are learning react?", id: 4, authorId: 2},
        {text: "Yes", id: 5, authorId: 3},
        {text: "How is your react?", id: 6, authorId: 3},
        {text: "It's fine, thanks. What have you written?", id: 7, authorId: 2}
    ],
};


const dialogsReducer = (state = defaultState, action) => {

    switch (action.type) {
        case ADD_MESSAGE: {
            if (action.newMessageText === '') {
                return state;
            }
            return {
                ...state,
                messages: [
                    ...state.messages,
                    {
                        text: action.newMessageText,
                        id: state.messages.length + 1,
                        authorId: 3
                    }
                ],
            };
        }
        default:
            return state;
    }
};

export const addMessage = (newMessageText) => ({
    type: ADD_MESSAGE,
    newMessageText
});

export default dialogsReducer;