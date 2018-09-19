import React from 'react';
import '../styles/Comment.css';


const Comment = (props) => (
  <div className="card comment-body">
    <div className="card-block">
      <div className="card-text">
        {props.comment.body} • <em style={{"fontSize":"0.9em"}}>{props.comment.author}</em>
      </div>
    </div>
  </div>
);

export default Comment;
