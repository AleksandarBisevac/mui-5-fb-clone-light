import { ImageListItem } from '@mui/material';
import React from 'react';

const ImageItem = ({ img }) => {
  const { image, title } = img;
  return (
    <ImageListItem>
      <img
        src={`${image}?w=161&fit=crop&auto=format`}
        srcSet={`${image}?w=161&fit=crop&auto=format&dpr=2 2x`}
        alt={title}
        loading='lazy'
        style={{ objectFit: 'cover' }}
      />
    </ImageListItem>
  );
};

export default ImageItem;
