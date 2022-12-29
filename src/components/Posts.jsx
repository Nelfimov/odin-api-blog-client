import React, {useEffect, useState} from 'react';
import Loader from './Loader';

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
      { loading ?
        <Loader /> :
          posts.map((post) =>
            <div className="post-container" key={post._id}>
              <div className="title">{post.title}</div>
              <div className="text">{post.text}</div>
              <div className="details">{post.date.toString()}</div>
            </div>)
      }
    </div>
  );
};

export default Posts;
