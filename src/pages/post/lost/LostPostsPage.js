import React, { useEffect, useState } from 'react';
import { getLostPosts } from '../posts';
import './LostPostsPage.css';

const LostPostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getLostPosts();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="lost-posts-page">
      <h1>물건을 잃어버렸어요</h1>
      {posts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <h2>{post.productName}</h2>
              <p>{post.content}</p>
              <p>분류: {post.ProductClassifyName}</p>
              <p>습득 장소: {post.foundPlace}</p>
              <p>습득 주소: {post.adress}</p>
              <p>작성일: {new Date(post.date).toLocaleDateString()}</p>
              <p>조회수: {post.views}</p>
              {post.imgPath && <img src={post.imgPath} alt={post.productName} />}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LostPostsPage;
