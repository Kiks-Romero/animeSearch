import React, { useState } from "react";

import { Hidden, makeStyles } from "@material-ui/core";

import Navbar from "./Navbar";
import Cajon from "./Cajon";
import Search from "./Search";
import Daily from "./Daily";
import Tarjeta from "./Tarjeta";

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
  const [dayInfo, setdayInfo] = useState({}); //info del dia actual/seleccionado de listas
  const [valueSearch, setvalueSearch] = useState(""); //ña busqueda que proviene de search
  const [abrir, setabrir] = useState(false); //funcion de nav bar para buen funcionamiento
  const [visible, setvisible] = useState(0); //para saber q imprime en q momento
  const [datosTarjeta, setdatosTarjeta] = useState({});

  const fecha = () => {
    const fecha = new Date(),
      days = [
        "sunday",
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
      ],
      hoy = days[fecha.getDay()];
    return hoy;
  };

  const handleContenedor = (e) => {
    //console.log(e,"webs");
    setdayInfo(e);
    setvisible(0);
  };

  const handleSearch = (e) => {
    setvalueSearch(e);
    setvisible(1);
  };

  const accionAbrir = () => {
    setabrir(!abrir);
  };

  const handleTarjeta = (e) => {
    setdatosTarjeta(e);
    setvisible(2);
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

        {visible === 0 && (
          <Daily datos={dayInfo} handleTarjeta={handleTarjeta} dia={fecha()} />
        )}
        {visible === 1 && (
          <Search search={valueSearch} handleTarjeta={handleTarjeta} />
        )}
        {visible === 2 && <Tarjeta infoTarjeta={datosTarjeta} />}
      </main>
    </div>
  );
}

export default Contenedor;
