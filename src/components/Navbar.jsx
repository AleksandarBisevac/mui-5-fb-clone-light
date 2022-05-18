import React from 'react';
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from '@mui/material';
import InterestsIcon from '@mui/icons-material/Interests';
import EmailIcon from '@mui/icons-material/Email';
import { Notifications } from '@mui/icons-material';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
}));

const Search = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%',
}));

const Icons = styled(Box)(({ theme }) => ({
  display: 'none',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '20px',
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
  },
}));
const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));

const Navbar = () => {
  const [openMenu, setOpenMenu] = React.useState(false);

  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h4' sx={{ display: { xs: 'none', sm: 'block' } }}>
          DEV
        </Typography>
        <InterestsIcon sx={{ display: { xs: 'block', sm: 'none' } }} />
        <Search>
          <InputBase placeholder='search...' />
        </Search>
        <Icons>
          <Badge badgeContent={4} color='error'>
            <EmailIcon />
          </Badge>
          <Badge badgeContent={4} color='error'>
            <Notifications />
          </Badge>
          <Avatar
            src='https://images.pexels.com/photos/2475955/pexels-photo-2475955.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            sx={{ width: 30, height: 30 }}
            onClick={(e) => setOpenMenu(true)}
          />
        </Icons>
        <UserBox onClick={(e) => setOpenMenu(true)}>
          <Avatar
            src='https://images.pexels.com/photos/2475955/pexels-photo-2475955.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            sx={{ width: 30, height: 30 }}
          />
          <Typography variant='span'>Alex Black</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id='main-menu'
        aria-labelledby='main-menu-button'
        open={openMenu}
        onClose={(e) => setOpenMenu(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My Account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
