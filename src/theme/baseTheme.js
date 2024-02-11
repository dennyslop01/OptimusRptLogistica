import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const baseTheme = createTheme({
    palette: {
        primary: {
            main: '#01579b'
        },
        secondary: {
            main: '#543884'
        },
        error: {
            main: red.A400
        }
    }
    
})