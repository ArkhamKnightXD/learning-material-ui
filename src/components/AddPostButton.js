import PropTypes from 'prop-types';
import {Fab, IconButton, Tooltip} from "@mui/material";
import {Add, Delete} from "@mui/icons-material";

const AddPostButton = props => {
    return (
        <>
            {/*Los Tooltip son basicamente botones los cuales tienen un icono y le sale texto cuando hacemos hover
            Funciona muy bien en conjunto con un  fab*/}
            {/*Con position fixed y bottom:20 nos aseguramos de que nuestro boton siempre se quede en la misma posicion
            y siempre este abajo*/}
            <Tooltip title="Delete" sx={{position: "fixed", bottom:20, left:{xs: "50%", md: "2%"}}}>
                <Fab color="primary" aria-label="add">
                    <Add />
                </Fab>
            </Tooltip>
        </>
    );
};

AddPostButton.propTypes = {

};

export default AddPostButton;
