import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addLike, removeLike, savePost, unsavePost, unlikePost } from '../app/tools/actions';


const Post = ({ data }) => {
    const dispatch = useDispatch();
    const likedPosts = useSelector((state) => state.likedPosts);
    const savedPosts = useSelector((state) => state.savedPosts);

    const [isLiked, setIsLiked] = useState(false);
    const [isSaved, setIsSaved] = useState(false);
    const [isLoading, setIsLoading] = useState(true); 
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredPosts, setFilteredPosts] = useState([data]);
    
    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 300); 

        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        setIsLiked(likedPosts.includes(data.id));
        setIsSaved(savedPosts.some(post => post.id === data.id));
    }, [likedPosts, savedPosts]);

    useEffect(() => {
        const filtered = [data].filter(post =>
            post.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredPosts(filtered);
    }, [searchTerm, data]);

    const handleLike = () => {
        if (!isLiked) {
            dispatch(addLike(data.id));
            setIsLiked(true);
        } else {
            dispatch(removeLike(data.id));
            setIsLiked(false);
        }
    };

    const handleSave = () => {
        if (!isSaved) {
            dispatch(savePost(data));
            setIsSaved(true);
        } else {
            dispatch(unsavePost(data.id));
            setIsSaved(false);
        }
    };

    const handleUnlike = () => {
        dispatch(unlikePost(data.id));
        setIsLiked(false);
    };

    const heartIconFill = isLiked ? "red" : "#808080";
    const saveIconFill = isSaved ? "#ffffff" : "#808080"; 
    return (
        <div className={styles.item}>
            {!isLoading && (
                <>
                    {filteredPosts.map((post) => (
                        <div key={post.id}>
                            <div className={styles.Postheader}>
                                <Image src={post.photo.thumbnailUrl} width={20} height={20} alt={post.id} className={styles.thumbnailUrl} />
                                {post.title}
                            </div>
                            <div className={styles.post}><Image src={post.photo.url} width={500} height={500} alt={post.id} /></div>
                            <div className={styles.actionContainer}>
                                <div className={styles.likeButton} onClick={isLiked ? handleUnlike : handleLike}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill={heartIconFill}>
                                        <path d="M0 0h24v24H0z" fill="none" />
                                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                    </svg>
                                </div>
                                <div className={styles.saveButton} onClick={handleSave}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill={saveIconFill}>
                                        <path d="M0 0h24v24H0z" fill="none" />
                                        <path d="M16 1c-.55 0-1 .45-1 1v1H5c-1.1 0-1.99.9-1.99 2L3 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-3V2c0-.55-.45-1-1-1zm-1 16l-3-2-3 2V5h6v12z" />
                                    </svg>
                                </div>
                            </div>
                            <div className={styles.body}>{post.body}</div>
                        </div>
                    ))}
                </>
            )}
        </div>
    );
}

export default Post;
