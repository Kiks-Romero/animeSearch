import React, { Component } from "react";
import Preview from "./preview";
import Tarjeta from "./Tarjeta";
import { infoDias } from "./Peticiones";
import { Grid } from "@material-ui/core";

function fecha() {
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
}

class Dayly extends Component {
  constructor() {
    super();
    this.state = {
      currentDay: fecha(),
      info: [], //contiene los datos del fetch o peticion
      seleccion: {}, //al seleccionar una tarjeta se modifica
      dayInfo: "", //trae info del padre
      active:false
    };
  }

  componentWillMount() {
    console.log("firstthiscalled");
  }

  getData(day) {
    infoDias(day).then((res) => {
      this.setState({
        info: res.data[day],
      });
    });
  }

  componentDidMount() {
    this.getData(fecha());
  }

  _handleClock(props) {
    this.setState({ seleccion: props });
  }

  render() {
    let { info } = this.state;
    if (this.props.datos.pair && this.props.datos.pair !== this.state.dayInfo) {
      this.setState({ dayInfo: this.props.datos.pair });
      this.getData(this.props.datos.pair);
    }
    return (
      <>
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
            {this.state.dayInfo ? (
              <h3>{this.props.datos.dia}</h3>
            ) : (
              <h3>Seleccion diaria</h3>
            )}
          </Grid>
          {this.state.seleccion.title ? (
            <>
              <Tarjeta infoTarjeta={this.state.seleccion} />
            </>
          ) : (
            info.map((item) => {
              return (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={3}
                  className="listado"
                  onClick={() => this._handleClock(item)}
                >
                  <Preview
                    className="borderCard"
                    datos={item}
                    key={item.mal_id}
                  />
                </Grid>
              );
            })
          )}
        </Grid>
      </>
    );
  }
}

export default Dayly;
