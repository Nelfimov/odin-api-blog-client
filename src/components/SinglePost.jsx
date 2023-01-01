import React, {useEffect, useState, useRef} from 'react';
import {useParams} from 'react-router-dom';
import Loader from './Loader';
import useNotification from './Notification/useNotification';
import '../styles/SinglePost.css';

const SinglePost = () => {
  const {postID} = useParams();
  const [post, setPost] = useState();
  const [comments, setComments] = useState([]);
  const [loadingPost, setLoadingPost] = useState(true);
  const [loadingComments, setLoadingComments] = useState(true);
  const commentText = useRef();
  const notification = useNotification();

  useEffect(() => {
    getPost();
    getComments();
  }, []);

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
    setLoadingComments(true);
    const response = await fetch(
        `http://localhost:2000/posts/${postID}/comments/`,
    );
    const data = await response.json();
    data.sort((a, b) => {
      if (a.date > b.date) return -1;
      if (b.date > a.date) return 1;
      return 0;
    });
    setComments(data);
    setLoadingComments(false);
  }

  /**
   * Create comment from textarea
   * @param {shape} e Event
   */
  async function createComment(e) {
    e.preventDefault();

    try {
      fetch(
          `http://localhost:2000/posts/${postID}/comments/`,
          {
            method: 'POST',
            headers: new Headers({
              'Authorization': JSON.parse(localStorage.getItem('token')),
              'Content-Type': 'application/json',
            }),
            body: JSON.stringify({
              text: commentText.current.value,
            }),
          },
      );
      notification.open('Your comment has been added');
      commentText.current.value = '';
      getComments();
    } catch (err) {
      console.log(err);
    }
  }

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

      <form onSubmit={createComment}>
        <textarea
          name="comment"
          id="comment"
          cols="10" rows="5"
          placeholder="Enter your comment"
          ref={commentText}>
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
              <div className="details">
                <p>{comment.author.username}</p>
                <p>{new Date(comment.date).toLocaleDateString()}</p>
              </div>
            </div>,
          )
        }
      </div>

    </div>
  );
};

export default SinglePost;
