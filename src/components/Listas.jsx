import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@material-ui/core";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import ComputerIcon from "@material-ui/icons/Computer";
import { dias } from "../data/data.json";
import { Component } from "react";

class Listas extends Component {
  _handleClick(props) {
    let { pair } = props;
    console.log(this, "cerda");
    this.setState({ accion: pair });
  }
  render() {
    return (
      <div>
        <List component="nav">
          {dias.map((dia) => (
            // <ListItem key={dia.id} button onClick={()=>this._handleClick(dia)}>
            <ListItem
              key={dia.id}
              button
              onClick={() => this.props.handleContenedor(dia)}
            >
              <ListItemIcon>
                <CalendarTodayIcon />
              </ListItemIcon>
              <ListItemText>{dia.dia}</ListItemText>
            </ListItem>
          ))}
          <Divider />
          <ListItem button>
            <ListItemIcon>
              <ComputerIcon />
            </ListItemIcon>
            <ListItemText primary="Todo" />
          </ListItem>
        </List>
      </div>
    );
  }
}

export default Listas;
