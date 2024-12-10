import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Blog.css'

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 12;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        setPosts(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(posts.length / postsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div>
      <h1 className="header" style={{color:"white"}}>Latest Posts</h1>
      <div className="posts-container">
        {currentPosts.map(post => (
          <div key={post.id} className="post-card">
            
            <h3 className="post-title">
                <Link to={`/blog/${post.id}`} className="blog-link">
                    {post.title}
                </Link>
            </h3>
            <p className="post-body">{post.body}</p>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button 
          onClick={handlePrevious} 
          disabled={currentPage === 1}
          className="pagination-button"
        >
          Previous
        </button>
        <span className="page-info" style={{color:"white"}}>
          Page {currentPage} of {totalPages}
        </span>
        <button 
          onClick={handleNext} 
          disabled={currentPage === totalPages}
          className="pagination-button"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Posts;
