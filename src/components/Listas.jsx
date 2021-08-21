import React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import { dias } from "../data/data.json";

function Listas() {
  return (
    <div>
      <List component="nav">
        {dias.map((dia) => (
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
      </List>
    </div>
  );
}

export default Listas;
