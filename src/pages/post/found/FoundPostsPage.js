// src/pages/foundPosts/FoundPostsPage.js

import React, { useEffect, useState } from 'react';
import { getFoundPosts } from '../posts';
import './FoundPostsPage.css';

const FoundPostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getFoundPosts();
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
    <div className="found-posts-page">
      <h1>물건을 주웠어요</h1>
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

export default FoundPostsPage;