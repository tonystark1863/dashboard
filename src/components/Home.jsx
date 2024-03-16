import React, { useEffect, useState } from 'react';
import styles from './page.module.css';
import Post from './Post';
import Search from './Search'; 

const fetchData = async (API, setDat) => {
  try {
    const res = await fetch(API);
    const data = await res.json();
    setDat(data);
  } catch (error) {
    console.log("error fetching post/user data", error);
  }
};

const Home = () => {
  const [posts, setPosts] = useState(null);
  const [photos, setPhotos] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchData(`https://jsonplaceholder.typicode.com/posts?_limit=20`, setPosts);
    fetchData(`https://jsonplaceholder.typicode.com/photos?_limit=20`, setPhotos);
  }, []);

  const combinedData = posts && photos ? posts.map(post => {
    const photo = photos.find(photo => photo.id === post.id);
    return { ...post, photo }
  }) : [];

  const filteredData = combinedData.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.container}>

      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {filteredData.map((data) => (
        <Post data={data} key={data.id} />
      ))}
    </div>
  );
}

export default Home;
