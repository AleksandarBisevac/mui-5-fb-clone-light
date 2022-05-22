import React from 'react';
import { AvatarGroup, Box, ImageList, Typography } from '@mui/material';
import FriendAvatar from './FriendAvatar';
import ImageItem from './ImageItem';
import { getActiveFriends } from '../api/friends';
import { getAllImages } from '../api/images';

const Rightbar = () => {
  const [activeFriends, setActiveFriends] = React.useState([]);
  const [imageList, setImageList] = React.useState([]);

  //private
  const handleGetActiveFriends = async () => {
    let response = await getActiveFriends();
    if (response) setActiveFriends(response);
  };

  const handleGetImages = async () => {
    let response = await getAllImages();
    setImageList(response);
  };

  //lifecycle hooks

  React.useEffect(() => {
    handleGetActiveFriends();
    handleGetImages();
  }, []);

  return (
    <Box flex={2} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Box position='fixed'>
        <Typography variant='h6' fontWeight={100}>
          Online Friends
        </Typography>
        {activeFriends.length ? (
          <AvatarGroup max={4} sx={{ justifyContent: 'center', m: '20px' }}>
            {activeFriends.map((actFriend) => (
              <FriendAvatar key={actFriend.id} friendAvatar={actFriend} />
            ))}
          </AvatarGroup>
        ) : null}
        <Typography variant='h6' fontWeight={100}>
          Images
        </Typography>
        {imageList.length ? (
          <ImageList
            sx={{
              height: 300,
              minWidth: 250,
            }}
            cols={2}
            gap={10}
          >
            {imageList.map((image) => (
              <ImageItem key={image.id} img={image} />
            ))}
          </ImageList>
        ) : null}
        <Typography variant='h6' fontWeight={100}>
          Latest Conversations
        </Typography>
      </Box>
    </Box>
  );
};

export default Rightbar;
