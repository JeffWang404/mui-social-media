// import { Home } from '@mui/icons-material';
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import React from 'react';

const ListItems = ({ icon, text, url }) => {
  return (
    <ListItem disablePadding>
      <ListItemButton component="a" href={url}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );
};

export default ListItems;
