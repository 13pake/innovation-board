import React, { Component } from 'react';
import '../styles/PostEditor.css';

class PostEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newPost: {
        title: '',
        body: ''
      }
    };

    this.createPost = this.createPost.bind(this);
    this.handlePostEditorTitleChange = this.handlePostEditorTitleChange.bind(this);
    this.handlePostEditorBodyChange = this.handlePostEditorBodyChange.bind(this);

  }

  createPost() {
    this.props.addPost({
      postId: "postID" + Math.floor(Math.random() * 1000000), // LOL what the
      author: 'Trevor R.',
      title: this.state.newPost.title,
      body: this.state.newPost.body,
      timestamp: new Date(),
      rating: 0,
      comments: {}
    });
    this.setState({
      newPost: {
        title: '',
        body: ''
      }
    });
  }

  handlePostEditorTitleChange(event) {
    this.setState({ newPost: { ...this.state.newPost, title: event.target.value } });
  }

  handlePostEditorBodyChange(event) {
    this.setState({ newPost: { ...this.state.newPost, body: event.target.value } });
  }

  render() {
    return (
      <div className="card post-editor">
        <h5 className="card-header">New idea</h5>
        <div className="editor-body">
          Subject <input className="form-control post-editor-input" required value={this.state.newPost.title} onChange={this.handlePostEditorTitleChange} style={{"marginBottom":"1em"}}/>
          Body <textarea className="form-control post-editor-input" required rows="4" value={this.state.newPost.body} onChange={this.handlePostEditorBodyChange} />
          <button className="btn btn-primary post-editor-button" onClick={this.createPost}>Post</button>
        </div>
      </div>
    )
  }
}

export default PostEditor;
