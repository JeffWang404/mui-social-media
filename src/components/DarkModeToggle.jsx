import { ListItem, ListItemButton, ListItemIcon } from '@mui/material';

const DarkModeToggle = ({ modeIcon, toggleIcon }) => {
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>{modeIcon}</ListItemIcon>
        {toggleIcon}
      </ListItemButton>
    </ListItem>
  );
};

export default DarkModeToggle;
