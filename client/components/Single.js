import React from 'react';
import Photo from './Photo';
import Comments from './Comments';
// import comments

const Single = React.createClass({
  render() {
    const { posts, params, comments } = this.props;

    // Index of the post
    const i = posts.findIndex((post) => post.code === params.postId);
    const post = posts[i];

    const postComments = comments[params.postId] || [];

    // Get us the post
    return (
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props} />
        <Comments postComments={postComments} {...this.props} />
      </div>
    );
  }
});

export default Single;
