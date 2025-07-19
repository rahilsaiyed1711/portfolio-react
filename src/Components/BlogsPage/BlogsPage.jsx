import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BlogsPage.css';

const categories = ['coding', 'fitness', 'lifestyle'];

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [activeCategory, setActiveCategory] = useState('coding');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch('https://portfolio-backend-production.onrender.com/api/blogs/getAllPosts', {
          method: 'GET',
        });

        const data = await res.json();
        if (data.status) {
          setBlogs(data.data);
        } else {
          console.error('Failed to load blogs');
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  const filteredBlogs = blogs.filter(blog => blog.category === activeCategory);

  const handleBlogClick = (blogId) => {
    navigate(`/blog/${blogId}`);
  };

  return (
    <div className="blogs-container">
      <h1>My Blogs</h1>

      <div className="category-tabs">
        {categories.map(cat => (
          <button
            key={cat}
            className={activeCategory === cat ? 'active' : ''}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="blog-list">
        {filteredBlogs.length === 0 ? (
          <p>No blogs available in this category.</p>
        ) : (
          filteredBlogs.map(blog => (
            <div 
              key={blog._id} 
              className="blog-card"
              onClick={() => handleBlogClick(blog._id)}
            >
              <img src={blog.image} alt={blog.title} />
              <h2>{blog.title}</h2>
              <p>{blog.description.substring(0, 100)}...</p>
              <p className="blog-category11">{blog.category}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BlogsPage;