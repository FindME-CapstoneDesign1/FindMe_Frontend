import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './LostPostsPage.css';

const LostPostsPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchLostPosts();
  }, []);

  const fetchLostPosts = async () => {
    const response = await axios.get('http://localhost:8080/posts/lost');
    setPosts(response.data);
  };

  return (
    <div className="posts-page">
      <h1>분실물 게시글</h1>
      <table className="posts-table">
        <thead>
          <tr>
            <th>상품 분류</th>
            <th>내용</th>
            <th>상품명</th>
            <th>습득 장소</th>
            <th>습득 주소지</th>
            <th>작성일자</th>
            <th>조회수</th>
            <th>이미지</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(post => (
            <tr key={post.id}>
              <td>{post.ProductClassifyName}</td>
              <td>{post.content}</td>
              <td>{post.productName}</td>
              <td>{post.foundPlace}</td>
              <td>{post.adress}</td>
              <td>{new Date(post.date).toLocaleDateString()}</td>
              <td>{post.views}</td>
              <td>
                {post.imgPath && (
                  <img src={post.imgPath} alt={post.productName} style={{ width: '50px' }} />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LostPostsPage;
