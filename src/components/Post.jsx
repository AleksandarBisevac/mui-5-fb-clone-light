import React from 'react';
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { FavoriteBorder } from '@mui/icons-material';
import moment from 'moment';

const Post = ({ post }) => {
  const { id, username, date, image, avatarColor, content } = post;
  return (
    <Card sx={{ maxWidth: '100%', mb: '50px' }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{
              bgcolor: avatarColor || 'white',
              color: avatarColor === 'white' ? 'black' : 'white',
              border: '1px solid #eee',
            }}
            aria-label='recipe'
          >
            {username.slice(0, 1)}
          </Avatar>
        }
        action={
          <IconButton aria-label='settings'>
            <MoreVertIcon />
          </IconButton>
        }
        title={username}
        subheader={moment(date).format('DD.MM.YYYY')}
      />
      <CardMedia
        component='img'
        height='20%'
        sx={{ maxHeight: 700, objectFit: 'cover' }}
        src={image}
        alt='user post'
      />
      <CardContent>
        <Typography variant='body2' color='text.secondary'>
          {content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Checkbox
          icon={<FavoriteBorder />}
          checkedIcon={<FavoriteIcon sx={{ color: 'red' }} />}
        />
        <IconButton aria-label='share'>
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
