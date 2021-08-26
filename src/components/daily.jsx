import React, { useState, useEffect } from "react";
import Preview from "./Preview";
import { infoDias } from "./Peticiones";
import { Grid } from "@material-ui/core";

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

export default function Daily(props) {
  const [info, setinfo] = useState([]);

  const getData = (day) => {
    day?
    infoDias(day).then((res) => setinfo(res.data[day]))
    :console.log("esperando respuesta");
  };

  useEffect(() => {
    getData(fecha())
  }, []);

  useEffect(() => {
    getData(props.datos.pair);
    return () => {
      setinfo([]);
    };
  }, [props.datos.pair]);

  return (
    <Grid container spacing={1}>
      <Grid
        container
        spacing={1}
        direction="row"
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        wrap="nowrap"
      >
        {props.datos.dia ? (
          <h3>{props.datos.dia}</h3>
        ) : (
          <h3>Seleccion diaria</h3>
        )}
      </Grid>
      {info.length===0?<h3>cargando</h3>:info.map((item) => {
        return (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            className="listado"
            onClick={() => props.handleTarjeta(item)}
            key={item.mal_id}
          >
            <Preview className="borderCard" datos={item} />
          </Grid>
        );
      })}
    </Grid>
  );
}