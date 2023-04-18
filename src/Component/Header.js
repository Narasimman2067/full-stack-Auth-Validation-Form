import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

import "../Css/Header.css";
import { Menu, MenuItem } from "@mui/material";

// const pages = ['Home', 'Login', 'LogOut'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout',];

function ResponsiveAppBar({ currentUser, contacts }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [currentUserName, setcurrentUserName] = React.useState(null);
  const [currentUserAvatarImage, setcurrentUserAvatarImage] = React.useState(
    null
  );
  const [currentUserSelected, setcurrentUserSelected] = React.useState(null);
  React.useEffect(() => {
    // const data = await JSON.parse(
    //   localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
    // );
    console.log(currentUser);
    console.log(contacts);
    if (currentUser) {
      setcurrentUserName(currentUserName);
      setcurrentUserAvatarImage(currentUserAvatarImage);
    }
    // setCurrentSelected(contacts.length>0)
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
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Typography
              variant="h6"
              sx={{
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
              <a href="/">Home</a>
            </Typography>
            <Typography
              variant="h6"
              sx={{
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
              <a href="/">Login</a>
            </Typography>
            <Typography
              variant="h6"
              sx={{
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
              <a href="/">Logout</a>
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

            {/* <Typography
          variant="h6"
          sx={{
            mr:2,
            mt:2,
            alignItems:"center",
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.1rem',
            fontSize:"1.5rem",
            color: 'inherit',
            textDecoration: 'none',
            cursor:"pointer",
          }}
          >
            
              Login
           
          </Typography>
          <Typography
          variant="h6"
          sx={{
            mr:2,
            mt:1,
            alignItems:"center",
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.1rem',
            fontSize:"1.5rem",
            color: 'inherit',
            textDecoration: 'none',
          }}
          >
            
              Logout
           
          </Typography> */}
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
                display: { xs: "block", md: "none" },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  mr: 2,
                }}
              >
                <a href="/">Home</a>
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  mr: 2,
                }}
              >
                <a href="/login">Login</a>
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  mr: 2,
                }}
              >
                <a href="/login">Logout</a>
              </Typography>
              {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))} */}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {/* {contacts &&
                  contacts.map((contact, products) => {
                    return (
                      <Typography
                        className={`contact ${
                          products === currentUserSelected ? "selected " : ""
                        }`}
                        key={products.id}
                      >
                        <Typography className="avatar1">
                          <img
                            className={`avatar1-img${
                              products === currentUserSelected
                                ? "selected "
                                : ""
                            }`}
                            key={products.id}
                            src={`data:image/svg+xml;base64,${contact.avatarImage}`}
                            alt="avatar"
                          />
                        </Typography>
                        <Typography className="username1">
                          <h1>{currentUserName.userName}</h1>
                        </Typography>
                      </Typography>
                    );
                  })} */}
{/* 
                <Typography className="avatar2" sx={{
                height:'5rem',
              }}>
                  <img
                    className="img"
                    src={`data:image/svg+xml;base64,${currentUserAvatarImage}`}
                    alt="avatar"
                  />
                </Typography>
                <Typography className="username2">
                  {currentUserName}
                </Typography>
                <Typography className="avatar2">
                  <img
                    className="img"
                    src={`data:image/svg+xml;base64,${currentUserAvatarImage}`}
                    alt="avatar"
                  />
                </Typography> */}

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
              {/* {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                  
                </MenuItem>
              ))} */}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
