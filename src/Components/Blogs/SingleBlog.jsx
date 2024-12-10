import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './SingleBlog.css';

const SingleBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch blog');
        }
        const data = await response.json();
        setBlog(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="single-blog-container">
      <div className="single-blog-card">
        <h1 className="blog-title">{blog.title}</h1>
        <p className="blog-body">{blog.body}</p>
        <div className="blog-footer">
          <p>Written by: <span className="author">Author Name</span></p>
          <p>Posted on: <span className="date">Nov 29, 2024</span></p>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
