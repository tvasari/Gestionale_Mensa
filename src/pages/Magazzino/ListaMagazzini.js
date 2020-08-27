import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemSecondaryAction } from '@material-ui/core/';
import { Typography, Divider, IconButton } from '@material-ui/core/';
import AddIcon from '@material-ui/icons/Add';
import AddFormDialog from 'components/AddFormDialog';
import LinkToPage from 'components/LinkToPage';
import StyledButton from 'components/StyledButton';
import { Edit, Delete } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  workBench: theme.workBench
}));

const ListaMagazzini = () => {
  const classes = useStyles();

  return (
    <List className={classes.workBench}>
      <ListItem>
        <StyledButton>
            <LinkToPage page="Arquata_1" />
        </StyledButton>
        <ListItemSecondaryAction>
          <IconButton edge="end">
            <Edit />
          </IconButton>
          <IconButton edge="end">
            <Delete />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
      <ListItem>
        <StyledButton>
            <LinkToPage page="Arquata_2" />
        </StyledButton>
        <ListItemSecondaryAction>
          <IconButton edge="end">
            <Edit />
          </IconButton>
          <IconButton edge="end">
            <Delete />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
      <ListItem>
        <Typography color="primary">Aggiungi nuovo</Typography>
        <AddFormDialog 
          trigger={<AddIcon color="primary"/>}
          title="Magazzino"
          textFieldPlaceholder="Magazzino"
        />
      </ListItem>
    </List>
  );
}

export default ListaMagazzini;