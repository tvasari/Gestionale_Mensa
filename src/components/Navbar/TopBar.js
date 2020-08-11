import React from 'react';
import logo from '../../img/logo.png';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { NavLink } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: '#1976d2',
    },
    toolBar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 0
    }
}));


const TopBar = () => {
    const classes = useStyles();

    return(
        <AppBar position="relative" className={classes.appBar}>
            <Toolbar className={classes.toolBar}>
                <div className={classes.toolBar}>
                    <NavLink style={{display: 'contents'}} to="/gestionale_mensa">
                        <img src={logo} alt="Italiana Mense" style={{padding: '0 8px', margin: '0 30px', width: '5vw', height: '64px'}}/>
                    </NavLink>
                    <Box m={1}>
                        <Avatar src="/broken-image.jpg" />
                    </Box>
                    <Typography>Nome_Utente</Typography>
                </div>
                <Button color="inherit">Esci</Button>
            </Toolbar>
        </AppBar>
    );
}

export default TopBar;