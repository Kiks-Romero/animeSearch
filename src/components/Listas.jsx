import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  
} from "@material-ui/core";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";

import { dias } from "../data/data.json";
import { Component } from "react";

class Listas extends Component {
  // _handleClick(props) {
  //   let { pair } = props;
  //   console.log(this, "cerda");
  //   this.setState({ accion: pair });
  // }
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
          {/* <Divider />
          <ListItem button onClick={()=>this.props.home}>
            <ListItemIcon>
              <HomeIcon/>
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem> */}
        </List>
      </div>
    );
  }
}

export default Listas;
