import React from "react";
import s from "../ProfileInfo.module.css";

class Status extends React.Component {

    state = {
        editMode: false,
        currentStatus: "This is STATUS MOTHERFUCKER!!!"
    };

    activateEditMode() {
        this.setState({editMode: true});
    };

    deActivateEditMode() {
        this.setState({editMode: false});
    };

    setStatus(e) {
        this.setState({currentStatus: e.target.value});
    }

    render() {
        return (
            <div className={s.status} onDoubleClick={this.activateEditMode.bind(this)}>
                {this.state.editMode ?
                    <div>
                        <input value={this.state.currentStatus}
                               autoFocus={true}
                               onBlur={this.deActivateEditMode.bind(this)}
                               onChange={this.setStatus.bind(this)}
                        />
                    </div> :
                    <div>
                        <span>{this.state.currentStatus}</span>
                    </div>
                }
            </div>
        )
    }
}

export default Status;