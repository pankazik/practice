import {
  Avatar,
  IconButton,
  Button,
  Toolbar,
  Box,
  AppBar,
} from "@mui/material";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            component={Link}
            to="/"
          >
            <Avatar
              alt="logo"
              src="https://cdn-icons-png.flaticon.com/512/60/60817.png"
            />
          </IconButton>

          <Button component={Link} color="inherit" to="/services">
            Services
          </Button>
          <Button color="inherit" component={Link} to="/addservice">
            Add service
          </Button>
          <Button color="inherit" component={Link} to="/health">
            Health
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
