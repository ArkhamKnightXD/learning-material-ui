import React from 'react';
import {Button, styled, Typography} from "@mui/material";
import {Add, Settings} from "@mui/icons-material";

//De esta forma creo mi propio styled component, el parametro inicial es el tipo de componente que crearemos
//Tambien le agregamos nuestro theme para hacer uso de cualquiera de sus propiedades
const BlueButton = styled(Button)(({theme}) =>({

    //De esta forma puedo utilizar mi theme en un styled component
    // backgroundColor: theme.palette.primary.light,
    backgroundColor: "skyblue",
    color: "#888",
    margin: 5,

    //   para indicar que hara cuando el mouse le pase por encima
    "&:hover": {
        backgroundColor: "lightblue"
    },

    //indicar el estilo que tomara cuando el boton esta disabled
    "&:disabled": {
        backgroundColor: "gray",
        color: "white"
    }
}));

const BasicButtons = () => {
    return (
        <>
            {/*Estas son las opciones de botones */}
            <Button variant="text">Text</Button>
            <Button variant="outlined">Outlined</Button>

            {/*Podemos darle distintas opciones como cambiar el color o poner que el boton sea un icono */}
            {/*Podemos importar los iconos llamando por el nombre de la busqueda de la pagina de material ui*/}
            <Button variant="contained" color="secondary" startIcon={<Settings/>}>Contained</Button>
            <Button variant="contained" color="primary" startIcon={<Add/>}>Add new post</Button>

            {/*En la mayoria de casos no indicamos el componente, pero es bueno saber que se puede hacer esto*/}
            <Typography variant="h1" component="p">
                It uses h1 Style but it's a p tag
            </Typography>

            {/*Si deseamos agregar un color especifico a un boton, los componentes mui tienen una propiedad sx
        donde aplicamos nuestros propios estilos esto funciona igual con style*/}
            {/*<Button variant="contained" sx={*/}
            {/*    {*/}
            {/*        backgroundColor: "skyblue",*/}
            {/*        color: "#888",*/}
            {/*        margin: 5,*/}

            {/*        //   para indicar que hara cuando el mouse le pase por encima*/}
            {/*        "&:hover": {*/}
            {/*            backgroundColor: "lightblue"*/}
            {/*        },*/}

            {/*        //indicar el estilo que tomara cuando el boton esta disabled*/}
            {/*        "&:disabled": {*/}
            {/*            backgroundColor: "gray",*/}
            {/*            color: "white"*/}
            {/*        }*/}
            {/*    }*/}
            {/*}>*/}
            {/*    My unique button*/}
            {/*</Button>*/}


            {/*   De esta forma mostramos utilizamos nuestro style componente*/}
            <BlueButton>My unique button</BlueButton>
            <BlueButton>Another unique button</BlueButton>
        </>
    );
};

export default BasicButtons;
