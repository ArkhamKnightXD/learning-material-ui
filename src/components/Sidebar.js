import React from 'react';
import {Box} from "@mui/material";

const Sidebar = () => {
    return (
        //Con los elementos box podemos utilizar propiedades css directamente, sin necesidad de utilizar sx o style
        <Box bgcolor="skyblue" flex={1} padding={2}>
            Sidebar
        </Box>
    );
};

export default Sidebar;
