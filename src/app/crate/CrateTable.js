import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";

export default function CrateTable() {
  const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value) => () => {
    console.log(value);
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <div className="list__container">
      <List
        style={styles.list}
        dense
        sx={{ maxWidth: 360, bgcolor: "background.paper" }}
      >
        <h4 style={styles.listHeading}>Crates</h4>
        {[0, 1, 2, 3].map((value) => {
          const labelId = `checkbox-list-secondary-label-${value}`;
          return (
            <ListItem
              key={value}
              secondaryAction={
                <Checkbox
                  style={{ left: "-300px" }}
                  edge="end"
                  onChange={handleToggle(value)}
                  checked={checked.indexOf(value) !== -1}
                  inputProps={{ "aria-labelledby": labelId }}
                />
              }
              disablePadding
            >
              <ListItemButton
                style={{ display: "flex", flexDirection: "row-reverse" }}
              >
                <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
                <ListItemAvatar>
                  <Avatar
                    alt={`Avatar n°${value + 1}`}
                    src={`/static/images/avatar/${value + 1}.jpg`}
                  />
                </ListItemAvatar>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}

const styles = {
  list: {
    paddingLeft: "40px",
    background: "#dadada",
  },
  listHeading: {
    position: "relative",
    left: "-14.4px",
    fontWeight: 600,
    fontSize: "1.2rem",
  },
};
