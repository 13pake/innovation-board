import React, { Component } from 'react';
import '../styles/CommentEditor.css';

class CommentEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newComment: {
        body: ''
      }
    };

    this.createComment = this.createComment.bind(this);
    this.handleCommentEditorBodyChange = this.handleCommentEditorBodyChange.bind(this);
    
  }

  createComment() {
    this.props.addComment({
      commentId: "commentID" + Math.floor(Math.random() * 1000000),
      author: 'Trevor R.',
      body: this.state.newComment.body,
    });
    this.setState({ 
      newComment: {  
        body: ''
      } 
    });
  }

  handleCommentEditorBodyChange(event) {
    this.setState({ newComment: { ...this.state.newComment, body: event.target.value } });
  }

  render() {
    return (
      <div className="card comment-editor">
          <div className="comment-editor-body">
          <textarea className="form-control comment-editor-input" value={this.state.newComment.body} onChange={this.handleCommentEditorBodyChange} />
          <button className="btn btn-primary comment-editor-button" onClick={this.createComment}>Post</button>
        </div>
      </div>
    )
  }
}

export default CommentEditor;
