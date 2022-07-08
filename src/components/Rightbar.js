import {Box} from "@mui/material";

const Rightbar = () => {
    return (
        //Con flex podemos indicar la cantidad de unidades de ancho que ocupara el elemento box
        <Box bgcolor="lightcoral" flex={2} padding={2} sx={{display:{xs: "none", sm:"block"}}}>
            Rightbar
        </Box>
    );
};

export default Rightbar;

