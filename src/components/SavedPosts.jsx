import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Post from './Post';
import Search from './Search'; 
import styles from './page.module.css';

const SavedPosts = () => {
  const savedPosts = useSelector((state) => state.savedPosts);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(savedPosts);

  useEffect(() => {
    const filtered = savedPosts.filter(post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(filtered);
  }, [searchTerm, savedPosts]);

  return (
    <div className={styles.container}>
      <h2 style={{ textAlign: 'center', padding: '20px', marginTop: '30px' }}>Saved Posts</h2>
      

      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div className={styles.container}>
        {filteredPosts.map((post) => (
          <Post key={post.id} data={post} />
        ))}
      </div>
    </div>
  );
};

export default SavedPosts;
