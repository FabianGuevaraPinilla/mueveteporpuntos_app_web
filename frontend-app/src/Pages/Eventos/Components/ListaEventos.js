import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import ItemEvento from "./ItemEvento";
import { Grid } from "@material-ui/core";

export default class ListaEventos extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Grid
        container
        spacing={{ sm: 10, md: 10 }}
        columns={{ xs: 1, sm: 4, md: 8 }}
      >
        {this.props.dataEventos.map((evento, key) => {
          return (
            <Grid
              className="d-flex justify-content-center"
              xs={12}
              sm={4}
              md={4}
              key={key}
            >
              <ItemEvento dataEvento={evento} />
            </Grid>
          );
        })}
      </Grid>
    );
  }
}
