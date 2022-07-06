import React from 'react'
import Container from '@mui/material/Container'
import { styled } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import Typography from '@mui/material/Typography'
const Items = styled('div')(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
        marginBottom: theme.spacing(8),
        cursor: "pointer"
    }
}))
// const Typography = styled(Typography)(({ theme }) => ({
//     display: "flex",
//     alignItems: "center",
//     marginBottom: theme.spacing(4),
//     [theme.breakpoints.up('sm')]: {
//         marginBottom: theme.spacing(3),
//         cursor: "pointer"
//     }
// }))
const Contain = styled(Container)(({ theme }) => ({
    paddingTop: theme.spacing(10),
    maxWidth: theme.xs,
    background: theme.palette.primary.main,
    height: "100vh",
    color: "#ffffff"
}))
const LeftBar = () => {
    return (
        <Contain>
            <Items>
                <HomeIcon />
                <Typography variant="h6" color="white" sx={{ display: { xs: "none", sm: "block" } }}>
                    HomePage
                </Typography>
            </Items>
            <Items>
                <HomeIcon />
                <Typography variant="h6" color="white" sx={{ display: { xs: "none", sm: "block" } }}>
                    HomePage
                </Typography>
            </Items>
            <Items>
                <HomeIcon />
                <Typography variant="h6" color="white" sx={{ display: { xs: "none", sm: "block" } }}>
                    HomePage
                </Typography>
            </Items>
            <Items>
                <HomeIcon />
                <Typography variant="h6" color="white" sx={{ display: { xs: "none", sm: "block" } }}>
                    HomePage
                </Typography>
            </Items>
        </Contain>
    )
}

export default LeftBar