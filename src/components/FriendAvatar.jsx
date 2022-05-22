import { Avatar } from '@mui/material';
import React from 'react';

const FriendAvatar = ({ friendAvatar }) => {
  const { name, avatar } = friendAvatar;
  return <Avatar alt={name} src={avatar} />;
};

export default FriendAvatar;
