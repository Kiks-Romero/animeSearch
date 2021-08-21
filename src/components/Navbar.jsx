import React, { useState } from "react";
import {
  makeStyles,
  IconButton,
  AppBar,
  Toolbar,
  Typography,
  Paper,
  InputBase,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";


const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${240}px)`,
      marginLeft: 240,
    },
  },
}));

const Navbar = (props) => {
  const [busqueda, setbusqueda] = useState("");

  const handleChange= (value)=> {
    setbusqueda(value);
  }

  const handleSubmit=(e)=> {
    e.preventDefault();
    if(busqueda)props.handleSearch(busqueda)
  }

  const classes = useStyles();
  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          className={classes.menuButton}
          aria-label="open drawer"
          edge="start"
          onClick={() => props.accionAbrir()}
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" noWrap className={classes.title}>
          Anime
        </Typography>
        <Paper component="form" onSubmit={handleSubmit}>
          <InputBase
            placeholder="   Que anime buscas?"
            inputProps={{ "aria-label": "Que anime buscas..." }}
            onChange={(data) => handleChange(data.target.value)}
          />
          <IconButton type="submit" aria-label="search">
            
              <SearchIcon />           
          </IconButton>
        </Paper>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
