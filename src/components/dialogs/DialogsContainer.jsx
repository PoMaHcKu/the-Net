import {addMessageActionCreator, updateTextNewMessageActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsState.dialogs,
        messages: state.dialogsState.messages,
        newMessageText: state.dialogsState.newMessageText,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            let action = addMessageActionCreator();
            dispatch(action);
        },
        updateTextNewMessage: (text) => {
            let action = updateTextNewMessageActionCreator(text);
            dispatch(action);
        }
    }
};

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;