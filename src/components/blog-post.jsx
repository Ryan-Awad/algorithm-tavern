import React, { Component } from 'react';

class BlogPost extends Component {
  state = {
    liked: this.props.blog.liked,
    disliked: this.props.blog.disliked
  }

  componentDidUpdate(prevProps) {
    const {liked, disliked} = this.props.blog;
    if (prevProps.blog.liked !== liked || prevProps.blog.disliked !== disliked) {
      this.setState({
        liked: liked,
        disliked: disliked
      });
    }
  }

  render() {
    const {id, user, title, likes, dislikes} = this.props.blog;
    const {liked, disliked} = this.state;

    return (
      <div>
        <div className='card m-2 w-50'>
          <div className='card-header position-relative'>{user}</div>
          <div className='card-body'>
            <h5 className='card-title'>{title}</h5>
            <p className='card-text'>
              {this.props.children}
            </p>
            <button 
              className={'btn btn-primary btn-sm m-2 ' + (disliked ? 'disabled' : '')}
              onClick={() => this.props.onFeedback(0, id, liked)}
            >
              Like <span className="badge bg-light text-primary">{likes}</span>
            </button>

            <button 
              className={'btn btn-secondary btn-sm m-2 ' + (liked ? 'disabled' : '')}
              onClick={() => this.props.onFeedback(1, id, disliked)}
            >
              Dislike <span className="badge bg-light text-secondary">{dislikes}</span>
            </button>
          </div>
        </div>
        <br></br>
      </div>
    );
  }
}

// 'btn btn-primary btn-sm m-2'
// 'btn btn-secondary btn-sm m-2'

export default BlogPost;
