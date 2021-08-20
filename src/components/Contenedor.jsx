import React, { useState } from "react";

import { Hidden, makeStyles } from "@material-ui/core";

import Navbar from "./Navbar";
import Cajon from "./Cajon";
import Search from "./search";
import Daily from "./daily";



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
  const [dayInfo, setdayInfo] = useState({});//info del dia actual/seleccionado de listas
  const [valueSearch, setvalueSearch] = useState("");//ña busqueda que proviene de search
  const [abrir, setabrir] = useState(false);//que se va a mostrar


  function handleContenedor(e) {
    //console.log(e,"webs");
    setdayInfo(e);
    setabrir(false)
  }

  function handleSearch(e) {
    setvalueSearch(e);
    setabrir(true)
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
        
        {abrir
        ?<Search search={valueSearch}/>
        :<Daily datos={dayInfo}/>
        }
        
      </main>
    </div>
  );
}

export default Contenedor;
