import React, { useState } from "react";

import { Hidden, makeStyles } from "@material-ui/core";

import Navbar from "./Navbar";
import Cajon from "./Cajon";
import Daily from "./daily";
import Search from "./search";

//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const estilos = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

function Contenedor() {
  const [dayInfo, setdayInfo] = useState({});
  const [valueSearch, setvalueSearch] = useState("");
  const [abrir, setabrir] = useState(false);

  function handleContenedor(e) {
    //console.log(e,"webs");
    setdayInfo(e);
  }

  function handleSearch(e) {
    setvalueSearch(e);
  }

  const accionAbrir = () => {
    setabrir(!abrir);
  };

  const classes = estilos();

  return (
    <div className={classes.root}>
      <Navbar handleSearch={handleSearch} accionAbrir={accionAbrir} />
      <Hidden xsDown>
        <Cajon
          handleContenedor={handleContenedor}
          variant="permanent"
          open={abrir}
        />
      </Hidden>
      <Hidden smUp>
        <Cajon
          handleContenedor={handleContenedor}
          variant="temporary"
          open={abrir}
          onClose={accionAbrir}
        />
      </Hidden>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        
        {!!valueSearch
        ?<Search search={valueSearch} />
        :<Daily datos={dayInfo} />
        }
        

        
      </main>
    </div>
  );
}

export default Contenedor;
