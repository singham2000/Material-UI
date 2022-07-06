import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: red[500],
        },
        secondary: {
            main: '#11cb5f',
        }
    },
});