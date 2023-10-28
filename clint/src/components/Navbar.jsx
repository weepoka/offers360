import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";

const pages = ["Home", "About", "Products", "Contact Us"];
const settings = ["Home", "About", "Products", "Contact Us"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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
    <AppBar sx={{ backgroundColor: "white" }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "red",
              textDecoration: "none",
            }}
          >
            <Link to={"/"}>
              <img className="w-[150px]" src="./assets/logo360.png" alt="" />
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon className="text-[#130f40]" />
            </IconButton>
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
              <Link to="/">
                <MenuItem className="text-red-500" onClick={handleCloseNavMenu}>
                  <p textAlign="center">Home</p>
                </MenuItem>
              </Link>
              <Link to="/about">
                <MenuItem className="text-red-500" onClick={handleCloseNavMenu}>
                  <p textAlign="center">About us</p>
                </MenuItem>
              </Link>
              <Link to="/contact">
                <MenuItem className="text-red-500" onClick={handleCloseNavMenu}>
                  <p textAlign="center">Contact Us</p>
                </MenuItem>
              </Link>
              <Link to="/faq">
                <MenuItem className="text-red-500" onClick={handleCloseNavMenu}>
                  <p textAlign="center">FAQ</p>
                </MenuItem>
              </Link>
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,

              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "red",
              textDecoration: "none",
            }}
          >
            <Link to={"/"}>
              <img className="w-[80px]" src="./assets/logo360.png" alt="" />
            </Link>
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center !important",
            }}
          >
            <Link to="/">
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "#130f40",
                  display: "block",
                  backgroundColor: "transparent",
                  "&:hover": {
                    backgroundColor: "#ff6340", // Background color on hover
                    color: "white", // Text color on hover
                  },
                }}
              >
                Home
              </Button>
            </Link>
            <Link to="/about">
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "#130f40",
                  display: "block",
                  backgroundColor: "transparent",
                  "&:hover": {
                    backgroundColor: "#ff6340", // Background color on hover
                    color: "white", // Text color on hover
                  },
                }}
              >
                About us
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "#130f40",
                  display: "block",
                  backgroundColor: "transparent",
                  "&:hover": {
                    backgroundColor: "#ff6340", // Background color on hover
                    color: "white", // Text color on hover
                  },
                }}
              >
                Contact Us
              </Button>
            </Link>
            <Link to="/faq">
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "#130f40",
                  display: "block",
                  backgroundColor: "transparent",
                  "&:hover": {
                    backgroundColor: "#ff6340", // Background color on hover
                    color: "white", // Text color on hover
                  },
                }}
              >
                FAQ
              </Button>
            </Link>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Link to="/alljobs">
              <Button
                sx={{
                  backgroundColor: "#ff6348",
                  "&:hover": {
                    backgroundColor: "#ff6340",
                  },
                }}
                variant="contained"
              >
                Apply Now
              </Button>
            </Link>
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
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
