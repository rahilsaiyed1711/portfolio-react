import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag, User } from 'lucide-react';
import './SingleBlogPage.css';

const SingleBlogPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://portfolio-backend-production.onrender.com/api/blogs/getPost/${id}`, {
          method: 'GET',
        });

        const data = await res.json();
        if (data.status) {
          setBlog(data.data);
        } else {
          setError('Failed to load blog post');
        }
      } catch (error) {
        console.error('Error fetching blog:', error);
        setError('Error fetching blog post');
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  const handleBackClick = () => {
    navigate('/blogs');
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="single-blog-container">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading blog post...</p>
        </div>
      </div>
    );
  }

 

  if (!blog) {
    return (
      <div className="single-blog-container">
        <div className="error-message">
          <h2>Blog Not Found</h2>
          <p>The blog post you're looking for doesn't exist.</p>
          <button onClick={handleBackClick} className="back-button">
            <ArrowLeft size={20} />
            Back to Blogs
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="single-blog-container">
      {/* <button onClick={handleBackClick} className="back-button floating">
        <ArrowLeft size={20} />
        Back to Blogs
      </button> */}

      <article className="blog-article">
        <header className="blog-header">
          <div className="blog-meta">
            <span className="blog-category-badge">
              <Tag size={16} />
              {blog.category}
            </span>
            {blog.createdAt && (
              <span className="blog-date">
                <Calendar size={16} />
                {formatDate(blog.createdAt)}
              </span>
            )}
          </div>

          <h1 className="blog-title">{blog.title}</h1>
          
          {blog.author && (
            <div className="blog-author">
              <User size={16} />
              <span>By {blog.author.fullName || blog.author}</span>
            </div>
          )}
        </header>

        {blog.image && (
          <div className="blog-image-container">
            <img src={blog.image} alt={blog.title} className="blog-image" />
          </div>
        )}

        <div className="blog-content">
          {blog.description && (
            <div className="blog-description">
              <p style={{ whiteSpace: 'pre-line' }}>{blog.description}</p>
            </div>
          )}
          
          {blog.content && (
            <div className="blog-body" dangerouslySetInnerHTML={{ __html: blog.content }} />
          )}
        </div>

        <footer className="blog-footer">
          <div className="blog-tags">
            {blog.tags && blog.tags.map((tag, index) => (
              <span key={index} className="tag">#{tag}</span>
            ))}
          </div>
          
          <button onClick={handleBackClick} className="back-button">
            <ArrowLeft size={20} />
            Back to All Blogs
          </button>
        </footer>
      </article>
    </div>
  );
};

export default SingleBlogPage;