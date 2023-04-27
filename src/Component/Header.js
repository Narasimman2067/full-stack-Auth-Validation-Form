import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";

import Tooltip from "@mui/material/Tooltip";

import "../Css/Header.css";
import { Menu } from "@mui/material";
import Logout from "./Logout";


function ResponsiveAppBar({ currentUser, contacts }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [currentUserName, setcurrentUserName] = React.useState(null);
  const [currentUserAvatarImage, setcurrentUserAvatarImage] = React.useState(
    null
  );
  const [currentUserSelected, setcurrentUserSelected] = React.useState(null);
  React.useEffect(() => {
   
    console.log(currentUser);
    console.log(contacts);
    if (currentUser) {
      setcurrentUserName(currentUserName);
      setcurrentUserAvatarImage(currentUserAvatarImage);
    }
    
  }, [currentUser]);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            className="logo-type"
            variant="h6"
            component={"a"}
            href="/"
            sx={{
              display: { xs: "none", md: "flex" },
              cursor: "pointer",
            }}
          >
            <img
              className="logo-header"
              src="https://cdn.dribbble.com/users/1223630/screenshots/8115260/media/8145a871d9c4d67ec06e047ccc6574b4.gif"
              alt=""
            />
            <h1>Chat Friend</h1>
          </Typography>
          <Box sx={{ flexGrow: 1, alignItems: "center",justifyContent:"left",margin:"0rem 4rem" ,display: { xs: "none", md: "flex" } }}>
            <Typography
              variant="h6"
              sx={{
                mr: 2,
                mt: 0,
                backgroundColor: "none !important",
                alignItems: "center",
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".1rem",
                fontSize: "1.5rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <a href="/">Home</a>
            </Typography>
            <Typography
              variant="h6"
              sx={{
                mr: 2,
                mt: 0,
                backgroundColor: "none !important",
                alignItems: "center",
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".1rem",
                fontSize: "1.5rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <a href="/login">Login</a>
            </Typography>
            <Typography
              variant="h6"
              sx={{
                mr: 2,
                mt: 0,
                display:"flex",
                backgroundColor: "none !important",
                alignItems: "center",
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".1rem",
                fontSize: "1rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <a href="/login" style={{
                mr: 2,
                mt: 0,
                padding:"5px",
                display:"flex",
                backgroundColor: "none !important",
                alignItems: "center",
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".1rem",
                fontSize: "1rem",
                color: "inherit",
                textDecoration: "none",
              }}>Logout </a><span><Logout/></span>
            </Typography>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              mr: 2,
              mt: 1,
              backgroundColor: "none !important",
              alignItems: "center",
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".1rem",
              fontSize: "1.5rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Typography className="logo-type" variant="h6" href="/">
              <img
                className="logo-header"
                src="https://cdn.dribbble.com/users/1223630/screenshots/8115260/media/8145a871d9c4d67ec06e047ccc6574b4.gif"
                alt=""
              />
            </Typography>

      
            <Menu
           
              id="menu-appbar"
             
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                mt: 0.5,padding:"3rem",
                
                display: { xs: "block", md: "none" },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  mt: 2,padding:"2rem 3rem",
                }}
              >
                <a href="/" style={{padding:"1rem 3rem"}}>Home</a>
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  mt: 2,padding:"2rem 3rem"
                }}
              >
                <a href="/login" style={{padding:"1rem 3rem"}}>Login</a>
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  mt: 2,padding:"2rem 3rem"
                }}
              >
                <a href="/login" style={{padding:"1rem 3rem"}}>Logout</a>
              </Typography>
         
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
               
              
               
               

                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
           
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
