import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';


const Item = () => {
    return(
        <ListItem>
            <ListItemText
                primary="Nome del piatto o ingrediente"
                secondary="ingredienti del piatto o um e costo/um dell'ingrediente"
            />
            <ListItemSecondaryAction>
                <IconButton edge="end">
                    <EditIcon />
                </IconButton>
                <IconButton edge="end">
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
}

export default Item;