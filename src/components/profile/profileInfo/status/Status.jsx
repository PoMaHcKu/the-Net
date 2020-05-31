import React from "react";
import s from "../ProfileInfo.module.css";

class Status extends React.Component {

    state = {
        editMode: false,
        status: this.props.status.text
    };

    activateEditMode = () => {
        this.setState({editMode: true});
    };

    deActivateEditMode = () => {
        this.setState({editMode: false});
        this.props.status.updateStatus(this.state.status);
    };

    updateStatus = (e) => {
        let status = e.target.value;
        this.setState({status: status});
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status.text !== this.props.status.text) {
            this.setState({
                status: this.props.status.text,
            })
            this.render();
        }
    };

    render() {
        return (
            <div className={s.status} onDoubleClick={this.activateEditMode}>
                {this.state.editMode ?
                    <div>
                        <input value={this.state.status}
                               autoFocus={true}
                               onBlur={this.deActivateEditMode}
                               onChange={this.updateStatus}
                        />
                    </div> :
                    <div>
                        <span>{this.state.status || "Double click to update status here..."}</span>
                    </div>
                }
            </div>
        )
    }
}

export default Status;