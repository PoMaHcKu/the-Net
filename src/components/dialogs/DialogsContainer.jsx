import {addMessage} from "../../redux/dialogsReducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import Dialogs from "./Dialogs";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsState.dialogs,
        messages: state.dialogsState.messages,
        newMessageText: state.dialogsState.newMessageText,
    }
};

let mapDispatchToProps = {
    addMessage,
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);