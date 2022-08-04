import ListItems from './ListItems';
import DarkModeToggle from './DarkModeToggle';
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
import { Box, List, Switch } from '@mui/material';

const Sidebar = ({ mode, setMode }) => {
  const toggleMode = () => setMode(mode === 'light' ? 'dark' : 'light');
  return (
    <Box
      flex={1}
      padding={2}
      sx={{ display: { xs: 'none', sm: 'block' } }}
      color={'text.primary'}
    >
      <Box position="sticky" top={80}>
        <List>
          <ListItems icon={<Home />} text="Home" url="#home" />
          <ListItems icon={<Article />} text="Pages" url="#page" />
          <ListItems icon={<Group />} text="Groups" url="#groups" />
          <ListItems
            icon={<LocalGroceryStore />}
            text="Marketplace"
            url="#marketplace"
          />
          <ListItems icon={<Person />} text="Friends" url="#friends" />
          <ListItems icon={<Settings />} text="Settings" url="#settings" />
          <ListItems icon={<AccountBox />} text="Profile" url="#profile" />

          <DarkModeToggle
            modeIcon={<Brightness4 />}
            toggleIcon={<Switch onChange={toggleMode} />}
          />
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
