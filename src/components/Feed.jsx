import React from 'react';
import { Box } from '@mui/material';
import Post from './Post';
//api
import { getAllPosts } from '../api/posts';

const Feed = () => {
  const [posts, setPosts] = React.useState([]);

  //private
  const getPosts = async () => {
    let response = await getAllPosts();
    setPosts(response);
  };

  React.useEffect(() => {
    getPosts();
  }, []);

  return (
    <Box flex={4} p={2}>
      {posts.length
        ? posts.map((post) => <Post key={post.id} post={post} />)
        : null}
    </Box>
  );
};

export default Feed;
