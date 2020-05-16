import {addMessage, updateTextNewMessage} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsState.dialogs,
        messages: state.dialogsState.messages,
        newMessageText: state.dialogsState.newMessageText,
    }
};

let mapDispatchToProps = {
        addMessage,
        updateTextNewMessage
};

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;