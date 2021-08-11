import React from "react";
import { makeStyles, Drawer, Divider } from "@material-ui/core";
import Listas from "./Listas";

const estilos = makeStyles((theme) => ({
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerpaper: {
    width: 240,
  },
  toolbar: theme.mixins.toolbar,
}));

function Cajon(props){
  const classes = estilos();
  const {handleContenedor}= props
  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerpaper,
      }}
      anchor="left"
    >
      <div className={classes.toolbar}></div>
      <Divider />
      <Listas handleContenedor={handleContenedor}/>
    </Drawer>
  );
};

export default Cajon;
