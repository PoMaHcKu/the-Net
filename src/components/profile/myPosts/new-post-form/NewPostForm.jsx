import React from 'react';
import {Field, reduxForm} from "redux-form";

let NewPostForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"newPostText"}
                       component={"textarea"}
                       rows={3}
                       maxLength={500}
                       cols={60}
                       placeholder={"What's new?"}
                />
            </div>
            <div>
                <button>Add Post</button>
            </div>
        </form>
    );
};

NewPostForm = reduxForm({form: "profileAddPostForm"})(NewPostForm);

export default NewPostForm;