import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

const PostForm = () => {
  const { id } = useParams();
  const history = useHistory();
  const [form, setForm] = useState({
    ProductClassifyName: '',
    content: '',
    productName: '',
    foundPlace: '',
    adress: '',
    imgPath: '',
    postType: '',
    shown: true
  });

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:8080/posts/${id}`)
        .then(response => setForm(response.data))
        .catch(error => console.error('Error fetching post:', error));
    }
  }, [id]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      axios.put(`http://localhost:8080/posts/${id}`, form)
        .then(() => history.push(`/posts/${id}`))
        .catch(error => console.error('Error updating post:', error));
    } else {
      axios.post('http://localhost:8080/posts', form)
        .then(() => history.push('/'))
        .catch(error => console.error('Error creating post:', error));
    }
  };

  return (
    <div>
      <h1>{id ? '게시글 수정' : '게시글 작성'}</h1>
      <form onSubmit={handleSubmit}>
        <input name="ProductClassifyName" value={form.ProductClassifyName} onChange={handleChange} placeholder="상품분류" required />
        <textarea name="content" value={form.content} onChange={handleChange} placeholder="내용" required></textarea>
        <input name="productName" value={form.productName} onChange={handleChange} placeholder="상품명" required />
        <input name="foundPlace" value={form.foundPlace} onChange={handleChange} placeholder="습득장소" required />
        <input name="adress" value={form.adress} onChange={handleChange} placeholder="주소" required />
        <input name="imgPath" value={form.imgPath} onChange={handleChange} placeholder="이미지 경로" />
        <select name="postType" value={form.postType} onChange={handleChange} required>
          <option value="">게시글 유형 선택</option>
          <option value="LOST">잃어버렸어요</option>
          <option value="FOUND">물건을 주웠어요</option>
        </select>
        <button type="submit">{id ? '수정' : '작성'}</button>
      </form>
    </div>
  );
};

export default PostForm;
