import React, { Component } from 'react';
import Post from '../../Post/components/Post';
import PostEditor from '../../PostEditor/components/PostEditor';
import '../styles/ThreadDisplay.css';
import data from '../../dummy_database/data.json';

class ThreadDisplay extends Component {
  constructor(props) {
    super(props);

    this.addPost = this.addPost.bind(this);

    const posts = []; // posts array
    for (let postId in data.posts) {
      posts.push({ ...data.posts[postId], postId });
    }
    posts.sort((a,b) => a.rating < b.rating); // initial sort for top rating

    const comments = []; // comments array
    for (let commentId in data.comments) {
      comments.push({ ...data.posts[commentId], commentId });
    }

    this.handleTopRatedButtonPress = this.handleTopRatedButtonPress.bind(this);
    this.handleLatestButtonPress = this.handleLatestButtonPress.bind(this);
    this.handleInProgressButtonPress = this.handleInProgressButtonPress.bind(this);
    this.handleCompletedButtonPress = this.handleCompletedButtonPress.bind(this);

    this.state = {
      posts,
      comments,
      selectedButton: "topRated",
      topRated: "btn btn-primary",
      latest: "btn btn-outline-primary",
      inProgress: "btn btn-outline-warning",
      completed: "btn btn-outline-success"
    }
  }

  handleTopRatedButtonPress() {
    const posts = this.state.posts;
    posts.sort((a,b) => a.rating < b.rating);
    this.setState({
      posts,
      selectedButton: "topRated",
      topRated: "btn btn-primary",
      latest: "btn btn-outline-primary",
      inProgress: "btn btn-outline-warning",
      completed: "btn btn-outline-success"
    });
  }

  handleLatestButtonPress() {
    const posts = this.state.posts;
    posts.sort((a,b) => a.timestamp < b.timestamp);
    this.setState({
      selectedButton: "latest",
      topRated: "btn btn-outline-primary",
      latest: "btn btn-primary",
      inProgress: "btn btn-outline-warning",
      completed: "btn btn-outline-success"
    });
  }

  handleInProgressButtonPress() {    
    const posts = this.state.posts;
    posts.sort((a,b) => b.status === "inProgress");
    this.setState({
      posts,
      selectedButton: "inProgress",
      topRated: "btn btn-outline-primary",
      latest: "btn btn-outline-primary",
      inProgress: "btn btn-warning",
      completed: "btn btn-outline-success"
    });
  }

  handleCompletedButtonPress() {
    const posts = this.state.posts;
    posts.sort((a,b) => b.status === "completed");
    this.setState({
      posts,
      selectedButton: "completed",
      topRated: "btn btn-outline-primary",
      latest: "btn btn-outline-primary",
      inProgress: "btn btn-outline-warning",
      completed: "btn btn-success"
    });
  }

  // actually add new post
  addPost(newPost) {
    const posts = [...this.state.posts, newPost]; // this needs to 
    this.setState({ ...this.state, posts });
  }

  render() {
    return (
      <div>
        <div className="header">
          {"Sort by"}
          <div className="btn-group" style={{ "marginLeft": "1em" }}>
            <button type="button" className={this.state.topRated} onClick={this.handleTopRatedButtonPress}>Top Rated</button>
            <button type="button" className={this.state.latest} onClick={this.handleLatestButtonPress}>Latest</button>
            <button type="button" className={this.state.inProgress} onClick={this.handleInProgressButtonPress}>In Progress</button>
            <button type="button" className={this.state.completed} onClick={this.handleCompletedButtonPress}>Completed</button>
          </div>
        </div>
        <div>
          {
            this.state.posts.map((post) => {
              return (<Post key={post.postId} post={post} full={false}/>)
            })
          }
          <PostEditor addPost={this.addPost} />
        </div>
      </div>
    )
  }
}

export default ThreadDisplay;
