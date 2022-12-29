import React, {useEffect, useState} from 'react';
import Loader from './Loader';
import '../styles/Posts.css';

const Posts = () => {
  const [posts, setPosts] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:2000/posts')
        .then((response) => response.json())
        .then((data) => {
          setPosts(data);
          setLoading(false);
        })
        .catch((err) => console.log(err));
  }, []);

  return (
    <div className="posts">
      <h2>All posts</h2>
      <div className="posts-container">
        { loading ?
        <Loader /> :
          posts.map((post) =>
            <div className="post-container" key={post._id}>
              <a href={'/posts/' + post._id}>
                <div className="title">{post.title}</div>
                <div className="text">{post.text}</div>
                <div className="details">
                  <span>{post.date}</span>
                  <span>{post.author.username}</span>
                </div>
              </a>
            </div>)
        }
      </div>
    </div>
  );
};

export default Posts;
