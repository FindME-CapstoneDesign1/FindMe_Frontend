import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

const PostDetail = () => {
  const { id } = useParams();
  const history = useHistory();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8080/posts/${id}`)
      .then(response => setPost(response.data))
      .catch(error => console.error('Error fetching post:', error));
  }, [id]);

  const handleDelete = () => {
    axios.delete(`http://localhost:8080/posts/${id}`)
      .then(() => history.push('/'))
      .catch(error => console.error('Error deleting post:', error));
  };

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h1>{post.productName}</h1>
      <p>{post.content}</p>
      <button onClick={() => history.push(`/edit/${post.id}`)}>수정</button>
      <button onClick={handleDelete}>삭제</button>
      <button onClick={() => history.push('/')}>목록으로</button>
    </div>
  );
};

export default PostDetail;
