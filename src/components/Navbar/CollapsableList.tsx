import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import { List, ListItem } from '@material-ui/core/';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  nested: {
    paddingLeft: theme.spacing(4),
  }
}));

const CollapsableList = ({ elemsToDispaly }: any) => {
  const classes = useStyles();

  return(
    <Collapse in={true} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        {
          elemsToDispaly.map((elem: any) => {
            return(
              <ListItem button key={elem.key} className={classes.nested}>
                { elem }
              </ListItem>
            );
          })
        }
      </List>
      <Divider/>
    </Collapse>
  );
}

export default CollapsableList;