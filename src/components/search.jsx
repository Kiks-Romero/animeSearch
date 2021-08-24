import React, { useState, useEffect } from "react";
import Preview from "./Preview";
import { dataAnime } from "./Peticiones";
import Grid from "@material-ui/core/Grid";

function Search(props) {
  const [dAnime, setdAnime] = useState([]);
  // const [aSelected, setaSelected] = useState("");

  useEffect(() => {
    dataAnime(props.search).then((res) => setdAnime(res.data.results));
    return () => setdAnime([]);
  }, [props.search]);
  // if (props.search && props.search !== aSelected) {
  //   setaSelected(props.search);
  // }

  // dataAnime(aSelected).then((res) => {
  //   setdAnime(res.data.results);
  // });

  return (
    <>
      <Grid
        container
        spacing={1}
        direction="row"
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        wrap="nowrap"
      >
        <h3>{props.search}</h3>
      </Grid>

      <Grid container spacing={1}>
        {dAnime.map((item) => {
          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              onClick={() => props.handleTarjeta(item)}
              key={item.mal_id}
            >
              <Preview className="borderCard" datos={item} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

export default Search;
