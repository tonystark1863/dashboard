export const ADD_LIKE = 'ADD_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE'; 

export const SAVE_POST = 'SAVE_POST';
export const UNLIKE_POST = 'UNLIKE_POST';
export const UNSAVE_POST = 'UNSAVE_POST';

export const unsavePost = (postId) => ({
  type: UNSAVE_POST,
  payload: postId,
});

export const addLike = (postId) => ({
  type: ADD_LIKE,
  payload: postId,
});

export const removeLike = (postId) => ({
  type: REMOVE_LIKE,
  payload: postId,
});

export const unlikePost = (postId) => ({
  type: UNLIKE_POST,
  payload: postId,
});

export const savePost = (post) => ({
  type: SAVE_POST,
  payload: post,
});
