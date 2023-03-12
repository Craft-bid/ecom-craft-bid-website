import { Box, AppBar, Toolbar, IconButton, Typography, Avatar, Button } from "@mui/material";
import {ReactComponent as Logo} from "../../assets/logo.svg";
import {SvgIcon} from "@mui/material";
import { useTheme } from "@mui/material";
export function Header()
{
  const them = useTheme();
    return(
    <Box
    maxHeight={100}>
      <AppBar
      >
        <Toolbar>
          <Box
          flexGrow={1}  
          display="flex"     
          >
        <IconButton
            size='small'
            edge='start'
          >
        <Logo
    height={100}
    width={400}
    fill="white"
    />
            </IconButton>
            </Box>
            <Button variant="text" color="inherit"
          >
            <Typography
            variant='h6'
            component='div'
            fontFamily={'Roboto'}
          >
            CONTACT US
          </Typography>
          </Button>
          <Button variant="text" color="inherit"
          sx={{
            marginLeft: 10
          }}
          >
          <Typography
            variant='h6'
            component='div'
            fontFamily={'Roboto'}
          >
            ENGLISH
          </Typography>
          </Button>
          <Button
          sx={{
            marginLeft: 10,
            height: 40,
            width: 100,
          }}
          variant="outlined"
          color="inherit"
          >
              SIGN IN
          </Button>
          <Button
          sx={{
            marginLeft: 10,
            marginRight: 10,
            height: 40,
            width: 100,
          }}
          variant="outlined"
          color="inherit"
          >
              SIGN UP
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
    )
}   