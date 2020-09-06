import React from 'react';
import './Comments.css';

const Comments = (props) => {
    const {name, body, email} = props.comment;
    // console.log(props);
    return (
        <div>
            <div className="comments-container">
                <h5>{name}</h5>
                <p><small>{email}</small></p>
                <p><small>{body}</small></p>
            </div>
        </div>
    );
};

export default Comments;