import React from 'react';
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import {
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from '@mui/icons-material';

const StyledModal = styled(Modal)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  alignItems: 'center',
});
const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: 10,
  marginBottom: 10,
}));
const Add = () => {
  const [open, setOpen] = React.useState(false);

  const handleToggleModal = () => {
    setOpen((val) => !val);
  };
  return (
    <>
      <Tooltip
        title='Add Post'
        sx={{
          position: 'fixed',
          bottom: 20,
          left: { xs: 'calc(50% - 25px)', md: 30 },
        }}
        onClick={handleToggleModal}
      >
        <Fab color='primary' aria-label='add'>
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={handleToggleModal}
        aria-labelledby='modal-title'
      >
        <Box
          bgcolor={'background.default'}
          color={'text.primary'}
          sx={{
            maxWidth: 450,
            width: '80%',
            height: 280,
            p: 5,
            borderRadius: 5,
          }}
        >
          <Typography variant='h5' color='primary' textAlign='center'>
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              src='https://images.pexels.com/photos/2475955/pexels-photo-2475955.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
              sx={{ width: 30, height: 30 }}
            />
            <Typography fontWeight={500} variant='span'>
              John Doe
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: '100%' }}
            id='create-post-text-field'
            multiline
            rows={3}
            placeholder="What's on your mind?"
            variant='standard'
          />
          <Stack direction='row' gap={1.5} mt={2} mb={3}>
            <EmojiEmotions color='primary' />
            <Image color='secondary' />
            <VideoCameraBack color='success' />
            <PersonAdd color='warning' />
          </Stack>
          <ButtonGroup variant='contained' fullWidth>
            <Button>Post</Button>
            <Button sx={{ width: '33%' }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
