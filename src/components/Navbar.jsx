import React, { useState } from "react";
import { makeStyles,
      IconButton,
      AppBar,
      Toolbar,
      Typography,
      Paper,
      InputBase
    } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search"

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
    marginLeft: 240
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    width: `calc(100%-${240}px)`,
    marginLeft: 240   
  },
}));

const Navbar = (props) => {
  const [busqueda, setbusqueda] = useState('');
  
  // function _change(e){
  //   let entrada = e.target.value
  //   console.log(entrada,"webos");

  // }
  function handleChange(value){
    setbusqueda(value)
  }

  function handleSubmit(e){
    e.preventDefault()
    return props.handleSearch(busqueda)
  }


  const classes = useStyles();
  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <IconButton color="inherit" className={classes.menuButton} aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Anime
        </Typography>
          <Paper component="form" className={classes.root} onSubmit={handleSubmit}>
          <InputBase
            className={classes.input}
            placeholder="Que anime buscas..."
            inputProps={{ 'aria-label': 'Que anime buscas...' }}
            onChange={data=>handleChange(data.target.value) }
          />
          <IconButton 
            type="submit" 
            className={classes.iconButton} 
            aria-label="search"
            >
            <SearchIcon />
          </IconButton>
          </Paper>
        

        {/* <TextField 
          color="primary"
          id="outlined-search"
          label="Search Field"
          type="search"
          variant="outlined"
          onChange={(data)=>props.handleSearch(data)}
        />   */}
        {/* <Button variant="text" color="inherit">
          Login
        </Button> */}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
