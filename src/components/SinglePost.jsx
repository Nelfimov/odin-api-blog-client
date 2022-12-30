import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import Loader from './Loader';
import '../styles/SinglePost.css';

const SinglePost = () => {
  const {postID} = useParams();
  const [post, setPost] = useState();
  const [comments, setComments] = useState([]);
  const [loadingPost, setLoadingPost] = useState(true);
  const [loadingComments, setLoadingComments] = useState(true);

  /**
   * Get single post by ID from URL param
   */
  async function getPost() {
    const response = await fetch(`http://localhost:2000/posts/${postID}/`);
    const data = await response.json();
    setPost(data);
    setLoadingPost(false);
  }

  /**
   * Get all comments to current post
   */
  async function getComments() {
    const response = await fetch(
        `http://localhost:2000/posts/${postID}/comments/`,
    );
    const data = await response.json();
    setComments(data);
    setLoadingComments(false);
  }

  useEffect(() => {
    getPost();
    getComments();
  }, []);

  return (
    <div className="container">

      <div className="post">
        {
          loadingPost ?
          <Loader /> :
          <div className="single-post-container">
            <h2>{post.title}</h2>
            {post.text}
          </div>
        }
      </div>

      <form>
        <textarea
          name="comment"
          id="comment"
          cols="10" rows="5"
          placeholder="Enter your comment">
        </textarea>
        <button>Submit</button>
      </form>

      <div className="comments">
        {
          loadingComments ?
          <Loader /> :
          comments.map((comment) =>
            <div key={comment._id} className="comment-container">
              <p>{comment.text}</p>
              <p>{comment.author.username}</p>
            </div>,
          )
        }
      </div>

    </div>
  );
};

export default SinglePost;
