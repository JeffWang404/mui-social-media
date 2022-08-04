import { Box } from '@mui/material';
import Post from './Post';

const Feed = () => {
  const POSTS = [
    {
      id: 1,
      title: 'Tina Miller',
      subheader: '14 July, 2022',
      image:
        'https://images.unsplash.com/photo-1518855706573-84de4022b69b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
      content: 'What a lovely day in the south coast!',
      avatarColor: 'purple',
    },
    {
      id: 2,
      title: 'Bella Cooper',
      subheader: '16 July, 2022',
      image:
        'https://images.unsplash.com/photo-1522199710521-72d69614c702?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
      content: 'Pack up and look forward to my next journey.',
      avatarColor: 'steelblue',
    },
    {
      id: 3,
      title: 'Chris Paul',
      subheader: '21 July, 2022',
      image:
        'https://images.unsplash.com/photo-1440778303588-435521a205bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      content: 'Reading in the sunshine is so great!',
      avatarColor: 'green',
    },
    {
      id: 4,
      title: 'James Turner',
      subheader: '1 August, 2022',
      image:
        'https://images.unsplash.com/photo-1530250418330-cb2c35da5277?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      content: 'Love this photography trick!',
      avatarColor: 'orange',
    },
  ];

  return (
    <Box flex={4} padding={{ xs: 0, md: 2 }} sx={{ minWidth: '350px' }}>
      {POSTS.map(({ id, ...otherProps }) => (
        <Post key={id} {...otherProps} />
      ))}
    </Box>
  );
};

export default Feed;
