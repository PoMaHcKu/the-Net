const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                "text": state.newMessageText,
                "id": 2,
                "authorId": 3
            };
            if (newMessage.text === '') {
                return;
            }
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.updateTextNewMessage;
            return state;
        default:
            return state;
    }
};

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});

export const updateTextNewMessageActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    updateTextNewMessage: text,
});

export default dialogsReducer;