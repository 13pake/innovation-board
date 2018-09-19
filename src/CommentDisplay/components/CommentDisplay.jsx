import React, { Component } from 'react';
import Comment from '../../Comment/components/Comment';
import Post from '../../Post/components/Post';
import CommentEditor from '../../CommentEditor/components/CommentEditor';
import data from '../../dummy_database/data.json';

class CommentDisplay extends Component {
  constructor(props) {
    super(props);
    this.addComment = this.addComment.bind(this);

    // Get current post
    const postId = props.match.params.commentId;
    this.post = data.posts[postId];

    const comments = [];
    for (let commentId in data.comments) {
      if (commentId in this.post.comments)
      comments.push({...data.comments[commentId], commentId});
    }

    this.state = {
      comments
    }
  }

  // actually add new comment
  addComment(newComment) {
    const comments = [...this.state.comments, newComment]; // this needs to 
    this.setState({ ...this.state, comments });
  }

  render() {
    return (
      <div>
        <Post post={this.post} full={true}/>
        {
          this.state.comments.map((comment) => {
            return (<Comment key={comment.commentId} comment={comment} />)
          })
        }
        <CommentEditor addComment={this.addComment} />
      </div>
    )
  }
}

export default CommentDisplay;
