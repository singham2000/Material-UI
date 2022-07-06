import React from 'react'
import { AppBar, Avatar } from '@mui/material'
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar'
import Badge from '@mui/material/Badge';
import Typography from '@mui/material/Typography'
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';

const LogoLg = styled('div')(({ theme }) => ({
    padding: theme.spacing(1),
    display: "none",
    [theme.breakpoints.up('sm')]: {
        display: "block",
    },
}));
const LogoSm = styled('div')(({ theme }) => ({
    padding: theme.spacing(1),
    display: "block",
    [theme.breakpoints.up('sm')]: {
        display: "none",
    },
}));
const Icons = styled('div')(({ theme }) => ({
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    width: "80%",
    right: "0",
    [theme.breakpoints.up('sm')]: {
        position: "absolute",
        justifyContent: "space-around",
        width: "8vw"
    },
}))
const Navbar = () => {
    return (
        <AppBar position="fixed" color="primary">
            <Toolbar>
                <LogoLg>
                    <Typography variant="h6">
                        ThunderCode
                    </Typography>
                </LogoLg>
                <LogoSm>
                    <Typography variant="h6">
                        T C
                    </Typography>
                </LogoSm>
                <Icons>
                    <Badge badgeContent={4}>
                        <MailIcon />
                    </Badge>
                    <Badge badgeContent={8}>
                        <NotificationsIcon />
                    </Badge>
                    <Avatar alt="Surya" />
                </Icons>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar