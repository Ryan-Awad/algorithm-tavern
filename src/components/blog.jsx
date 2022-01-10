import React, { Component } from 'react';
import BlogPost from './blog-post';

class Blog extends Component {
  state = {
    blogs: [
      {id: 1, user: 'John Doe', liked: false, disliked: false, title: 'My First Blog', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt quibusdam, culpa nostrum veniam animi nulla, asperiores est obcaecati nobis dolor consectetur harum necessitatibus assumenda tempora dolorum eum autem praesentium qui?', likes: 0, dislikes: 0},
      {id: 2, user: 'Sam Woods', liked: false, disliked: false, title: 'Fibonacci Sequence in O(log n) Time', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt quibusdam, culpa nostrum veniam animi nulla, asperiores est obcaecati nobis dolor consectetur harum necessitatibus assumenda tempora dolorum eum autem praesentium qui?', likes: 0, dislikes: 0},
      {id: 3, user: 'Lisa Smith', liked: false, disliked: false, title: 'Graph Theory', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt quibusdam, culpa nostrum veniam animi nulla, asperiores est obcaecati nobis dolor consectetur harum necessitatibus assumenda tempora dolorum eum autem praesentium qui?', likes: 0, dislikes: 0},
      {id: 4, user: 'Madeline Rogers', liked: false, disliked: false, title: 'I Hate Dynamic Programming', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt quibusdam, culpa nostrum veniam animi nulla, asperiores est obcaecati nobis dolor consectetur harum necessitatibus assumenda tempora dolorum eum autem praesentium qui?', likes: 0, dislikes: 0}
    ]
  }

  handleFeedback = (type, id, feedbackGiven) => {
    // types:   0 = like   1 = dislike
    let blogs = this.state.blogs.map(blog => {
      let newBlog = {...blog}; // makes a copy of the current blog object
      if (blog.id === id) {
        if (type === 0) {
          newBlog.likes += !feedbackGiven ? 1 : -1;
          newBlog.liked = !feedbackGiven;
          newBlog.disliked = false;
        } else {
          newBlog.dislikes += !feedbackGiven ? 1 : -1;
          newBlog.disliked = !feedbackGiven;
          newBlog.liked = false;
        }
      }
      return newBlog;
    });
    this.setState({blogs: blogs});
  }

  render() {
    return (
      <React.Fragment>
        {this.state.blogs.map(blog =>
          <BlogPost 
            blog={blog}
            key={blog.id}
            onFeedback={this.handleFeedback}
          >
            {blog.body}
          </BlogPost>
        )}
      </React.Fragment>
    );
  }
}
 
export default Blog;
