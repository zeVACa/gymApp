import {
  AppBar,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  FormGroup,
  FormControlLabel,
  Switch,
  Button,
  Box,
} from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

import { useState } from 'react';
import { indigo, red } from '@material-ui/core/colors';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navigation = () => {
  const classes = useStyles();
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    // <AppBar position="static">
    //   <Container>
    //     <FormGroup>
    //       <FormControlLabel
    //         control={<Switch checked={auth} onChange={handleChange} aria-label="login switch" />}
    //         label={auth ? 'Logout' : 'Login'}
    //       />
    //     </FormGroup>
    //     <Toolbar>
    //       <IconButton edge="start" aria-label="menu" color="inherit">
    //         <MenuIcon />
    //       </IconButton>
    //       <Typography variant="h6">Gym App</Typography>
    //       {auth && (
    //         <div>
    //           <IconButton
    //             aria-label="account of current user"
    //             aria-controls="menu-appbar"
    //             aria-haspopup="true"
    //             onClick={handleMenu}
    //             color="inherit">
    //             <AccountCircle />
    //           </IconButton>
    //           <Menu
    //             id="menu-appbar"
    //             anchorEl={anchorEl}
    //             anchorOrigin={{
    //               vertical: 'top',
    //               horizontal: 'right',
    //             }}
    //             keepMounted
    //             transformOrigin={{
    //               vertical: 'top',
    //               horizontal: 'right',
    //             }}
    //             open={open}
    //             onClose={handleClose}>
    //             <MenuItem onClick={handleClose}>Profile</MenuItem>
    //             <MenuItem onClick={handleClose}>My account</MenuItem>
    //           </Menu>
    //         </div>
    //       )}
    //     </Toolbar>

    //     {/* <div>
    //       <IconButton
    //         aria-label="account of current user"
    //         aria-controls="menu-appbar"
    //         aria-haspopup="true"
    //         onClick={handleMenu}
    //         color="inherit">
    //         <AccountCircle />
    //       </IconButton>
    //       <Menu
    //         id="menu-appbar"
    //         anchorEl={anchorEl}
    //         anchorOrigin={{
    //           vertical: 'top',
    //           horizontal: 'right',
    //         }}
    //         keepMounted
    //         transformOrigin={{
    //           vertical: 'top',
    //           horizontal: 'right',
    //         }}
    //         open={open}
    //         onClose={handleClose}>
    //         <MenuItem onClick={handleClose}>Profile</MenuItem>
    //         <MenuItem onClick={handleClose}>My account</MenuItem>
    //       </Menu>
    //     </div> */}
    //   </Container>
    // </AppBar>
    <div className={classes.root}>
      <FormGroup>
        <FormControlLabel
          control={<Switch checked={auth} onChange={handleChange} aria-label="login switch" />}
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup>
      <AppBar position="static" style={{ marginBottom: '24px' }}>
        <Container maxWidth="lg">
          <Toolbar>
            {/* <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu">
              <MenuIcon />
            </IconButton> */}
            <Typography variant="h6" className={classes.title}>
              <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                Gym App
              </Link>
            </Typography>
            {/* {auth ? (
              <div>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit">
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={handleClose}>
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                </Menu>
              </div>
            ) : (
              [
                <Box mr={2}>
                  <Button
                    color="inherit"
                    style={{ background: indigo[500], color: 'inherit' }}
                    variant="contained">
                    Войти
                  </Button>
                </Box>,
                <Box>
                  <Button style={{ background: red[400], color: 'inherit' }} variant="contained">
                    Создать аккаунт
                  </Button>
                </Box>,
              ]
            )} */}
            <Box mr={3}>
              <Button color="inherit" variant="outlined">
                <Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>
                  Войти
                </Link>
              </Button>
            </Box>
            <Button color="secondary" variant="contained">
              <Link to="/register" style={{ textDecoration: 'none', color: 'white' }}>
                Регистрация
              </Link>
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navigation;
