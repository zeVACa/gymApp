import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import '../components/styleDrawer.css';

import TrendingUpOutlinedIcon from '@material-ui/icons/TrendingUpOutlined';
import OutlinedFlagRoundedIcon from '@material-ui/icons/OutlinedFlagRounded';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import HistoryOutlinedIcon from '@material-ui/icons/HistoryOutlined';

import PreSessionPage from './SessionPages/PreSessionPage/PreSessionPage';
import SessionPage from './SessionPages/SessionPage/SessionPage';
import SessionResults from './SessionPages/SessionResultsPage';

import ProgressPage from '../pages/ProgressPage';
import MyTrainingPlan from '../pages/MyTrainingPlan';
import HistoryPage from '../pages/HistoryPage';
import SettingsPage from '../pages/SettingsPage';

import { Link, Route, Switch } from 'react-router-dom';

const drawerWidth = 264;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function MiniDrawer({ setUser, user }) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const [trainingPlan, setTrainingPlan] = useState([]);
  const [currentDayIndex, setCurrentDayIndex] = useState(0);

  const [activeElementMenu, setActiveElementMenu] = React.useState('');

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={
              (classes.menuButton,
              {
                [classes.hide]: open,
              })
            }>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap className={classes.title}>
            Gym App
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}>
        <div className={classes.toolbar} style={{ background: '#fff' }}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List style={{ padding: 0 }}>
          <Link to="/pre-session">
            <ListItem
              onClick={() => setActiveElementMenu('/pre-session')}
              selected={activeElementMenu.toString() === '/pre-session'.toString()}
              button
              style={{ height: '56px' }}>
              <ListItemIcon>
                <OutlinedFlagRoundedIcon />
              </ListItemIcon>
              <ListItemText primary={'Начать тренировку'} />
            </ListItem>
          </Link>
          <Link to="/progress">
            <ListItem
              onClick={() => setActiveElementMenu('/progress')}
              selected={activeElementMenu.toString() === '/progress'.toString()}
              button
              style={{ height: '56px' }}>
              <ListItemIcon>
                <TrendingUpOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary={'Мой прогресс'} />
            </ListItem>
          </Link>
          <Link to="/my-training-plan">
            <ListItem
              onClick={() => setActiveElementMenu('/my-training-plan')}
              selected={activeElementMenu.toString() === '/my-training-plan'.toString()}
              button
              style={{ height: '56px' }}>
              <ListItemIcon>
                <ExploreOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary={'План тренировок'} />
            </ListItem>
          </Link>
          <Link to="/training-history">
            <ListItem
              onClick={() => setActiveElementMenu('/training-history')}
              selected={activeElementMenu.toString() === '/training-history'.toString()}
              button
              style={{ height: '56px' }}>
              <ListItemIcon>
                <HistoryOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary={'История тренировок'} />
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List
          style={{
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            justifyContent: 'flex-end',
            padding: 0,
          }}>
          <Divider />
          <Link to="settings">
            <ListItem
              onClick={() => setActiveElementMenu('settings')}
              selected={activeElementMenu.toString() === 'settings'.toString()}
              style={{ height: '56px' }}
              button>
              <ListItemIcon>
                <SettingsOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary={'Настройки'} />
            </ListItem>
          </Link>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route exact path="/progress" component={ProgressPage} />
          <Route exact path="/my-training-plan" component={MyTrainingPlan} />
          <Route exact path="/training-history" component={() => <HistoryPage user={user} />} />
          <Route exact path="/settings" component={() => <SettingsPage setUser={setUser} />} />

          <Route
            exact
            path="/pre-session"
            component={() => (
              <PreSessionPage
                user={user}
                setTrainingPlan={setTrainingPlan}
                trainingPlan={trainingPlan}
                currentDayIndex={currentDayIndex}
                setCurrentDayIndex={setCurrentDayIndex}
              />
            )}
          />
          <Route
            exact
            path="/session"
            component={() => (
              <SessionPage
                trainingPlan={trainingPlan}
                setCurrentDayIndex={setCurrentDayIndex}
                currentDayIndex={currentDayIndex}
                user={user}
              />
            )}
          />
          <Route exact path="/SessionResults" component={SessionResults} />
        </Switch>
      </main>
    </div>
  );
}
