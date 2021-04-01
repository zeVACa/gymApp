import { AppBar, Container, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const Navigation = () => {
  return (
    <AppBar>
      <Container>
        <Toolbar>
          <IconButton edge="start" aria-label="menu" color="inherit">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Gym App</Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navigation;
