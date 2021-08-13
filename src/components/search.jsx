import React, { Component } from "react";
import Preview from "./preview";
import Tarjeta from "./Tarjeta";
import { dataAnime } from "./Peticiones";
import Grid from "@material-ui/core/Grid";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      dAnime: [], //base de datos(todos los datos en array de objetos del fetch)
      aSelected: "", //string a buscar desde nav bar
      card: {}, //contiene la seleccion de la tarjera a visualizar
    };
  }

  _handleClick(props) {
    this.setState({ card: props });
  }

  render() {
    let { dAnime, aSelected, card } = this.state;
    if (this.props.search && this.props.search !== this.state.aSelected) {
      this.setState({ aSelected: this.props.search });

      dataAnime(aSelected).then((res) => {
        this.setState({ dAnime: res.data.results });
      });
    }

    return (
      <>
        {card.title ? (
          <Tarjeta infoTarjeta={card} />
        ) : (
          <Grid container spacing={1}>
            {dAnime.map((item) => {
              return (
                <Grid
                  xs={12}
                  sm={6}
                  md={3}
                  onClick={() => this._handleClick(item)}
                  key={item.mal_id}
                >
                  <Preview className="borderCard" datos={item} />
                </Grid>
              );
            })}
          </Grid>
        )}
      </>
    );
  }
}
export default Search;
