import {Box, Typography} from "@mui/material";

//Para distinguir el espacio que tienen cada uno de nuestros contenedores, inicialmente siempre es bueno darle
// colores distintivos a cada uno de nuestros elementos, por ejemplo a el rightbar le agregamos un lightcoral al inicio
const Rightbar = () => {
    return (
        //Con flex podemos indicar la cantidad de unidades de ancho que ocupara el elemento box
        <Box flex={2} padding={2} sx={{display:{xs: "none", sm:"block"}}}>
            {/*Agrego 2 box aqui por la misma razon del sidebar*/}
            <Box position="fixed">
                <Typography variant="h6" fontWeight={100}>Online Friends</Typography>

            </Box>
        </Box>
    );
};

export default Rightbar;

