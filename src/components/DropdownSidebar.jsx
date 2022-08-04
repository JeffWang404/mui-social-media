import {
  AccountBox,
  Article,
  Brightness4,
  Group,
  Home,
  LocalGroceryStore,
  Person,
  Settings,
} from '@mui/icons-material';
import { Menu, MenuItem, Switch } from '@mui/material';
import { useState } from 'react';
import DarkModeToggle from './DarkModeToggle';
import ListItems from './ListItems';

const DropdownSidebar = ({ open, handleClose, mode, setMode }) => {
  const toggleMode = () => setMode(mode === 'light' ? 'dark' : 'light');
  return (
    <Menu
      id="dropdown-sidebar-menu"
      aria-labelledby="dropdown-sidebar-button"
      open={open}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      sx={{ position: 'fixed', top: '35px', left: '10px' }}
    >
      <MenuItem>
        <ListItems icon={<Home />} text="Home" url="#home" />
      </MenuItem>
      <MenuItem>
        <ListItems icon={<Article />} text="Pages" url="#page" />
      </MenuItem>
      <MenuItem>
        <ListItems icon={<Group />} text="Groups" url="#groups" />
      </MenuItem>
      <MenuItem>
        <ListItems
          icon={<LocalGroceryStore />}
          text="Marketplace"
          url="#marketplace"
        />
      </MenuItem>
      <MenuItem>
        <ListItems icon={<Person />} text="Friends" url="#friends" />
      </MenuItem>
      <MenuItem>
        <ListItems icon={<Settings />} text="Settings" url="#settings" />
      </MenuItem>
      <MenuItem>
        <ListItems icon={<AccountBox />} text="Profile" url="#profile" />
      </MenuItem>
      <MenuItem>
        <DarkModeToggle
          modeIcon={<Brightness4 />}
          toggleIcon={<Switch onChange={toggleMode} />}
        />
      </MenuItem>
    </Menu>
  );
};

export default DropdownSidebar;
