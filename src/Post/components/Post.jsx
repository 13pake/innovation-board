import React, { Component } from 'react';
import '../styles/Post.css';
import { Link } from 'react-router-dom';

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      disabledUpvote: false,
      disabledDownvote: false,
      upArrowStyle: "10px solid #6c757d",
      downArrowStyle: "10px solid #6c757d",
      userVote: 0,
    }

    this.handleUpvoteClicked = this.handleUpvoteClicked.bind(this);
    this.handleDownvoteClicked = this.handleDownvoteClicked.bind(this);
  }

  handleUpvoteClicked() {
    if (!this.state.disabledUpvote) {
      // console.log('up');
      this.setState({
        disabledUpvote: true,
        disabledDownvote: false,
        upArrowStyle: "10px solid #28a745", // green
        downArrowStyle: "10px solid #6c757d", // gray
        userVote: 1
      });
    } else {
      this.setState({
        disabledUpvote: false,
        upArrowStyle: "10px solid #6c757d", // gray
        userVote: 0
      });
    }
  }

  handleDownvoteClicked() {
    if (!this.state.disabledDownvote) {
      // console.log('down');
      this.setState({
        disabledUpvote: false,
        disabledDownvote: true,
        upArrowStyle: "10px solid #6c757d", // gray
        downArrowStyle: "10px solid #dc3545", // red
        userVote: -1
      });
    } else {
      this.setState({
        disabledDownvote: false,
        downArrowStyle: "10px solid #6c757d", // gray
        userVote: 0
      });
    }
  }

  renderTag() {
    if (this.props.post.status === "inProgress") {
      return (<button className="btn btn-warning btn-sm disabled">In Progress</button>)
    } else if (this.props.post.status === "completed") {
      return (<button className="btn btn-success btn-sm disabled">Completed</button>)
    }
  }


  render() {
    const { post } = this.props;
    const { author, title, body, timestamp, rating, comments, postId } = post;
    const commentIds = Object.keys(comments);

    return (
      <div className="card post-body">
        <div className="card-block">

          <div className="vote-box">
            <div className="arrow-up" onClick={this.handleUpvoteClicked} style={{ "borderBottom": this.state.upArrowStyle }}></div>
            <h5 style={{ "marginTop": "0.5rem" }}>{rating + this.state.userVote}</h5>
            <div className="arrow-down" onClick={this.handleDownvoteClicked} style={{ "borderTop": this.state.downArrowStyle }}></div>
          </div>

          <div>
            <h5 className="card-title" style={{ "fontWeight": "bold", "marginTop": "0.5rem" }}>
              <Link to={`/post/${postId}`}>{title}</Link>
              {this.renderTag()}
            </h5>

            <div className="post-text">
              {this.props.full ? body : (body.slice(0, 256) + (body.length > 252 ? "..." : ""))}
            </div>

            <div>{/* className="card-footer" */}
              <h6 style={{ "fontStyle": "italic", "fontSize":"0.9em" }}>
                <Link to={`/post/${postId}`}>
                  {commentIds.length} {commentIds.length === 1 ? "comment " : "comments "}
                </Link>
                • posted by <b>{author}</b> on {(new Date(timestamp)).toLocaleString()}
              </h6>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Post;
